(ns mini-ros.mode-controller
  (:require
   [clojure.core.async :refer [<! timeout go go-loop alts!]]
   [mini-ros.core :refer [subscribe publish!]]
   [mini-ros.line-seek :as line-seek]))

(defonce mode (atom :line-track))
(defonce last-line-seen (atom (System/currentTimeMillis)))

(defn line-seen?
  [{:keys [left middle right]}]
  (or left middle right))

(defn line-direction
  "Decide movement based on line sensor status."
  [{:keys [left middle right]}]
  (cond
    left   :left
    right  :right
    middle :forward
    :else  :stop))

(defn mode-controller-node []
  (let [line-ch (subscribe :line/status)
        us-ch (subscribe :ultrasound/distance)]

    (go-loop []
      (let [[val port] (alts! [line-ch us-ch])]

        ;; -----------------------
        ;; 🧠 Mode Transitions
        ;; -----------------------

        ;; Handle line sensor input
        (when (= port line-ch)
          (let [status (:payload val)]
            (case @mode
              :line-track
              (if (line-seen? status)
                (do
                  (reset! last-line-seen (System/currentTimeMillis))
                  (publish! :motor/cmd (line-direction status)))
                (when (> (- (System/currentTimeMillis) @last-line-seen) 1000)
                  (reset! mode :line-seek)
                  (publish! :motor/cmd :stop)))

              :line-seek
              (let [found? (<! (line-seek/line-seek!))]
                (if found?
                  (reset! mode :line-track)
                  (reset! mode :wander)))

              :wander
              (when (line-seen? status)
                (reset! mode :line-track)
                (reset! last-line-seen (System/currentTimeMillis)))

              :evade
              nil))) ; ignore line input during evade

        ;; Handle ultrasound input
        (when (= port us-ch)
          (let [dist (:payload val)]
            (when (and (< dist 15.0)
                       (not= @mode :evade))

              ;; 🚧 Enter evade mode
              (let [org-mode @mode]
                (reset! mode :evade)
                (go
                  (publish! :motor/cmd :backward)
                  (<! (timeout 400))
                  (publish! :motor/cmd (rand-nth [:left :right]))
                  (<! (timeout 600))
                  ;; Resume prior mode
                  (reset! mode org-mode)))))))

      (<! (timeout 200)) ;; slight tick delay
      (recur))))


(ns mini-ros.motor-arbiter
  (:require [clojure.core.async :refer [chan <! go-loop]]
            [mini-ros.core :refer [subscribe publish!]]))

;; ----------------------------------------------------------------------------
;; 🚦 Command Arbitration for Motors
;; ----------------------------------------------------------------------------

;; Define priorities (higher = more important)
(def priorities
  {:emergency/cmd 3
   :remote/cmd    2
   :avoidance/cmd 1
   :line/cmd      0})

(defonce motor-state
  (atom {:source nil :priority -1}))

(defn motor-arbiter-node
  "Listens to all motor command topics and only forwards the highest priority one."
  [motors drive-fn stop-fn]
  (doseq [topic (keys priorities)]
    (let [ch (subscribe topic)]
      (go-loop []
        (let [{:keys [payload]} (<! ch)
              prio (priorities topic)
              current @motor-state]
          (when (or (> prio (:priority current))
                    (= topic (:source current)))
            (swap! motor-state assoc :source topic :priority prio)
            (if (= payload :stop)
              (stop-fn [motors])
              (drive-fn motors payload))))
        (recur)))))

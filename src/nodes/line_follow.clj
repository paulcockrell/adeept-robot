(ns nodes.line-follow
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.motor-arbiter :refer [active-source?]]
            [mini-ros.core :refer [publish!]]
            [peripherals.ldr :as ldr]))

(defonce sensor-reading (atom {:left false :middle false :right false}))

(defn found-line? []
  (some true? (vals @sensor-reading)))

(defn lost-line? []
  (not (found-line?)))

(defn start-line-follow-node [ldr-sensor]
  (go-loop []
    (when (active-source? :line-follow/cmd)
      (let [status (ldr/status ldr-sensor)]
        (reset! sensor-reading status)
        (let [{:keys [left middle right]} status]
          (cond
            ;; Centered 
            (and middle (not left) (not right))
            (publish! :line-follow/cmd {:dir :forward :left-motor-speed 0.9 :right-motor-speed 0.9})

            ;; Slight left correction 
            (and left middle)
            (publish! :line-follow/cmd {:dir :forward :left-motor-speed 0.85 :right-motor-speed 0.95})

            ;; Slight right correction 
            (and right middle)
            (publish! :line-follow/cmd {:dir :forward :left-motor-speed 0.95 :right-motor-speed 0.85})

            ;; Hard left 
            (and left (not right) (not middle))
            (publish! :line-follow/cmd {:dir :forward :left-motor-speed 0.7 :right-motor-speed 1.0})

            ;; Hard right 
            (and right (not left) (not middle))
            (publish! :line-follow/cmd {:dir :forward :left-motor-speed 1.0 :right-motor-speed 0.7})

            ;; Else lost line
            :else
            (publish! :line-follow/cmd :stop)))))
    (<! (timeout 100))
    (recur)))

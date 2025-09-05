(ns robot.nodes.servo
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.mini-ros.state :refer [shutting-down?]]
            [robot.mini-ros.core :refer [publish!]]))

(defn rand-range [min max]
  (+ min (* (rand) (- max min))))

(defn start-servo-node [servo]
  (go-loop []
    (when-not @shutting-down?
      (let [angle (rand-range 50 90)]
        (publish! :servo/cmd {:servo servo :set-ang (int angle)})
        (<! (timeout 1000)))
      (recur))))


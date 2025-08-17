(ns robot.nodes.servo
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.mini-ros.state :refer [shutting-down?]]
            [robot.peripherals.servo :as servo]))

(defn rand-range [min max]
  (+ min (* (rand) (- max min))))

(defn start-servo-node [servo]
  (go-loop []
    (when-not @shutting-down?
      (let [angle (rand-range 50 90)]
        (servo/set-ang! servo 50)
        (<! (timeout 1000))
        (servo/set-ang! servo (int angle))
        (<! (timeout 1000)))
      (recur))))


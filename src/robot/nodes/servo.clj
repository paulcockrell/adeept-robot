(ns robot.nodes.servo
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.mini-ros.state :refer [shutting-down?]]
            [robot.hardware.servo :as servo]))

(defn rand-range [min max]
  (+ min (* (rand) (- max min))))

;; TODO This method just randomly moves the servo
;; intended to make use of it while in 'sentient'
;; mode. This method can be removed once we have
;; implemented manual-mode, as that will have a
;; practicle use for the servo/camera
(defn start-servo-node [servo]
  (go-loop []
    (when-not @shutting-down?
      (let [angle (rand-range 50 90)]
        (servo/set-ang! servo (int angle))
        (<! (timeout 1000)))
      (recur))))


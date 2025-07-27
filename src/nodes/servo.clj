(ns nodes.servo
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [peripherals.servo :as servo]))

(defn rand-range [min max]
  (+ min (* (rand) (- max min))))

(defn start-servo-node [servo]
  (go-loop []
    (let [angle (rand-range 50 90)]
      (servo/set-ang! servo angle)
      (<! (timeout 1000)))
    (recur)))


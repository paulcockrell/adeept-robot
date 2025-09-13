(ns robot.nodes.servo
  (:require [clojure.core.async :refer [go-loop <!]]
            [clojure.core.match :refer [match]]
            [robot.mini-ros.state :refer [shutting-down?]]
            [robot.mini-ros.core :refer [subscribe]]
            [robot.hardware.servo :as servo]))

(defonce percent (atom 0)) ; int 0 to 100

(defn clamp [v] (-> v (max 0) (min 100)))

(defn update-percent! [servo target]
  (let [clamped-target (clamp target)]
    (println "New servo position percentage:" clamped-target)
    (reset! percent clamped-target)
    (servo/set-ang! servo clamped-target)))

(defn start-servo-node [servo]
  (let [ch (subscribe :servo/cmd)]
    (go-loop []
      (let [{:keys [payload]} (<! ch)]
        (when-not @shutting-down?
          (match payload
            {:inc inc} (update-percent! servo (+ @percent inc))
            {:dec dec} (update-percent! servo (- @percent dec))
            _ (println "[SERVO NODE] Unknown payload:" payload))))
      (recur))))




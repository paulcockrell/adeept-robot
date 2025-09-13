(ns robot.nodes.servo
  (:require [clojure.core.async :refer [go-loop <!]]
            [clojure.core.match :refer [match]]
            [robot.mini-ros.state :refer [shutting-down?]]
            [robot.mini-ros.core :refer [subscribe]]
            [robot.hardware.servo :as servo]))

(defonce percent (atom 0)) ; int 0 to 100

(defn update-percent! [servo new-percent]
  (let [bounded-new-percent (-> new-percent (max 0) (min 100))]
    (println "New servo position percentage:" bounded-new-percent)
    (reset! percent bounded-new-percent)
    (servo/set-ang! servo bounded-new-percent)))

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




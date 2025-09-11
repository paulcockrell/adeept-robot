(ns robot.nodes.servo
  (:require [clojure.core.async :refer [go-loop <!]]
            [clojure.core.match :refer [match]]
            [robot.mini-ros.state :refer [shutting-down?]]
            [robot.mini-ros.core :refer [subscribe]]
            [robot.hardware.servo :as servo]))

(defn start-servo-node [servo]
  (let [ch (subscribe :servo/cmd)]
    (go-loop []
      (let [{:keys [payload]} (<! ch)]
        (when-not @shutting-down?
          (match payload
            {:inc ang} (servo/set-ang! servo (int ang))
            {:dec ang} (servo/set-ang! servo (int ang))
            :else (println "[SERVO NODE] Unknown payload:" payload))))
      (recur))))




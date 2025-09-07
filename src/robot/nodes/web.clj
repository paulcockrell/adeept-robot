(ns robot.nodes.web
  (:require [clojure.core.async :refer [go-loop <!]]
            [robot.mini-ros.core :refer [publish! subscribe]]
            [robot.mini-ros.state :refer [robot-state]]))

(defn start-web-node
  "Responds to commands sent from the webserver"
  []
  (let [ch (subscribe :robot/action)] ;TODO monitor all web-based topics: [:robot/action :camera/action :led/action]
    (go-loop []
      (let [{:keys [payload]} (<! ch)
            {:keys [operating-mode]} @robot-state
            topic :manual/cmd]
        (when (= operating-mode :manual)
          (println "Received a manual instruction while in manual mode. Payload" payload)
          (case payload
            :forward (publish! topic {:dir :forward :left-motor-speed 1.0 :right-motor-speed 1.0})
            :backward (publish! topic {:dir :forward :left-motor-speed 0.8 :right-motor-speed 0.8})
            :left (publish! topic {:dir :left})
            :right (publish! topic {:dir :right})
            :stop (publish! topic :stop)))) ; TODO we should filter this data so that only the motor arbiter gets motor commands
      (recur))))


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
            {:keys [operating-mode]} @robot-state]
        (when (= operating-mode :manual)
          (do
            (println "Received a manual instruction while in manual mode")
            (publish! :web/manual payload)))) ; we should filter this data
      (recur))))


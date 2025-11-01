(ns web.backend.log-forwarder
  (:require [web.backend.socket :as socket]
            [clojure.core.async :refer [<! go-loop]]
            [clojure.set :refer [union]]
            [robot.mini-ros.core :as ros]))

(defonce shutdown (atom false))

(def topics
  {:manual #{:manual/cmd}
   :sentient #{:line-follow/cmd :line-seek/cmd :avoidance/cmd :wander/cmd :servo/cmd}
   :programmable #{:program/cmd}
   :idle #{:idle/cmd}})

(defn start! []
  (doseq [topic (apply union (vals topics))]
    (let [ch (ros/subscribe topic)]
      (println "📡 [Web log forwarder] Subscribed to topic" topic)
      (go-loop []
        (let [{:keys [payload]} (<! ch)]
          (socket/broadcast! :robot/logs {:topic topic :payload payload}))
        (if @shutdown
          (println "[Web log forwarder] Shut down")
          (recur))))))

(defn stop! []
  (reset! shutdown true))

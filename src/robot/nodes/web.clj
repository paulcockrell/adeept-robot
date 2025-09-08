(ns robot.nodes.web
  (:require [clojure.core.async :refer [go-loop <!]]
            [robot.mini-ros.core :refer [publish! subscribe]]
            [robot.mini-ros.state :refer [robot-state]]))

(defonce web-topics [:web/motor-action :web/camera-action :web/led-action])

(def dispatch
  {:web/motor-action
   (fn [payload]
     (case payload
       :forward (publish! :web/motor-action {:dir :forward :left-motor-speed 1.0 :right-motor-speed 1.0})
       :backward (publish! :web/motor-action {:dir :backward :left-motor-speed 0.8 :right-motor-speed 0.8})
       :left (publish! :web/motor-action {:dir :left})
       :right (publish! :web/motor-action {:dir :right})
       :stop (publish! :web/motor-action :stop)
       (println "[WEB NODE] Unknown motor payload:" payload)))

   :web/camera-action
   (fn [payload]
     (case payload
       :up (publish! :web/camera-action {:inc 20})
       :down (publish! :web/camera-action {:dec 20})
       (println "[WEB NODE] Unknown camera payload" payload)))

   :web/action
   (fn [payload]
     (case payload
       :on (publish! :web/action {:on :true})
       :off (publish! :web/action {:on :false})
       (println "[WEB NODE] Unknown camera payload" payload)))})

(defn start-web-node
  "Responds to web issued commands and republishes translated payload"
  []
  (doseq [topic web-topics]
    (let [ch (subscribe topic)]
      (go-loop []
        (when-let [{:keys [payload]} (<! ch)]
          (let [{:keys [operating-mode]} @robot-state]
            (when (= operating-mode :manual)
              (if-let [handler (dispatch topic)]
                (handler payload)
                (println "[WEB NODE] No handler for topic:" topic)))))
        (recur)))))


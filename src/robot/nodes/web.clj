(ns robot.nodes.web
  (:require [clojure.core.async :refer [go-loop <!]]
            [robot.mini-ros.core :refer [publish! subscribe]]
            [robot.hardware.neopixel :as neopixel]
            [robot.mini-ros.state :refer [robot-state]]))

(defonce web-topics [:web/motor-action :web/camera-action :web/led-action])

(def dispatch
  {:web/motor-action
   (fn [payload]
     (case payload
       :forward (publish! :manual/cmd {:dir :forward :left-motor-speed 1.0 :right-motor-speed 1.0})
       :backward (publish! :manual/cmd {:dir :backward :left-motor-speed 0.8 :right-motor-speed 0.8})
       :left (publish! :manual/cmd {:dir :left})
       :right (publish! :manual/cmd {:dir :right})
       :stop (publish! :manual/cmd :stop)
       (println "[WEB NODE] Unknown motor payload:" payload)))

   :web/camera-action
   (fn [payload]
     (case payload
       :up (publish! :servo/cmd {:inc 20})
       :down (publish! :servo/cmd {:dec 20})
       (println "[WEB NODE] Unknown camera payload" payload)))

   :web/led-action
   (fn [payload]
     (case payload
       ;; TODO create LED node and publish change
       :on (neopixel/send-command! "set" 0 0 255)
       :off (neopixel/send-command! "set" 0 0 0)
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


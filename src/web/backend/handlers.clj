(ns web.backend.handlers
  (:require [web.backend.socket :as socket]
            [robot.mini-ros.core :as ros]))

(defmulti -event-msg-handler :id)
(defn event-msg-handler

  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler :command/mode-idle
  [_]
  (println "Recieved request to put robot in idle mode")
  (let [message {:key :robot/mode-updated :message :idle}]
    (ros/publish! :manual message)
    (socket/broadcast! message)))

(defmethod -event-msg-handler :command/mode-manual
  [_]
  (println "Recieved request to put robot in manual mode")
  (let [message {:key :robot/mode-updated :message :manual}]
    (ros/publish! :manual message)
    (socket/broadcast! message)))

(defmethod -event-msg-handler :command/mode-sentient
  [_]
  (println "Recieved request to put robot in sentient mode")
  (let [message {:key :robot/mode-updated :message :sentient}]
    (ros/publish! :manual message)
    (socket/broadcast! message)))

(defmethod -event-msg-handler :command/mode-programmable
  [_]
  (println "Recieved request to put robot in programmable mode")
  (let [message {:key :robot/mode-updated :message :programmable}]
    (ros/publish! :manual message)
    (socket/broadcast! message)))

(defmethod -event-msg-handler :command/robot-action
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (when-let [action ?data]
    (ros/publish! :robot/action action)
    (println "Recieved robot action" action)))

(defmethod -event-msg-handler :command/camera-action
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (when-let [action ?data]
    (ros/publish! :camera/action action)
    (println "Recieved camera action" action)))

(defmethod -event-msg-handler :command/led-action
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (when-let [action ?data]
    (ros/publish! :led/action action)
    (println "Recieved LED action" action)))

(defmethod -event-msg-handler :chsk/ws-ping
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println "RCV: " event))

(defmethod -event-msg-handler :chsk/ws-pong
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println "RCV: " event))

(defmethod -event-msg-handler :default
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println "Unhandled event: " event))

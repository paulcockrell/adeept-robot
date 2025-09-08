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
  (let [key :robot/mode-updated message :idle]
    (ros/publish! key message)
    (socket/broadcast! key message)))

(defmethod -event-msg-handler :command/mode-manual
  [_]
  (println "Recieved request to put robot in manual mode")
  (let [key :robot/mode-updated message :manual]
    (ros/publish! key message)
    (socket/broadcast! key message)))

(defmethod -event-msg-handler :command/mode-sentient
  [_]
  (println "Recieved request to put robot in sentient mode")
  (let [key :robot/mode-updated message :sentient]
    (ros/publish! key message)
    (socket/broadcast! key message)))

(defmethod -event-msg-handler :command/mode-programmable
  [_]
  (println "Recieved request to put robot in programmable mode")
  (let [key :robot/mode-updated message :programmable]
    (ros/publish! key message)
    (socket/broadcast! key message)))

(defmethod -event-msg-handler :command/motor-action
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (when-let [action ?data]
    (ros/publish! :web/motor-action action)
    (println "Recieved motor action" action)))

(defmethod -event-msg-handler :command/camera-action
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (when-let [action ?data]
    (ros/publish! :web/camera-action action)
    (println "Recieved camera action" action)))

(defmethod -event-msg-handler :command/led-action
  [{:keys [event id ?data ring-req ?reply-fn send-fn]}]
  (when-let [action ?data]
    (ros/publish! :web/led-action action)
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

(ns mini-ros.core
  (:require [clojure.core.async :as async :refer [chan >!! <! go-loop pub sub timeout]]))

;; ----------------------------------------------------------------------------
;; 🚦 Event Bus: Central channel + pub/sub registry
;; ----------------------------------------------------------------------------

(defonce event-chan (chan))
(defonce event-pub (pub event-chan :topic))

(defn publish!
  "Send a message to the event bus."
  [topic payload]
  (>!! event-chan {:topic topic :payload payload}))

(defn subscribe
  "Create a subscription channel for a topic."
  [topic]
  (let [ch (chan)]
    (sub event-pub topic ch)
    ch))

;; ----------------------------------------------------------------------------
;; 🛰️ Nodes: Simple go-loops that react to pub/sub events
;; ----------------------------------------------------------------------------

(defn start-line-tracker [sensor read-fn interval-ms]
  (go-loop []
    (let [status (read-fn sensor)]
      (publish! :line/status status)
      (<! (timeout interval-ms))
      (recur))))

(defn start-ultrasound [sensor read-fn interval-ms]
  (go-loop []
    (let [dist (read-fn sensor)]
      (publish! :ultrasound/distance dist)
      (<! (timeout interval-ms))
      (recur))))

(defn line-follow-node []
  (let [ch (subscribe :line/status)]
    (go-loop []
      (let [{:keys [payload]} (<! ch)]
        (cond
          (:left payload)   (publish! :line/cmd :left)
          (:middle payload) (publish! :line/cmd :forward)
          (:right payload)  (publish! :line/cmd :right)
          :else             (publish! :line/cmd :stop)))
      (recur))))

(defn obstacle-avoidance-node [threshold]
  (let [ch (subscribe :ultrasound/distance)]
    (go-loop []
      (let [{:keys [payload]} (<! ch)]
        (when (< payload threshold)
          (publish! :avoidance/cmd :stop)))
      (recur))))

(defn logger-node []
  (go-loop []
    (let [event (<! event-chan)]
      (println "🛰️ Event:" (:topic event) "→" (:payload event))
      (recur))))


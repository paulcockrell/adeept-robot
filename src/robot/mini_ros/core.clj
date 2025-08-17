(ns robot.mini-ros.core
  (:require [clojure.core.async :as async :refer [chan >!! pub sub]]))

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

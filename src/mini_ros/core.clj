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
  (let [ch (subscribe :line/status)
        history (atom '())     ;; FIFO list of last 5 readings
        max-history 5]
    (go-loop []
      (let [{:keys [payload]} (<! ch)]
        ;; Update sensor history
        (swap! history #(->> (conj % payload) (take max-history)))

        ;; Count true values over history
        (let [recent @history
              count-true (fn [k] (count (filter #(get % k) recent)))
              left-c  (count-true :left)
              mid-c   (count-true :middle)
              right-c (count-true :right)
              cmd     (cond
                        (and (<= mid-c 2) (>= left-c 3)) :left ; we need to come up with the concept of a 'little bit left' as we have both left and middle sensor active
                        (and (<= mid-c 2) (>= right-c 3)) :right ; we need to come up with the concept of a 'little bit left' as we have both left and middle sensor active
                        (>= mid-c 3)   :forward
                        :else          :forward)] ;; fallback to last

          ;; Publish command if changed
          (publish! :line/cmd cmd)
          (<! (timeout 100)) ;; turn for only 100th of a second
          (publish! :line/cmd :stop))
      (recur)))))

(defn obstacle-avoidance-node [threshold]
  (let [ch (subscribe :ultrasound/distance)]
    (go-loop []
      (let [{:keys [payload]} (<! ch)]
        (if (< payload threshold)
          (do
            (println "🚧 Obstacle detected — react!")
            (publish! :avoidance/cmd :backward)
            (<! (timeout 400)) ;; reverse for 400ms
            (publish! :avoidance/cmd (rand-nth [:left :right]))
            (<! (timeout 400)) ;; turn briefly
            (publish! :avoidance/cmd :stop)) ;; then stop
          (publish! :avoidance/cmd :forward)))
      (recur))))

(defn logger-node []
  (go-loop []
    (let [event (<! event-chan)]
      (println "🛰️ Event:" (:topic event) "→" (:payload event))
      (recur))))


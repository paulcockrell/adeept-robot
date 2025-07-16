(ns mini-ros.motor-arbiter
  (:require [clojure.core.async :refer [chan <! go-loop]]
            [mini-ros.core :refer [subscribe publish!]]))

;; ----------------------------------------------------------------------------
;; 🚦 Command Arbitration for Motors
;; ----------------------------------------------------------------------------

;; Define priorities (higher = more important)
(def priorities
  {:emergency/cmd 3
   :remote/cmd    2
   :avoidance/cmd 1
   :line/cmd      0})

(def control-timeout-ms 500) ;; 0.5s for demo

(defonce motor-state
  (atom {:source nil :priority -1 :last-cmd nil :last-ts 0}))

(defn now [] (System/currentTimeMillis))

; (defn motor-arbiter-node
;   "Listens to all motor command topics and only forwards the highest priority one."
;   [motors drive-fn stop-fn]
;   (doseq [topic (keys priorities)]
;     (let [ch (subscribe topic)]
;       (println "📡 Subscribed to" topic)
;       (go-loop []
;         (let [{:keys [payload]} (<! ch)
;               prio (priorities topic)
;               current @motor-state]
;           (println "👀 Received message on" topic ":" payload ", current motor state" @motor-state)
;           (println "new prio" prio ", current prio" (:priority current))
;           (println "new topic" topic ", current topic" (:source current))
;           (println "not=" payload " " (:last-cmd current))
;           (when (or (> prio (:priority current))
;                     (and (= topic (:source current))
;                       (not= payload (:last-cmd current))))
;
;                       (println "✅ Accepted command from" topic ":" payload)
;
;                       (swap! motor-state assoc
;                             :source topic
;                             :priority prio
;                             :last-cmd payload)
;                       (if (= payload :stop)
;                         (stop-fn motors)
;                         (drive-fn motors payload))))
;         (recur)))))
(defn motor-arbiter-node [motors drive-fn stop-fn]
  (doseq [topic (keys priorities)]
    (let [ch (subscribe topic)]
      (println "📡 Subscribed to" topic)

      (go-loop []
        (let [{:keys [payload]} (<! ch)
              prio (priorities topic)
              ts (now)
              current @motor-state
              expired? (> (- ts (:last-ts current)) control-timeout-ms)]

          (println "👀 Received" topic ":" payload "| state:" current "| expired?" expired?)

          (when (or (> prio (:priority current))
                    (and (= topic (:source current))
                         (not= payload (:last-cmd current)))
                    expired?)
            (println "✅ Accepting command:" payload "from" topic)
            (swap! motor-state assoc
                   :source topic
                   :priority prio
                   :last-cmd payload
                   :last-ts ts)
            (if (= payload :stop)
              (stop-fn motors)
              (drive-fn motors payload))))
        (recur)))))

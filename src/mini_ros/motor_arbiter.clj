(ns mini-ros.motor-arbiter
  (:require [clojure.core.async :refer [<! go-loop]]
            [mini-ros.core :refer [subscribe]]))

;; ----------------------------------------------------------------------------
;; 🔐 Locking System (for exclusive control, e.g., avoidance node)
;; ----------------------------------------------------------------------------

(defonce motor-control-lock (atom nil))

(defn motor-control-locked? []
  (some? @motor-control-lock))

(defn lock-motor-control! [owner]
  (reset! motor-control-lock owner))

(defn release-motor-control! []
  (reset! motor-control-lock nil))

(defn lock-owned-by? [owner]
  (= @motor-control-lock owner))

;; ----------------------------------------------------------------------------
;; 🚦 Motor Arbiter Node
;; ----------------------------------------------------------------------------

(defn motor-arbiter-node
  [motors drive! stop!]
  (doseq [topic [:line-follow/cmd :line-seek/cmd :avoidance/cmd :wander/cmd]]
    (let [ch (subscribe topic)]
      (println "📡 Subscribed to topic" topic)
      (go-loop []
        (let [{:keys [payload]} (<! ch)]
          (println "Motor Arbiter: topic" topic ", payload" payload ", lock=" @motor-control-lock)

          (when (or (not (motor-control-locked?))
                    (lock-owned-by? topic))
            (if (= (:dir payload) :stop)
              (stop! motors)
              (drive! motors payload))))
        (recur)))))


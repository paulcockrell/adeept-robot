(ns robot.mini-ros.motor-arbiter
  (:require [clojure.core.async :refer [<! go-loop]]
            [robot.mini-ros.core :refer [subscribe]]
            [robot.mini-ros.state :refer [robot-state]]))

;; ----------------------------------------------------------------------------
;; 🔐 Locking System (for exclusive control, e.g., avoidance node)
;; ----------------------------------------------------------------------------

(defn motor-control-locked? []
  (some? (:lock-owner @robot-state))

(defn lock-motor-control! [owner]
  (swap! robot-state assoc :lock-owner owner))

(defn release-motor-control! []
  (swap! robot-state assoc :lock-owner owner))

(defn lock-owned-by? [owner]
  (= (:lock-owner @robot-state) owner))

;; ----------------------------------------------------------------------------
;; 🚦 Motor Arbiter Node
;; ----------------------------------------------------------------------------

(def allowed-topics 
  {:manual #{:web/manual}
   :sentient #{:line-follow/cmd :line-seek/cmd :avoidance/cmd :wander/cmd}
   :programmable #{:program/cmd}
   :idle #{})

(defn motor-arbiter-node
  [motors drive! stop!]
  (doseq [topic (apply clojure.set/union (vals allowed-topics))]
    (let [ch (subscribe topic)]
      (println "📡 Subscribed to topic" topic)
      (go-loop []
        (let [{:keys [payload]} (<! ch)
              {:keys [operating-mode lock-owner]} @robot-state]

          ; (println "Motor Arbiter: topic" topic ", payload" payload ", lock=" @motor-control-lock)

          ;; Mode filter
          (when (contains? (allowed-topics operating-mode) topic)

            ;; Lock check
            (when (or (nil? lock-owner)
                      (= lock-owner topic))
              (if (= (:dir payload) :stop)
                (do
                  (stop! motors)
                  (release-motor-control))
                (do 
                  (lock-motor-control! topic)
                  (drive! motors payload))))))
        (recur)))))


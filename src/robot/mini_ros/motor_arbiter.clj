(ns robot.mini-ros.motor-arbiter
  (:require [clojure.core.async :refer [<! go-loop]]
            [clojure.set :refer [union]]
            [robot.mini-ros.core :refer [subscribe]]
            [robot.mini-ros.state :refer [robot-state]]))

;; ----------------------------------------------------------------------------
;; 🔐 Locking System (for exclusive control, e.g., avoidance node)
;; ----------------------------------------------------------------------------

(defn motor-control-locked? []
  (some? (:lock-owner @robot-state)))

(defn lock-motor-control! [owner]
  (swap! robot-state assoc :lock-owner owner))

(defn release-motor-control! []
  (swap! robot-state assoc :lock-owner nil))

(defn lock-owned-by? [owner]
  (= (:lock-owner @robot-state) owner))

;; ----------------------------------------------------------------------------
;; 🚦 Motor Arbiter Node
;; ----------------------------------------------------------------------------

(def allowed-topics
  {:manual #{:manual/cmd}
   :sentient #{:line-follow/cmd :line-seek/cmd :avoidance/cmd :wander/cmd :servo/cmd}
   :programmable #{:program/cmd}
   :idle #{}})

(defn motor-arbiter-node
  [motors drive! stop!]
  (doseq [topic (apply union (vals allowed-topics))]
    (let [ch (subscribe topic)]
      (println "📡 Subscribed to topic" topic)
      (go-loop []
        (let [{:keys [payload]} (<! ch)
              {:keys [operating-mode]} @robot-state]

          ;; TODO remove debug logging
          ; (println "Motor Arbiter: operating mode =" operating-mode)

          ;; Mode filter
          (when (contains? (allowed-topics operating-mode) topic)

            ;; TODO remove debug logging
            (println "topic =" topic " payload =" payload " lock =" (:lock-owner @robot-state))

            ;; Lock check
            (when (or (not (motor-control-locked?))
                      (lock-owned-by? topic))
              (if (= (:dir payload) :stop)
                (do
                  (stop! motors)
                  (release-motor-control!))
                (do
                  (lock-motor-control! topic)
                  (drive! motors payload))))))
        (recur)))))


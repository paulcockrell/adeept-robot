(ns robot.nodes.avoidance
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.peripherals.ultrasound :as ultrasound]
            [robot.mini-ros.motor-arbiter :refer [lock-motor-control! release-motor-control!]]
            [robot.mini-ros.state :refer [active-mode? shutting-down?]]
            [robot.mini-ros.core :refer [publish!]]))

(defonce avoiding? (atom false))

(defn start-avoidance-node
  "Always running. When a danger threshold is hit, it sends a run-away command"
  [sensor threshold]
  (go-loop []
    (when-not @shutting-down?
      (let [distance (ultrasound/measure sensor)]
        (when (and (not active-mode? :stop) (not @avoiding?) (>= distance 0.0) (<= distance threshold))
          (reset! avoiding? true)
          (lock-motor-control! :avoidance/cmd)
          (publish! :brain/event :obstacle-detected)

          ;; Reverse slowly
          (publish! :avoidance/cmd {:dir :backward :left-motor-speed 0.8 :right-motor-speed 0.8})
          (<! (timeout 800))

          ;; Turn left or right
          (publish! :avoidance/cmd {:dir (rand-nth [:left :right])})
          (<! (timeout 800))

          ;; Stop
          (publish! :avoidance/cmd :stop)
          (<! (timeout 200))

          ;; Allow brain to take back control
          (release-motor-control!)
          (reset! avoiding? false)
          (publish! :brain/event :obstacle-cleared)))
      (recur))))

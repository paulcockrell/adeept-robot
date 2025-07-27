(ns nodes.avoidance
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [peripherals.ultrasound :as ultrasound]
            [mini-ros.motor-arbiter :refer [lock-motor-control! release-motor-control!]]
            [mini-ros.state :refer [shutting-down?]]
            [mini-ros.core :refer [publish!]]))

(defonce avoiding? (atom false))

(defn start-avoidance-node
  "Always running. When a danger threshold is hit, it sends a run-away command"
  [sensor threshold]
  (go-loop []
    (when-not @shutting-down?
      (let [distance (ultrasound/measure sensor)]
        (when (and (not @avoiding?) (>= distance 0.0) (<= distance threshold))
          (reset! avoiding? true)
          (lock-motor-control! :avoidance/cmd)
          (publish! :brain/event :obstacle-detected)

          ;; Reverse slowly
          (println "* Reversing")
          (publish! :avoidance/cmd {:dir :backward :left-motor-speed 0.8 :right-motor-speed 0.8})
          (<! (timeout 500))

          ;; Turn left or right
          (println "* Turning")
          (publish! :avoidance/cmd {:dir (rand-nth [:left :right])})
          (<! (timeout 750))

          ;; Stop
          (println "* Stopping")
          (publish! :avoidance/cmd :stop)
          (<! (timeout 100))

          ;; Allow brain to take back control
          (release-motor-control!)
          (reset! avoiding? false)
          (publish! :brain/event :obstacle-cleared)))
      (recur))))

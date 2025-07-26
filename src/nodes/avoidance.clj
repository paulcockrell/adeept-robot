(ns nodes.avoidance
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [peripherals.ultrasound :as ultrasound]
            [mini-ros.motor-arbiter :refer [lock-motor-control! release-motor-control!]]
            [mini-ros.core :refer [publish!]]))

(defonce avoiding? (atom false))

(defn start-avoidance-node
  "Always running. When a danger threshold is hit, it sends a run-away command"
  [sensor threshold]
  (go-loop []
    (let [distance (ultrasound/measure sensor)]
      (when (and (not @avoiding?) (>= distance 0.0) (<= distance threshold))
        (do
          (println "🛑 Obstacle detected!" distance "running avoidance pattern")
          (lock-motor-control! :avoidance/cmd)

          (reset! avoiding? true)
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

          (println "🛑 Obstacle cleared. Avoidance routine complete, handing control back to brain.")
            ;; Allow brain to take back control
          (release-motor-control!)
          (reset! avoiding? false)
          (publish! :brain/event :obstacle-cleared))))
    (recur)))

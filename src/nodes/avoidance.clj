(ns nodes.avoidance
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [peripherals.ultrasound :as ultrasound]
            [mini-ros.motor-arbiter :refer [set-active-source! active-source?]]
            [mini-ros.core :refer [publish!]]))

(defonce avoiding? (atom false))

(defn start-avoidance-node 
  "Always running. When a danger threshold is hit, it sends a run-away command"
  [sensor threshold]
  (go-loop []
      (let [distance (ultrasound/measure sensor)]
        (cond 
          ;; Enter avoidance only once
          (and (not @avoiding?) (>= distance 0) (<= distance threshold))
          (do
            (println "🛑 Obstacle detected!" distance "running avoidance pattern")

            (reset! avoiding? true)
            (publish! :brain/event :obstacle-detected)

            (publish! :avoidance/cmd :backward)
            (<! (timeout 750))
            (publish! :avoidance/cmd (rand-nth [:left :right]))
            (<! (timeout 500))
            (publish! :avoidance/cmd :stop))

          (and @avoiding? (> distance (+ threshold 5))) ;; add hysteresis
          (do
            (<! (timeout 500)) ; safety buffer
            (publish! :avoidance/cmd :stop)
            (<! (timeout 100)) ; safety buffer
            (reset! avoiding? false)
            (println "🛑 Obstacle cleared. Avoidance routine complete, handing control back to brain.")
            ;; Allow brain to take back control
            (publish! :brain/event :obstacle-cleared))))
    (recur)))

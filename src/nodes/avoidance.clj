(ns nodes.avoidance
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [peripherals.ultrasound :as ultrasound]
            [mini-ros.core :refer [publish!]]))

(defonce is-avoiding? (atom false))

(defn start-avoidance-node [sensor threshold]
  (go-loop []
    (let [distance (ultrasound/measure sensor)]
      (when (and (not @is-avoiding?) (>= distance 0) (<= distance threshold))
        (println "🛑 Detected obstacle" distance "running avoidance pattern")
        (reset! is-avoiding? true)

        ;; If we are too close, emit a reactive command
        ;; Could be enhanced with smarter escape sequences
        (publish! :avoidance/cmd :backward)
        (<! (timeout 500))
        (publish! :avoidance/cmd (rand-nth [:left :right]))
        (<! (timeout 500))
        (publish! :avoidance/cmd :stop)

        (println "🛑 Avoidance routine complete")
        (reset! is-avoiding? false)))
    (recur)))

(ns nodes.avoidance
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.core :refer [subscribe publish!]]))

(defn start-avoidance-node [ultrasound-sensor threshold]
  (let [ch (subscribe :ultrasound/measure)]
    (go-loop []
      (let [{:keys [payload]} (<! ch)]
        (when (and (number? payload) (< payload threshold))
          ;; If we are too close, emit a reactive command
          ;; Could be enhanced with smarter escape sequences
          (do 
            (publish! :avoidance/cmd :backward)
            (<! (timeout 500))
            (publish! :avoidance/cmd (rand-nth [:left :right]))
            (<! (timeout 500))
            (publish! :avoidance/cmd :stop))))
      (recur))))


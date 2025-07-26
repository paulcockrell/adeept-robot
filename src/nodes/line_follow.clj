(ns nodes.line-follow
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.core :refer [subscribe publish!]]
            [mini-ros.motor-arbiter :refer [motor-control-locked?]]
            [peripherals.line-track :as line-track]))

(defonce sensor-state (atom {:left false :middle false :right false}))

(defn found-line? [] (some true? (vals @sensor-state)))
(defn lost-line?  [] (not (found-line?)))

(defn start-line-follow-node
  "Reads from :line/status and sends motor correction commands if motors are not locked."
  []
  (go-loop []
    (let [status (ldr/status ldr-sensor)]
      (reset! sensor-state status)

      (when (not (motor-control-locked?)) ;; Only drive if motors are free
        (let [{:keys [left middle right]} payload
              cmd (cond
                    (and middle left)  {:dir :forward :left-motor-speed 0.85 :right-motor-speed 0.95}
                    (and middle right) {:dir :forward :left-motor-speed 0.95 :right-motor-speed 0.85}
                    left               {:dir :forward :left-motor-speed 0.7 :right-motor-speed 1.0}
                    right              {:dir :forward :left-motor-speed 1.0 :right-motor-speed 0.7}
                    middle             {:dir :forward :left-motor-speed 0.85 :right-motor-speed 0.85}
                    :else              :stop)]
          (publish! :line-follow/cmd cmd)))
    (recur))))


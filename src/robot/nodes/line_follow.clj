(ns robot.nodes.line-follow
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.mini-ros.core :refer [publish!]]
            [robot.mini-ros.motor-arbiter :refer [motor-control-locked?]]
            [robot.mini-ros.state :refer [active-mode? get-mode get-sub-mode shutting-down?]]
            [robot.hardware.ldr :as ldr]))

(defonce sensor-state (atom {:left false :middle false :right false}))

(defn found-line? [] (some true? (vals @sensor-state)))
(defn lost-line?  [] (not (found-line?)))

(defn start-line-follow-node
  "Reads from :line/status and sends motor correction commands if motors are not locked."
  [ldr-sensor]
  (go-loop []
    (when-not @shutting-down?
      (let [status (ldr/status ldr-sensor)]
        (reset! sensor-state status)

        (when (and (not (motor-control-locked?)) (active-mode? :sentient :line-follow)) ;; Only drive if motors are free
          (let [{:keys [left middle right]} status
                cmd (cond
                      (and middle left)  {:dir :left :left-motor-speed 0.8 :right-motor-speed 0.9}
                      (and middle right) {:dir :right :left-motor-speed 0.9 :right-motor-speed 0.8}
                      left               {:dir :left}
                      right              {:dir :right}
                      middle             {:dir :forward :left-motor-speed 0.8 :right-motor-speed 0.8}
                      :else :stop)]
            (publish! :line-follow/cmd cmd))
          (<! (timeout 200))))
      (recur))))


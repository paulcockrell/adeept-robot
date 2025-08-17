(ns robot.nodes.wander
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.mini-ros.motor-arbiter :refer [motor-control-locked?]]
            [robot.mini-ros.state :refer [active-mode? shutting-down?]]
            [robot.mini-ros.core :refer [publish!]]))

(defn start-wander-node []
  (go-loop []
    (when-not @shutting-down?
      (when (and (not (motor-control-locked?)) (active-mode? :wander))
        (publish! :wander/cmd {:dir :forward :left-motor-speed 1.0 :right-motor-speed 1.0})
        (<! (timeout 100)))
      (recur))))


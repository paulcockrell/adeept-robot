(ns robot.nodes.line-seek
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.mini-ros.core :refer [publish!]]
            [robot.mini-ros.motor-arbiter :refer [motor-control-locked?]]
            [robot.mini-ros.state :refer [active-mode? shutting-down?]]))

(defn start-line-seek-node
  "Travels in an ever expanding circle in attempt to find line"
  []
  (go-loop []
    (when-not @shutting-down?
      (when (and (not (motor-control-locked?)) (active-mode? :sentient :line-seek))
        (publish! :line-follow/cmd {:dir :forward :left-motor-speed 0.9 :right-motor-speed 1.0})
        (<! (timeout 100)))
      (recur))))


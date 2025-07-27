(ns nodes.line-seek
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.core :refer [publish!]]
            [mini-ros.motor-arbiter :refer [motor-control-locked?]]
            [mini-ros.state :refer [active-mode?]]))

(defn start-line-seek-node
  "Travels in an ever expanding circle in attempt to find line"
  []
  (go-loop []
    (when (and (not (motor-control-locked?)) (active-mode? :line-seek))
      (publish! :line-follow/cmd {:dir :forward :left-motor-speed 0.9 :right-motor-speed 1.0})
      (<! (timeout 100)))
    (recur)))


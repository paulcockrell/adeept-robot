(ns nodes.wander
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.motor-arbiter :refer [motor-control-locked?]]
            [mini-ros.state :refer [active-mode?]]
            [mini-ros.core :refer [publish!]]))

; (def directions [:forward :left :right])
(def directions [:forward])

(defn start-wander-node []
  (go-loop []
    (when (and (not (motor-control-locked?)) (active-mode? :wander)) ;; Only drive if motors are free
      (let [dir (rand-nth directions)]
        (println "[wander node] wandering" dir)
        (publish! :wander/cmd {:dir dir :left-motor-speed 1.0 :right-motor-speed 1.0}))
      (<! (timeout 1000))) ; move a bit before next change
    (recur)))


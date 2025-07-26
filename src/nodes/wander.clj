(ns nodes.wander
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.motor-arbiter :refer [active-source?]]
            [mini-ros.core :refer [publish!]]))

; (def directions [:forward :left :right])
(def directions [:forward])

(defn start-wander-node []
  (go-loop []
    (when (active-source? :wander/cmd)
      (let [dir (rand-nth directions)]
        (publish! :wander/cmd {:dir dir :left-motor-speed 1.0 :right-motor-speed 1.0}))
      (<! (timeout 1000))) ; move a bit before next change
    (recur)))


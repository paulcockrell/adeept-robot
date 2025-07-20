(ns nodes.wander
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.core :refer [publish!]]))

(def directions [:forward :left :right])

(defn start-wander-node []
  (go-loop []
    (let [dir (rand-nth directions)]
      (publish! :wander/cmd dir))
    (<! (timeout 800)) ; move a bit before next change
    (recur)))


(ns mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop timeout]]
            [mini-ros.core :refer [publish!]]
            [mini-ros.motor-arbiter :refer [set-active-source!]]
            [nodes.avoidance :refer [avoiding?]]
            [nodes.line-follow :as line-follow]))

(defonce mode (atom :line-follow))

(defn run-brain []
  (go-loop []
    (case @mode
      :line-follow
      (do (when-not @avoiding?
            (set-active-source! :line/cmd))
          (<! (timeout 100))
          (when (line-follow/lost-line?)
            (reset! mode :line-seek))
          (recur))

      :line-seek
      (do (when-not @avoiding? 
            (set-active-source! :line/cmd))
          ; (publish! :line/cmd :forward)
          (<! (timeout 2000)) ; allow it to scan
          (if (line-follow/found-line?)
            (reset! mode :line-follow)
            (reset! mode :wander))
          (recur))

      :wander
      (do (when-not @avoiding?
            (set-active-source! :wander/cmd))
          (<! (timeout 1500))
          (when (line-follow/found-line?)
            (reset! mode :line-follow))
          (recur)))))

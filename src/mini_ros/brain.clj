(ns mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop timeout]]
            [mini-ros.core :refer [publish!]]
            [mini-ros.motor-arbiter :refer [set-active-source!]]
            [nodes.line-follow :as line-follow]))

(defonce mode (atom :line-follow))

(defn run-brain []
  (go-loop []
    (case @mode
      :line-follow
      (do (println "🧠 Line Follow")
          (set-active-source! :line/cmd)
          (<! (timeout 100))
          (when (line-follow/lost-line?)
            (reset! mode :line-seek))
          (recur))

      :line-seek
      (do (println "🧠 Line Seek")
          (set-active-source! :line/cmd)
          (publish! :line/cmd :forward)
          (<! (timeout 500)) ; allow it to scan
          (if (line-follow/found-line?)
            (reset! mode :line-follow)
            (reset! mode :wander))
          (recur))

      :wander
      (do (println "🧠 Wander")
          (set-active-source! :wander/cmd)
          (<! (timeout 1500))
          (when (line-follow/found-line?)
            (reset! mode :line-follow))
          (recur))

      :avoid
      (do (println "🧠 Avoid")
          (set-active-source! :avoidance/cmd)
          (publish! :avoidance/cmd :avoid)
          (<! (timeout 600))
          (reset! mode :wander)
          (recur)))))


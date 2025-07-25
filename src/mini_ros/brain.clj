(ns mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop timeout]]
            [nodes.line-follow :as line-follow]
            [mini-ros.motor-arbiter :refer [set-active-source!]]
            [mini-ros.core :refer [publish! subscribe]]))

(defonce mode (atom :line-follow))

(defn- start-brain-event-loop
  "Listens to :brain/event and transitions modes. This is your event-driven state machine"
  []
  (let [events (subscribe :brain/event)]
    (go-loop []
      (let [{:keys [payload]} (<! events)]
        (case payload
          :obstacle-detected
          (do
            (println "[Brain Event Loop] Obstacle detected. Entering avoidance mode")
            (reset! mode :avoid)
            (set-active-source! :avoidance/cmd))

          :obstacle-cleared
          (do
            (println "[Brain Event Loop] Obstacle cleared. Exiting avoidance mode")
            (reset! mode :wander)
            (set-active-source! :wander/cmd))

          :line-found
          (do
            (println "[Brain Event Loop] Found line. Entering line follow mode")
            (reset! mode :line-follow)
            (set-active-source! :line/cmd))

          :line-lost
          (do
            (println "[Brain Event Loop] Lost line. Entering line seek mode")
            (reset! mode :line-seek)
            (set-active-source! :line/cmd))

          :wander ;; no-op
          nil))
      (recur))))

(defn- start-brain-watchdog-loop
  "This watches sensor state in the background and emits events, not motor commands"
  []
  (go-loop []
    (case @mode
      :line-follow
      (do
        (<! (timeout 100))
        (when (line-follow/lost-line?)
          (publish! :brain/event :line-lost)))

      :line-seek
      (do
        (<! (timeout 1500))
        (if (line-follow/found-line?)
          (publish! :brain/event :line-found)
          (publish! :brain/event :wander)))

      :wander
      (do
        (<! (timeout 1500))
        (when (line-follow/found-line?)
          (publish! :brain/event :line-found)))

      :avoid ;; no-op; avoidance owns its own lifecycle
      nil)

    (recur)))

(defn run-brain []
  (start-brain-event-loop)
  (start-brain-watchdog-loop))

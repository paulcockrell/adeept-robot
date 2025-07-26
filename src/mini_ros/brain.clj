(ns mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop timeout]]
            [nodes.line-follow :as line-follow]
            [mini-ros.motor-arbiter :refer [set-active-source!]]
            [mini-ros.core :refer [publish! subscribe]]))

(defonce mode (atom :line-follow))

;; Command gatekeeper, based on the mode, it will 'open' the gate for specific
;; message topics to which the motors arbiter will be only receiving these
;; restrictied message payloads. This stops the system sending conflicting
;; instructions based on all the different sensors readings
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
            (set-active-source! :line-found/cmd))

          :line-lost
          (do
            (println "[Brain Event Loop] Lost line. Entering line seek mode")
            (reset! mode :line-seek)
            (set-active-source! :line-seek/cmd))

          :wander ;; no-op
          nil))
      (recur))))

; Centralised sensor reactor. This will set the mode the robot brain operates
; in based on sensor states. It has no concept of message routing (gatekeeping)
; just what mode it thinks the robot should be in based on the sensor readings.
(defn- start-brain-watchdog-loop
  "This watches sensor state in the background and emits events, not motor commands"
  []
  (go-loop []
    (case @mode
      :line-follow
      (do
        (<! (timeout 100)) ; maybe we don't need this timeout
        (when (line-follow/lost-line?)
          (publish! :brain/event :line-lost)))

      :line-seek
      (do
        (<! (timeout 100)) ; maybe we don't need this timeout?
        (if (line-follow/found-line?)
          (publish! :brain/event :line-found)
          (publish! :brain/event :wander)))

      :wander
      (do
        (<! (timeout 100)) ; maybe we don't need this timeout?
        (when (line-follow/found-line?)
          (publish! :brain/event :line-found)))

      :avoid ;; no-op; avoidance owns its own lifecycle
      nil)

    (recur)))

(defn run-brain []
  (start-brain-event-loop)
  (start-brain-watchdog-loop))

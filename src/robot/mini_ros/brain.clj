(ns robot.mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop]]
            [robot.nodes.line-follow :as line-follow]
            [robot.mini-ros.state :as state]
            [robot.mini-ros.core :refer [publish! subscribe]]))

(defn- start-brain-event-loop
  "Monitor watchdog events and set robot mode"
  []
  (let [events (subscribe :brain/event)]
    (go-loop []
      (let [{:keys [payload]} (<! events)]
        (case payload
          :obstacle-detected
          (do (println "[Brain Event Loop] Obstacle detected")
              (state/set-mode! :sentient :avoid))

          :obstacle-cleared
          (do (println "[Brain Event Loop] Obstacle cleared")
              (state/set-mode! :sentient :wander))

          :line-found
          (do (println "[Brain Event Loop] Found line")
              (state/set-mode! :sentient :line-follow))

          :line-lost
          (do (println "[Brain Event Loop] Lost line")
              (state/set-mode! :sentient :line-seek))

          :wander
          (do (println "[Brain Event Loop] Entering wander mode")
              (state/set-mode! :sentient :wander))

          nil))
      (recur))))

(defn- start-brain-watchdog-loop
  "Monitor sensor states and publish events"
  []
  (go-loop []
    (case [(state/get-mode) (state/get-sub-mode)]
      [:sentient :line-follow]
      (when (line-follow/lost-line?)
        (publish! :brain/event :line-lost))

      [:sentient :line-seek]
      (if (line-follow/found-line?)
        (publish! :brain/event :line-found)
        (publish! :brain/event :line-seek))

      [:sentient :wander]
      (when (line-follow/found-line?)
        (publish! :brain/event :line-found))

      [:sentient :avoid]
      nil ; noop - avoidance owns its lifecycle

      :else (println "No match")

      nil)

    (recur)))

(defn- start-brain-state-mangagement-loop
  "Monitor and set robot operating mode"
  []
  (let [events (subscribe :robot/mode-updated)]
    (go-loop []
      (let [{:keys [payload]} (<! events)]
        (case payload
          :manual
          (do (println "[Brain Event Loop] Operating state change detected")
              (state/set-mode! :manual :stop))

          :sentient
          (do (println "[Brain Event Loop] Operating state change detected")
              (state/set-mode! :sentient :wander))

          :programmable
          (do (println "[Brain Event Loop] Operating state change detected")
              (state/set-mode! :programmable :stop))

          :else (println "[Brain Event Loop] Unknown operating state change detected")))
      (recur))))

(defn run-brain []
  (start-brain-event-loop)
  (start-brain-watchdog-loop)
  (start-brain-state-mangagement-loop))

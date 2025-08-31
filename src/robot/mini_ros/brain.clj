(ns robot.mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop timeout]]
            [robot.nodes.line-follow :as line-follow]
            [robot.hardware.neopixel :as neopixel]
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
      (do
        (neopixel/send-command! "set" 0 0 255) ; blue
        (<! (timeout 100))
        (when (line-follow/lost-line?)
          (publish! :brain/event :line-lost)))

      [:sentient :line-seek]
      (do
        (neopixel/send-command! "set" 255 255 0) ; yellow
        (if (line-follow/found-line?)
          (publish! :brain/event :line-found)
          (publish! :brain/event :line-seek)))

      [:sentient :wander]
      (do
        (neopixel/send-command! "set" 0 255 0) ; green
        (<! (timeout 100))
        (when (line-follow/found-line?)
          (publish! :brain/event :line-found)))

      [:sentient :avoid] ;; -avoidance owns its lifecycle
      (neopixel/send-command! "set" 255 0 0) ; red

      :else (println "No match")

      nil)

    (recur)))

(defn run-brain []
  (start-brain-event-loop)
  (start-brain-watchdog-loop))

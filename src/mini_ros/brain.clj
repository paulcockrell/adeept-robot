(ns mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop timeout]]
            [nodes.line-follow :as line-follow]
            [peripherals.neopixel :as neopixel]
            [mini-ros.state :refer [mode]]
            [mini-ros.core :refer [publish! subscribe]]))

(defn- start-brain-event-loop
  "Monitor watchdog events and set robot mode"
  []
  (let [events (subscribe :brain/event)]
    (go-loop []
      (let [{:keys [payload]} (<! events)]
        (case payload
          :obstacle-detected
          (do (println "[Brain Event Loop] Obstacle detected")
              (reset! mode :avoid))

          :obstacle-cleared
          (do (println "[Brain Event Loop] Obstacle cleared")
              (reset! mode :wander))

          :line-found
          (do (println "[Brain Event Loop] Found line")
              (reset! mode :line-follow))

          :line-lost
          (do (println "[Brain Event Loop] Lost line")
              (reset! mode :line-seek))

          :wander
          (do (println "[Brain Event Loop] Entering wander mode")
              (reset! mode :wander))

          nil))
      (recur))))

(defn- start-brain-watchdog-loop
  "Monitor sensor states and publish events"
  []
  (go-loop []
    (case @mode
      :line-follow
      (do
        (neopixel/send-command! "set" 0 0 255) ; blue
        (<! (timeout 100))
        (when (line-follow/lost-line?)
          (publish! :brain/event :line-lost)))

      :line-seek
      (do
        (neopixel/send-command! "set" 255 255 0) ; yellow
        (<! (timeout 2000))
        (if (line-follow/found-line?)
          (publish! :brain/event :line-found)
          (publish! :brain/event :wander)))

      :wander
      (do
        (neopixel/send-command! "set" 0 255 0) ; green
        (<! (timeout 100))
        (when (line-follow/found-line?)
          (publish! :brain/event :line-found)))

      :avoid ;; -avoidance owns its lifecycle
      (neopixel/send-command! "set" 255 0 0) ; red

      nil)

    (recur)))

(defn run-brain []
  (start-brain-event-loop)
  (start-brain-watchdog-loop))

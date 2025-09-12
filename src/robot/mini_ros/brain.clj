(ns robot.mini-ros.brain
  (:require [clojure.core.async :refer [<! go-loop]]
            [robot.nodes.line-follow :as line-follow]
            [robot.mini-ros.state :as state]
            [robot.mini-ros.core :refer [publish! subscribe]]))

(defn- start-main-event-loop
  "Monitor all watchdog events and set next robot mode"
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

;; TODO - Maybe we also need a manual-watchdog-loop rather than publishing to
;; the motor from the web node?
(defn- start-sentient-watchdog-loop
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

      :else (println "[Sentient Watchdog] No match")

      nil)

    (recur)))

;; Only required for when it is state switching
(defn- start-manual-watchdog-loop
  "Monitor manual states and publish events"
  []
  (go-loop []
    (case [(state/get-mode) (state/get-sub-mode)]
      [:manual :stop]
      (publish! :manual/cmd :stop)

      :else (println "[Manual Watchdog] No match")

      nil)

    (recur)))

(defn- start-state-mangagement-loop
  "Monitor and set robot operating mode"
  []
  (let [events (subscribe :robot/mode-updated)]
    (go-loop []
      (let [{:keys [payload]} (<! events)]
        (println "[Brain Event Loop] Operating state change detected. Payload=" payload)
        (case payload
          :manual
          (state/set-mode! :manual :stop)

          :sentient
          (state/set-mode! :sentient :wander)

          :programmable
          (state/set-mode! :programmable :stop)

          :idle
          (state/set-mode! :idle :stop)

          ;; default
          (println "[Brain Event Loop] Unknown operating state change detected")))
      (recur))))

(defn run-brain []
  (start-main-event-loop)
  (start-state-mangagement-loop)
  (start-sentient-watchdog-loop)
  (start-manual-watchdog-loop))

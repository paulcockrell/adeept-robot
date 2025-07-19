(ns robot.main
  (:require
   [mini-ros.core :refer [start-line-tracker start-ultrasound logger-node]]
   [mini-ros.mode-controller :refer [mode-controller-node]]
   [peripherals.line-track :as line-track]
   [peripherals.ultrasound :as ultrasound]
   [robot.system :refer [boot-system shutdown!]]))

(defn- add-shutdown-hook! [system]
  (.addShutdownHook
   (Runtime/getRuntime)
   (Thread. #(do
               (println "JVM shutting down, cleaning up robot...")
               (shutdown! system)))))

(defn ^:exec main [_]
  (let [system (boot-system)
        line-track-sensor (get-in system [:sensors :line-track-sensor])
        ultrasound-sensor (get-in system [:sensors :ultrasound-sensor])]
    (add-shutdown-hook! system)

    ;; Start sensory producers
    (start-line-tracker line-track-sensor line-track/status 100)
    (start-ultrasound ultrasound-sensor ultrasound/measure 10)

    ;; Start motor controller
    (mode-controller-node)

    ;; Optional: start logger
    (logger-node)

    (println "Robot is live. Press Enter to quit.")
    (read-line)

    (shutdown! system)))

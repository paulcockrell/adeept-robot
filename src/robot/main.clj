(ns robot.main
  (:require
   [nodes.line-follow :refer [start-line-follow-node]]
   [nodes.avoidance :refer [start-avoidance-node]]
   [nodes.wander :refer [start-wander-node]]
   [mini-ros.motor-arbiter :refer [motor-arbiter-node]]
   [mini-ros.brain :refer [run-brain]]
   [peripherals.motor :as motor]
   [robot.system :refer [boot-system shutdown!]]))

(defn- add-shutdown-hook! [system]
  (.addShutdownHook
   (Runtime/getRuntime)
   (Thread. #(do
               (println "JVM shutting down, cleaning up robot...")
               (shutdown! system)))))

(defn ^:exec main [_]
  (let [system (boot-system)
        line-sensor (get-in system [:sensors :line-track-sensor])
        ultra-sensor (get-in system [:sensors :ultrasound-sensor])
        motors (get system :motors)]
    (add-shutdown-hook! system)

    ;; Start sensor-driven nodes
    (start-avoidance-node ultra-sensor 15)
    (start-line-follow-node line-sensor)
    (start-wander-node)

    ;; Central motor gatekeeper
    (motor-arbiter-node motors motor/drive! motor/stop-all!)

    ;; Launch brain
    (run-brain)

    (println "Robot is live!")
    (read-line)
    (shutdown! system)))


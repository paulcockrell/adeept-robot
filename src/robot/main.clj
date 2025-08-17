(ns robot.main
  (:require
   [nodes.line-follow :refer [start-line-follow-node]]
   [nodes.line-seek :refer [start-line-seek-node]]
   [nodes.avoidance :refer [start-avoidance-node]]
   [nodes.wander :refer [start-wander-node]]
   [nodes.servo :refer [start-servo-node]]
   [mini-ros.motor-arbiter :refer [motor-arbiter-node]]
   [mini-ros.brain :refer [run-brain]]
   [peripherals.motor :as motor]
   [peripherals.neopixel :as neopixel]
   [robot.system :refer [boot-system shutdown!]]))

(defn- add-shutdown-hook! [system]
  (.addShutdownHook
   (Runtime/getRuntime)
   (Thread. #(do
               (println "JVM shutting down, cleaning up robot...")
               (shutdown! system)))))

(defn start! []
  (let [system (boot-system)
        ldr-sensor (get-in system [:sensors :ldr-sensor])
        ultra-sensor (get-in system [:sensors :ultrasound-sensor])
        motors (get system :motors)
        servo (get system :servo)]
    (add-shutdown-hook! system)

    ;; Start sensor-driven nodes
    (start-avoidance-node ultra-sensor 10)
    (start-line-follow-node ldr-sensor)
    (start-servo-node servo)
    (start-line-seek-node)
    (start-wander-node)

    ;; Start daemons
    (neopixel/start-daemon!)

    ;; Central motor gatekeeper
    (motor-arbiter-node motors motor/drive! motor/stop-all!)

    ;; Launch brain
    (run-brain)

    (println "🤖 Robot brain started.")
    system))

(defn stop! [system]
  (println "🛑 Stopping robot...")
  (shutdown! system))

;; Call this entrypoint for direct running via alias. Blocks on read-line
(defn ^:exec main [_]
  (let [system (start!)]
    (println "Press ENTER to shutdown robot.")
    (read-line)
    (stop! system)))

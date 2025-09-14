(ns robot.main
  (:require
   [robot.nodes.line-follow :refer [start-line-follow-node]]
   [robot.nodes.line-seek :refer [start-line-seek-node]]
   [robot.nodes.avoidance :refer [start-avoidance-node]]
   [robot.nodes.wander :refer [start-wander-node]]
   [robot.nodes.camera :refer [start-camera-node]]
   [robot.nodes.servo :refer [start-servo-node]]
   [robot.nodes.web :refer [start-web-node]]
   [robot.mini-ros.motor-arbiter :refer [motor-arbiter-node]]
   [robot.mini-ros.brain :refer [run-brain]]
   [robot.hardware.neopixel :as neopixel]
   [robot.hardware.motor :as motor]
   [robot.system :refer [boot-system shutdown!]]))

(defn start! []
  (let [system (boot-system)
        ldr-sensor (get-in system [:sensors :ldr-sensor])
        ultra-sensor (get-in system [:sensors :ultrasound-sensor])
        motors (get system :motors)
        servo (get system :servo)]

    ;; Start sensor-driven nodes
    (start-avoidance-node ultra-sensor 10)
    (start-line-follow-node ldr-sensor)
    (start-servo-node servo)
    (start-line-seek-node)
    (start-wander-node)
    (start-camera-node)
    (start-web-node)

    ;; Start daemons
    (neopixel/start-daemon!)

    ;; Central motor gatekeeper
    (motor-arbiter-node motors motor/drive motor/stop)

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

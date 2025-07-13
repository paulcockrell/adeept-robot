(ns adeept.robot.main
  (:require
   [adeept.robot.system :as system]
   [adeept.robot.steering :as steering]
   [adeept.peripherals.motor :as motor]
   [adeept.peripherals.servo :as servo]
   [adeept.peripherals.ultrasound :as ultrasound])
  (:import
   com.pi4j.plugin.raspberrypi.RaspberryPiPlugin
   com.pi4j.Pi4J))

;; XXX This is the main that runs the auto-drive using ultrasound obstacle detection
(defn ultrasound-demo [sys]
  (let [stop-loop (steering/start-behavior-loop
                   {:system sys
                    :threshold 25
                    :interval 200})]
    ;; Let it run a while...
    (Thread/sleep 10000)
    ;; Stop it cleanly
    (stop-loop)))

;; XXX This is the main that makes the camera servo move up and down
(defn servo-demo [sys]
  (let [srv (:servo sys)]
    (println srv)
    (servo/set-ang! srv 50)
    (Thread/sleep 1000)
    (servo/set-ang! srv 90)
    (Thread/sleep 1000)
    (servo/set-ang! srv 80)
    (Thread/sleep 1000)
    (servo/set-ang! srv 70)
    (Thread/sleep 1000)
    (servo/set-ang! srv 60)
    (Thread/sleep 1000)
    (servo/set-ang! srv 50)
    (Thread/sleep 1000)
    (servo/clean-all! srv)))

(defn line-track-demo [sys]
  (let [stop-loop (steering/start-line-tracking-loop {:system sys :track-white true})]
    ;; Let it run a while...
    (Thread/sleep 10000)
    ;; Stop it cleanly
    (stop-loop)))

(defn ^:exec main
  [_]
  (let [sys (system/create-system)]
    (servo-demo sys)
    (Thread/sleep 1000)
    (ultrasound-demo sys)
    (Thread/sleep 1000)
    (line-track-demo sys)
    (Thread/sleep 1000)
    ;; shutdown system cleaninly
    (system/shutdown! sys)))

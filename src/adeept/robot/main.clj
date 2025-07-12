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

; (defn ^:exec main 
;   [_]
;   (let [sys (system/create-system)
;         stop-loop (steering/start-behavior-loop
;                    {:system sys
;                     :threshold 25
;                     :interval 200})]
;
;     (println sys)
;     ;; Let it run a while...
;     (Thread/sleep 20000)
;
;     ;; Stop it cleanly
;     (stop-loop)
;     (system/shutdown! sys)))

(defn ^:exec main 
  [_]
  (let [sys (system/create-system)
        srv (:servo sys)]
    (servo/camera-ang! srv "lookup")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookup")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookup")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookdown")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookup")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookdown")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookup")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookdown")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookdown")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "lookdown")
    (Thread/sleep 1000)
    (servo/camera-ang! srv "home")
    (Thread/sleep 1000)
    (servo/clean-all! srv)
    (system/shutdown! sys)))

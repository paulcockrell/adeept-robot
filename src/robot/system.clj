(ns robot.system
  (:require
   [robot.mini-ros.state :refer [shutting-down?]]
   [robot.hardware.motor :as motor]
   [robot.hardware.ldr :as ldr]
   [robot.hardware.neopixel :as neopixel]
   [robot.hardware.ultrasound :as ultrasound]
   [robot.hardware.servo :as servo]
   [robot.hardware.camera :as camera])
  (:import
   com.pi4j.Pi4J))

(defn boot-system
  "Boots the Pi4J context and robot hardware"
  []
  (let [pi4j (Pi4J/newAutoContext)
        motors (motor/create-motors pi4j)
        sensors {:ultrasound-sensor (ultrasound/create-sensor pi4j)
                 :ldr-sensor (ldr/create-sensor pi4j)}
        servo (servo/create-servo pi4j)]
        _ (camera/create-camera "resources/public/camera-frame.jpg")]
    {:pi4j pi4j
     :motors motors
     :sensors sensors
     :servo servo}))

(defn shutdown!
  "Shuts down the Pi4J context and releases all GPIO resources."
  [system]
  (println "JVM shutting down. Cleaning up robot...")

  (reset! shutting-down? true)

  ; shutdown servos
  (let [srv (:servo system)]
    (servo/clean-all! srv))

  ; shutdown camera
  (camera/shutdown-camera!))

  ; shutdown neopixel daemon
  (neopixel/stop-daemon!)

  (.shutdown (:pi4j system)))

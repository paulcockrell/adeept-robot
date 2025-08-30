(ns robot.system
  (:require
   [robot.mini-ros.state :refer [shutting-down?]]
   [robot.hardware.factory.motor :as motor-factory]
   [robot.peripherals.ultrasound :as ultrasound]
   [robot.peripherals.neopixel :as neopixel]
   [robot.peripherals.servo :as servo]
   [robot.peripherals.ldr :as ldr])
  (:import
   com.pi4j.Pi4J))

;; Ultrasound BCM pins
(defonce ultrasound-trig 11)
(defonce ultrasound-echo 8)

;; Line track BCM pins - I may have the sensor in the wrong way around!
(defonce ldr-left-pin 19)
(defonce ldr-middle-pin 16)
(defonce ldr-right-pin 20)

(defn boot-system
  "Boots the Pi4J context and robot peripherals"
  []
  (let [pi4j (Pi4J/newAutoContext)
        motors (motor-factory/create pi4j)
        sensors {:ultrasound-sensor (ultrasound/create-sensor pi4j {:trig ultrasound-trig :echo ultrasound-echo})
                 :ldr-sensor (ldr/create-sensor pi4j {:ldr-left-pin ldr-left-pin :ldr-middle-pin ldr-middle-pin :ldr-right-pin ldr-right-pin})}
        servo (servo/create-servo pi4j)]
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

  ; shutdown neopixel daemon
  (neopixel/start-daemon!)

  (.shutdown (:pi4j system)))

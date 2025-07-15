(ns robot.system
  (:require
   [mini-ros.core :as mini-ros-core]
   [mini-ros.motor-arbiter :as mini-ros-motor-arbiter]
   [peripherals.motor :as motor]
   [peripherals.ultrasound :as ultrasound]
   [peripherals.servo :as servo]
   [peripherals.line-track :as line-track])
  (:import
   com.pi4j.Pi4J))

;; Left motor BCM pins
(defonce motor-a-en1 4)
(defonce motor-a-in1 26)
(defonce motor-a-in2 21)

;; Right motor BCM pins
(defonce motor-b-en1 17)
(defonce motor-b-in1 27)
(defonce motor-b-in2 18)

;; Ultrasound BCM pins
(defonce ultrasound-trig 11)
(defonce ultrasound-echo 8)

;; Line track BCM pins
(defonce ldr-pin-l 20)
(defonce ldr-pin-m 16)
(defonce ldr-pin-r 19)

(defn create-system
  "Boots the Pi4J context and robot peripherals"
  []
  (let [pi4j (Pi4J/newAutoContext)
        motors {:left (motor/create-motor pi4j "LEFT" motor-a-en1 motor-a-in1 motor-a-in2)
                :right (motor/create-motor pi4j "RIGHT" motor-b-en1 motor-b-in1 motor-b-in2)}
        sensors {:ultrasound-sensor (ultrasound/create-sensor pi4j {:trig ultrasound-trig :echo ultrasound-echo})
                 :line-track-sensor (line-track/create-sensor pi4j {:ldr-pin-l ldr-pin-l :ldr-pin-m ldr-pin-m :ldr-pin-r ldr-pin-r})}
        servo (servo/create-servo pi4j)]
    {:pi4j pi4j
     :motors motors
     :sensors sensors
     :servo servo}))

(defn start-nodes! [system]
  (let [{:keys [motors sensors _servo]} system
        {:keys [ultrasound-sensor line-track-sensor]} sensors]
    [(mini-ros-motor-arbiter/motor-arbiter-node motors motor/drive! motor/stop-all!)
     (mini-ros-core/start-line-tracker line-track-sensor line-track/status 100)
     (mini-ros-core/start-ultrasound ultrasound-sensor ultrasound/measure 100)
     (mini-ros-core/line-follow-node)
     (mini-ros-core/obstacle-avoidance-node 10)
     (mini-ros-core/logger-node)]))

(defn shutdown!
  "Shuts down the Pi4J context and releases all GPIO resources."
  [system]
  (.shutdown (:pi4j system)))

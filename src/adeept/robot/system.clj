(ns adeept.robot.system
  (:require
   [adeept.peripherals.motor :as motor]
   [adeept.peripherals.ultrasound :as ultrasound])
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

(defn create-system
  "Boots the Pi4J context and all robot peripherals."
  []
  (let [pi4j (Pi4J/newAutoContext)]
    {:pi4j       pi4j
     :left-motor (motor/create-motor pi4j "LEFT" motor-a-en1 motor-a-in1 motor-a-in2)
     :right-motor (motor/create-motor pi4j "RIGHT" motor-b-en1 motor-b-in1 motor-b-in2)
     :ultrasound-sensor (ultrasound/create-sensor pi4j {:trig ultrasound-trig :echo ultrasound-echo})}))

(defn shutdown!
  "Shuts down the Pi4J context and releases all GPIO resources."
  [system]
  (.shutdown (:pi4j system)))

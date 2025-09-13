(ns robot.hardware.ultrasound
  (:require [robot.hardware.pi4j.ultrasound :as ultrasound]
            [robot.hardware.mock.ultrasound :as mock-ultrasound]
            [robot.env :as env]))

;; Ultrasound BCM pins
(defonce ultrasound-trig 11)
(defonce ultrasound-echo 8)

(defn create-sensor
  "Constructs a ultrasound instance"
  [pi4j]
  (if env/is-rpi?
    (ultrasound/create-sensor pi4j {:trig ultrasound-trig :echo ultrasound-echo})
    (mock-ultrasound/create-sensor)))

(defn measure
  "Returns distance in cm or -1 on failure."
  [sensor]
  (if env/is-rpi?
    (ultrasound/measure sensor)
    (mock-ultrasound/measure)))

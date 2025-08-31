(ns robot.hardware.ultrasound
  (:require [robot.hardware.pi4j.ultrasound :as ultrasound]
            [robot.hardware.mock.ultrasound :as mock-ultrasound]))

;; Ultrasound BCM pins
(defonce ultrasound-trig 11)
(defonce ultrasound-echo 8)

;; TODO move in to util
(def ^:private running-on-pi? (System/getenv "IS_RPI"))

(defn create-sensor
  "Constructs a ultrasound instance"
  [pi4j]
  (if running-on-pi?
    (ultrasound/create-sensor pi4j {:trig ultrasound-trig :echo ultrasound-echo})
    (mock-ultrasound/create-sensor)))

(defn measure
  "Returns distance in cm or -1 on failure."
  [sensor]
  (if running-on-pi?
    (ultrasound/measure sensor)
    (mock-ultrasound/measure)))

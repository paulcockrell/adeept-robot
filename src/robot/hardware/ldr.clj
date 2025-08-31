(ns robot.hardware.ldr
  (:require [robot.hardware.pi4j.ldr :as ldr]
            [robot.hardware.mock.ldr :as mock-ldr]
            [robot.env :as env]))

;; Line track BCM pins - I may have the sensor in the wrong way around!
(defonce ldr-left-pin 19)
(defonce ldr-middle-pin 16)
(defonce ldr-right-pin 20)

(defn create-sensor [pi4j]
  (if env/is-rpi?
    (ldr/create-sensor pi4j {:ldr-left-pin ldr-left-pin :ldr-middle-pin ldr-middle-pin :ldr-right-pin ldr-right-pin})
    (mock-ldr/create-sensor)))

(defn status [ldr-sensor]
  (if env/is-rpi?
    (ldr/status ldr-sensor)
    (mock-ldr/status ldr-sensor)))

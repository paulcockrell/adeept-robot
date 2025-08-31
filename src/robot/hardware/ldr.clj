(ns robot.hardware.ldr
  (:require [robot.hardware.pi4j.ldr :as ldr]
            [robot.hardware.mock.ldr :as mock-ldr]))

;; Line track BCM pins - I may have the sensor in the wrong way around!
(defonce ldr-left-pin 19)
(defonce ldr-middle-pin 16)
(defonce ldr-right-pin 20)

;; TODO move in to util
(def ^:private running-on-pi? (System/getenv "IS_RPI"))

(defn create-sensor [pi4j]
  (if running-on-pi?
    (ldr/create-sensor pi4j {:ldr-left-pin ldr-left-pin :ldr-middle-pin ldr-middle-pin :ldr-right-pin ldr-right-pin})
    (mock-ldr/create-sensor)))

(defn status [ldr-sensor]
  (if running-on-pi?
    (ldr/status ldr-sensor)
    (mock-ldr/status ldr-sensor)))

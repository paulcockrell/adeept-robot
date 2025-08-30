(ns robot.hardware.factory.motor
  (:require [robot.hardware.pi4j.motor :as motor]
            [robot.hardware.mock.motor :as mock-motor]))

;; Left motor BCM pins
(defonce motor-a-en1 4)
(defonce motor-a-in1 26)
(defonce motor-a-in2 21)

;; Right motor BCM pins
(defonce motor-b-en1 17)
(defonce motor-b-in1 27)
(defonce motor-b-in2 18)

;; TODO move in to util
(def ^:private running-on-pi? (System/getenv "IS_RPI"))

(defn create [pi4j]
  (if running-on-pi?
    {:left-motor (motor/create-motor pi4j "LEFT MOTOR" motor-a-en1 motor-a-in1 motor-a-in2)
     :right-motor (motor/create-motor pi4j "RIGHT MOTOR" motor-b-en1 motor-b-in1 motor-b-in2)}
    {:left-motor (mock-motor/create-motor "LEFT MOTOR")
     :right-motor (mock-motor/create-motor "RIGHT MOTOR")}))

;; Public API 
(defn drive [motors cmd]
  (if running-on-pi?
    (motor/drive! motors cmd)
    (mock-motor/drive! motors cmd)))

(defn stop [motors]
  (if running-on-pi?
    (motor/stop-all! motors)
    (mock-motor/stop-all! motors)))

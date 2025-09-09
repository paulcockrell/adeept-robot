(ns robot.hardware.servo
  (:require [robot.hardware.pi4j.servo :as servo]
            [robot.hardware.mock.servo :as mock-servo]
            [robot.env :as env]))

(defn create-servo
  "Constructs a servo i2c instance"
  [pi4j]
  (if env/is-rpi?
    (servo/create-servo pi4j)
    (mock-servo/create-servo)))

(defn set-ang!
  "Takes percentage value and translates and sets the camera angle"
  [servo percent]
  (if env/is-rpi?
    (servo/set-ang! servo percent)
    (mock-servo/set-ang! percent)))

(defn clean-all!
  "Shutdown servos"
  [servo]
  (if env/is-rpi?
    (servo/clean-all! servo)
    (mock-servo/clean-all!)))

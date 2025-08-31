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
  [i2c percent]
  (if env/is-rpi?
    (servo/set-ang! i2c percent)
    (mock-servo/set-ang! percent)))

(defn clean-all!
  "Shutdown servos"
  [i2c]
  (if env/is-rpi?
    (servo/clean-all! i2c)
    (mock-servo/clean-all!)))

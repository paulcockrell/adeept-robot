(ns robot.hardware.camera
  (:require [robot.hardware.pi4j.camera :as camera]
            [robot.hardware.mock.camera :as mock-camera]
            [robot.env :as env]))

(defn capture-frame! [outfile]
  (if env/is-rpi?
    (camera/capture-frame! outfile)
    (mock-camera/capture-frame! outfile)))

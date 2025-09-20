(ns robot.hardware.camera
  (:require [robot.hardware.pi4j.camera :as camera]
            [robot.hardware.mock.camera :as mock-camera]
            [robot.env :as env]))

(defn create-camera [outfile]
  (if env/is-rpi?
    (camera/create-camera outfile)
    (mock-camera/create-camera outfile)))

(defn shutdown-camera! []
  (if env/is-rpi?
    (camera/shutdown-camera!)
    (mock-camera/shutdown-camera!)))

(defn capture-frame! []
  (if env/is-rpi?
    (camera/capture-frame!)
    (mock-camera/capture-frame!)))

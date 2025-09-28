(ns robot.hardware.camera
  (:require [robot.hardware.pi4j.camera :as camera]
            [robot.hardware.mock.camera :as mock-camera]
            [robot.env :as env]))

(defn create-camera [outfile]
  (if env/is-rpi?
    (camera/create-camera)
    (mock-camera/create-camera outfile)))

(defn shutdown-camera! []
  (when-not env/is-rpi?
    (mock-camera/shutdown-camera!)))

(defn capture-frame! []
  (when-not env/is-rpi?
    (mock-camera/capture-frame!)))

(ns robot.hardware.camera
  (:require [robot.hardware.pi4j.camera :as camera]
            [robot.hardware.mock.camera :as mock-camera]
            [robot.env :as env]))

(defn create-camera [outfile]
  (if env/is-rpi?
    (camera/create-camera "http://127.0.0.1:8081/stream.mjpg") ;; TODO - move this to an argument
    (mock-camera/create-camera outfile)))

(defn shutdown-camera! []
  (if env/is-rpi?
    (camera/shutdown-camera!)
    (mock-camera/shutdown-camera!)))

(defn capture-frame! []
  (when (not env/is-rpi?)
    (mock-camera/capture-frame!)))

(ns robot.hardware.pi4j.camera
  (:require [clojure.core.async :refer [go-loop <! timeout]]
            [robot.mini-ros.core :refer [publish!]]
            [robot.mini-ros.state :refer [shutting-down?]])
  (:import [org.bytedeco.opencv.global opencv_imgcodecs]
           [org.bytedeco.opencv.opencv_videoio VideoCapture]
           [org.bytedeco.opencv.opencv_core Mat]))

(defonce ready (atom false))
(defonce video-cap-instance (atom nil))
(defonce frame-instance (atom nil))

(defn capture-frame! []
  (reset! ready true))

(defn create-camera [outfile]
  (let [video-cap (VideoCapture. 0) ; 0 = default camera
        frame (Mat.)]
    (when-not (.isOpened video-cap)
      (throw (ex-info "[CAMERA] Camera could not be opened" {})))

    (println "[CAMERA] Created")

      ;; save references so they persist
    (reset! video-cap-instance video-cap)
    (reset! frame-instance frame)

    (go-loop []
      (when (and (not @shutting-down?)
                 @ready
                 (.read video-cap frame))
        (println "[CAMERA] Capturing frame")
        (opencv_imgcodecs/imwrite outfile frame)
        (reset! ready false))
      (recur))))

(defn shutdown-camera! []
  (when @video-cap-instance
    (.release @video-cap-instance)
    (reset! video-cap-instance nil)
    (reset! frame-instance nil)
    (println "[CAMERA] Shutdown")))

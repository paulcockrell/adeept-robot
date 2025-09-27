(ns robot.hardware.pi4j.camera
  (:require [clojure.core.async :refer [go-loop <! timeout]]
            [robot.mini-ros.core :refer [publish!]]
            [robot.mini-ros.state :refer [shutting-down?]])
  (:import [org.bytedeco.opencv.global opencv_imgcodecs]
           [org.bytedeco.opencv.global opencv_videoio]
           [org.bytedeco.opencv.opencv_videoio VideoCapture]
           [org.bytedeco.opencv.opencv_core Mat]))

(defonce ready (atom false))
(defonce video-cap-instance (atom nil))

(defn capture-frame! []
  (reset! ready true))

(defn create-camera [outfile]
  (let [video-cap (VideoCapture. 0)] ; 0 = default camera
    (if (.isOpened video-cap)
      (do 
        (.set video-cap opencv_videoio/CAP_PROP_FRAME_WIDTH 640)
        (.set video-cap opencv_videoio/CAP_PROP_FRAME_HEIGHT 480))
      (throw (ex-info "[CAMERA] Camera could not be opened" {})))

    (reset! video-cap-instance video-cap)

    (println "[CAMERA] Created")

    (go-loop []
      (when-not @shutting-down?
        (if @ready
          (let [frame (Mat.)]
            (if (.read @video-cap-instance frame)
              (do
                (opencv_imgcodecs/imwrite outfile frame)
                (reset! ready false))
              (println "[CAMERA] Failed to capture frame")))
          (<! (timeout 50))) ; wait 50ms when idle
        (recur)))))

(defn shutdown-camera! []
  (when @video-cap-instance
    (.release @video-cap-instance)
    (reset! video-cap-instance nil)
    (println "[CAMERA] Shutdown")))

(ns robot.hardware.pi4j.camera
  (:require [clojure.core.async :refer [go-loop <! timeout]]
            [robot.mini-ros.core :refer [publish!]]
            [robot.mini-ros.state :refer [shutting-down?]])
  (:import [org.bytedeco.opencv.global opencv_imgcodecs]
           [org.bytedeco.opencv.opencv_videoio VideoCapture]
           [org.bytedeco.opencv.opencv_core Mat]))

(defonce ready (atom false))

(defn capture-frame! []
  (reset! ready true))

(defn create-camera [outfile]
  (let [cap (VideoCapture. 0) ; 0 = default camera
          frame (Mat.)]
      (when-not (.isOpened cap)
        (throw (ex-info "Camera could not be opened" {}))

      (go-loop []
        (when (and (not @shutting-down?)
                   @ready
                   (.read cap frame))
          (opencv_imgcodecs/imwrite outfile frame)
          (reset! ready false))
        (recur))

      ;; Return cleanup function 
      #(do (.release cap)
          (println "[CAMERA NODE] stopped")))))

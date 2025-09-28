(ns robot.hardware.pi4j.camera
  (:require [robot.mini-ros.core :refer [publish!]])
  (:import [processing.video Capture]
           [ch.bildspur.opencv.processin OpenCV]
           [java.awt Rectangle Color]
           [javax.imageio ImageIO]
           [java.io ByteArrayOutputStream]))

;; Shared state: latest JPEG frame with overlays
(def latest-frame (atom nil))

(defn- encode-jpeg [^processing.core.PImage pimage faces]
  (let [img (.getNative pimage)
        g   (.createGraphics img)]
    (try
      (.setColor g (Color. 0 255 0))
      (.setStroke g (java.awt.BasicStroke. 2))
      (doseq [^Rectangle face faces]
        (.drawRect g (.x face) (.y face) (.width face) (.height face)))
      (let [baos (ByteArrayOutputStream.)]
        (ImageIO/write img "jpg" baos)
        (.toByteArray baos))
      (finally
        (.dispose g)))))

(defn create-camera []
  (let [video  (Capture. nil 320 240)
        opencv (OpenCV. nil 320 240)]
    (.loadCascade opencv OpenCV/CASCADE_FRONTALFACE)
    (.start video)
    (future
      (while true
        (when (.available video)
          (.read video)
          (.loadImage opencv video)
          (let [faces (.detect opencv)]
            ;; publish events
            (doseq [^Rectangle face faces]
              (publish! "camera/face-detected"
                        {:x (.x face) :y (.y face)
                         :w (.width face) :h (.height face)}))
            ;; store annotated JPEG for web streaming
            (reset! latest-frame (encode-jpeg video faces)))))
      (Thread/sleep 33))
    video))

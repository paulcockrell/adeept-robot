(ns robot.hardware.pi4j.camera
  (:require [clojure.core.async :refer [go-loop <! timeout]]
            [clojure.java.io :as io]
            [robot.mini-ros.core :refer [publish!]]
            [robot.mini-ros.state :refer [shutting-down?]])
  (:import [boofcv.io.webcamcapture UtilWebcamCapture]
           [com.github.sarxos.webcam Webcam]
           [javax.imageio ImageIO]))

(defonce ready (atom false))
(defonce webcam-instance (atom nil))

(defn capture-frame! []
  (reset! ready true))

(defn create-camera [outfile]
  (let [webcam (UtilWebcamCapture/openDefault 640 480)]
    (when (nil? webcam)
      (throw (ex-info "[CAMERA] Camera could not be opened" {})))
    (when-not (.isOpen webcam)
      (.open webcam))

    (reset! webcam-instance webcam)
    (println "[CAMERA] Created")

    (go-loop []
      (when-not @shutting-down?
        (if @ready
          (try
            (let [frame (UtilWebcamCapture/getImage ^Webcam @webcam-instance)]
              (if frame
                (do
                  (ImageIO/write frame "jpg" (io/file outfile))
                  (reset! ready false))
                (println "[CAMERA] Failed to capture frame")))
            (catch Exception e
              (println "[CAMERA] Error capturing frame" (.getMessage e))
              (reset! ready false)))
          (<! (timeout 50))) ; wait 50ms when idle
        (recur)))))

(defn shutdown-camera! []
  (when-let [webcam @webcam-instance]
    (when (.isOpen webcam)
      (.close webcam))
    (reset! webcam-instance nil)
    (reset! ready false)
    (println "[CAMERA] Shutdown")))

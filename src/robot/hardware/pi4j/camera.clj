(ns robot.hardware.pi4j.camera
  (:require [clojure.core.async :refer [go-loop <! timeout]]
            [clojure.java.io :as io]
            [robot.mini-ros.state :refer [shutting-down?]])
  (:import [com.github.sarxos.webcam Webcam]
           [com.github.sarxos.webcam.ds.raspivid RaspividDriver]
           [java.awt Dimension]
           [javax.imageio ImageIO]))

(defonce ready (atom false))
(defonce webcam-instance (atom nil))

(defn- maybe-set-raspi-driver! []
  (try
    (Webcam/setDriver (RaspividDriver.))
    (println "[CAMERA] Using Raspivid driver")
    (catch Throwable _
      (println "[CAMERA] Raspivid driver unavailable, falling back to default"))))

(defn- configure-webcam! [^Webcam webcam width height]
  (let [size (Dimension. width height)]
    (.setCustomViewSizes webcam (into-array Dimension [size]))
    (.setViewSize webcam size)))

(defn capture-frame! []
  (reset! ready true))

(defn create-camera [outfile]
  (maybe-set-raspi-driver!)
  (let [webcam (Webcam/getDefault)]
    (when (nil? webcam)
      (throw (ex-info "[CAMERA] Camera could not be opened" {})))

    (configure-webcam! webcam 640 480)
    (when-not (.isOpen webcam)
      (.open webcam true))

    (reset! webcam-instance webcam)
    (println "[CAMERA] Created")

    (go-loop []
      (when-not @shutting-down?
        (if @ready
          (try
            (let [frame (.getImage ^Webcam @webcam-instance)]
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

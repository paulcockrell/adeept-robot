(ns robot.hardware.pi4j.camera
  (:require [robot.mini-ros.core :refer [publish!]])
  (:import
   [java.io ByteArrayOutputStream]
   [javax.imageio ImageIO]
   [java.awt Graphics2D BasicStroke Color]
   [java.awt.image BufferedImage]
   [boofcv.alg.misc ImageStatistics]
   [boofcv.struct.image GrayU8]
   [boofcv.io.image ConvertBufferedImage]
   [boofcv.alg.filter.binary GThresholdImageOps]
   [boofcv.alg.filter.binary BinaryImageOps]))

;; These must match the libcamera-vid setting in the Makefile
(def ^:private W 640)
(def ^:private H 480)

(def ^:private BYTES-Y (* W H))
(def ^:private BYTES-UV (/ (* W H) 2)) ; skip size (U+V) for YUV420p

(def latest-frame (atom nil))

(defn- jpeg-bytes ^bytes [^BufferedImage bi]
  (let [baos (ByteArrayOutputStream.)]
    (ImageIO/write bi "jpg" baos)
    (.toByteArray baos)))

(defn create-camera
  "Reads YUV420p frames from FIFO (e.g. /tmp/camera.yuv), runs simple BoofCV on Y,
   publishes events, and updates `latest-frame` with an annotated JPEG."
  ([]
   (create-camera "/tmp/camera.yuv"))
  ([fifo-path]
   (future
     (let [ybuf (byte-array BYTES-Y)
           uvbuf (byte-array BYTES-UV)
           gray (GrayU8. W H)]
       (loop []
         (try
           (with-open [raw-in (java.io.BufferedInputStream.
                               (java.io.FileInputStream. fifo-path) ; <-- plain FileInputStream for FIFO
                               (* 1024 64))
                       din    (java.io.DataInputStream. ^java.io.InputStream raw-in)]
             (while true
               ;; --- Read one YUV420 frame ---
               (.readFully din ybuf 0 BYTES-Y)   ;; Y plane
               (.readFully din uvbuf 0 BYTES-UV) ;; skip chroma

               ;; Copy Y into GrayU8
               (System/arraycopy ybuf 0 (.data gray) 0 BYTES-Y)

               ;; --- Example BoofCV processing: simple threshold + erode ---
               (let [binary (GrayU8. W H)]
                 (GThresholdImageOps/threshold gray binary 110 true)
                 (let [eroded (BinaryImageOps/erode8 binary 1 nil)
                       on-count (long (ImageStatistics/sum eroded))]
                   (publish! "vision/binary" {:on on-count :w W :h H})))

               ;; --- Optional overlay & JPEG for /camera ---
               (let [bi (ConvertBufferedImage/convertTo gray nil)
                     g  ^Graphics2D (.getGraphics bi)]
                 (.setColor g (Color. 0 255 0))
                 (.setStroke g (BasicStroke. 2.0))
                 ;; tiny crosshair at center
                 (.drawLine g (quot W 2) (dec (quot H 2))
                            (quot W 2) (+ 1 (quot H 2)))
                 (.drawLine g (dec (quot W 2)) (quot H 2)
                            (+ 1 (quot W 2)) (quot H 2))
                 (.dispose g)
                 (reset! latest-frame (jpeg-bytes bi)))

                ;; ~30fps target; tune as desired
               (Thread/sleep 33)))
           (catch Exception e
             (println "YUV consumer ended/error:" (.getMessage e))
             ;; Re-open the FIFO when producer restarts
             (Thread/sleep 500)))
         (recur))))))

(defn shutdown-camera! []
  (println "[CAMERA] Shutdown no-op"))

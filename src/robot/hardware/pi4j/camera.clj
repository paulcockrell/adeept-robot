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

               (let [^bytes ydata (.data gray)
                     thr (int 100)
                     w W
                     h H
                     ;; accumulators 
                     sx (long-array 1)
                     sy (long-array 1)
                     cnt (long-array 1)]
                 ;; Compute centroid of all Y>thr 
                 (dotimes [y h]
                   (let [row-off (* y w)]
                     (dotimes [x w]
                       (let [v (bit-and 0xff (aget ydata (+ row-off x)))]
                         (when (> v thr)
                           (aset-long sx 0 (+ (aget sx 0) x))
                           (aset-long sy 0 (+ (aget sy 0) y))
                           (aset-long cnt 0 (inc (aget cnt 0))))))))
                 (let [n (aget cnt 0)]
                   (when (pos? n)
                     (let [cx (int (Math/round (double (/ (aget sx 0) n))))
                           cy (int (Math/round (double (/ (aget sy 0) n))))]
                       ;; publish blob position + size proxy 
                       (publish! "vision/blog" {:x cx :y cy :count n :w W :h :H})
                       ;; draw a big crosshair so it's obvious in grayscale 
                       (let [bi (ConvertBufferedImage/convertTo gray nil)
                             g ^Graphics2D (.getGraphics bi)
                             arm 20]
                         (.setColor g (Color. 255 0 0))
                         (.setStroke g (BasicStroke. 3.0))
                         (.drawLine g (max 0 (- cx arm)) cy (min (dec W) (+ cx arm)) cy)
                         (.drawLine g cx (max 0 (- cy arm)) cx (min (dec H) (+ cy arm)))
                         (.dispose g)
                         (reset! latest-frame (let [baos (ByteArrayOutputStream.)]
                                                (ImageIO/write bi "jpg" baos)
                                                (.toByteArray baos))))))))

                ;; ~30fps target; tune as desired
               (Thread/sleep 33)))
           (catch Exception e
             (println "YUV consumer ended/error:" (.getMessage e))
             ;; Re-open the FIFO when producer restarts
             (Thread/sleep 500)))
         (recur))))))

(defn shutdown-camera! []
  (println "[CAMERA] Shutdown no-op"))

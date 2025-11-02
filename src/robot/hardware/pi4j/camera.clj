(ns robot.hardware.pi4j.camera
  (:require [robot.mini-ros.core :refer [publish!]])
  (:import
   [java.io ByteArrayOutputStream]
   [javax.imageio ImageIO]
   [java.awt Graphics2D BasicStroke Color]
   [java.awt.image BufferedImage]
   [boofcv.alg.misc PixelMath]
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

(def prev-frame (atom nil))
(def latest-frame (atom nil))

(defn- jpeg-bytes ^bytes [^BufferedImage bi]
  (let [baos (ByteArrayOutputStream.)]
    (ImageIO/write bi "jpg" baos)
    (.toByteArray baos)))

(defn detect-motion!
  [^GrayU8 gray]
  (if-let [^GrayU8 prev @prev-frame]
    (let [diff (GrayU8. (.width gray) (.heigh gray))]
      (PixelMath/absDiff gray prev diff)
      (let [avg-diff (ImageStatistics/mean diff)]
        (publish! "camera/motion" {:change avg-diff})
        (when (> avg-diff 5)
          (publish! "camera/event" {:type :movement-detected}))))
    (println "Initializing motion baseline"))
  (reset! prev-frame gray))

(defn draw-crosshairs!
  [^GrayU8 gray]
  (let [bi (ConvertBufferedImage/convertTo gray nil)
        g  ^Graphics2D (.getGraphics bi)]
    (.setColor g (Color. 255 255 255))
    (.setStroke g (BasicStroke. 2.0))
                 ;; crosshair at center
    (.drawLine g (quot W 2) (- (quot H 2) 10)
               (quot W 2) (+ (quot H 2) 10)) ;; vertical line
    (.drawLine g (- (quot W 2) 10) (quot H 2)
               (+ (quot W 2) 10) (quot H 2)) ;; horizonal line
    (.dispose g)
    (reset! latest-frame (jpeg-bytes bi))))

(defn handle-frame!
  [^GrayU8 gray]
  (detect-motion! gray)
  (draw-crosshairs! gray))

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

               ;; Process data
               (handle-frame! gray)

               ;; ~30fps target; tune as desired
               (Thread/sleep 10)))
           (catch Exception e
             (println "YUV consumer ended/error:" (.getMessage e))
             ;; Re-open the FIFO when producer restarts
             (Thread/sleep 500)))
         (recur))))))

(defn shutdown-camera! []
  (println "[CAMERA] Shutdown no-op"))

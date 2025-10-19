(ns robot.hardware.pi4j.camera
  (:require [robot.mini-ros.core :refer [publish!]])
  (:import
   [java.io FileInputStream BufferedInputStream ByteArrayOutputStream]
   [java.nio.file Files Paths StandardOpenOption]
   [javax.imageio ImageIO]
   [java.awt Graphics2D BasicStroke Color]
   [java.awt.image BufferedImage]
   [boofcv.struct.image GrayU8]
   [boofcv.io.image ConvertBufferedImage]
   [boofcv.alg.filter.binary GThresholdImageOps]
   [boofcv.alg.filter.binary BinaryImageOps]))

(def latest-frame (atom nil))

(def ^:private W 640)
(def ^:private H 480)
(def ^:private BYTES-Y (* W H))
(def ^:private BYTES-UV (/ (* W H) 2)) ; skip size (U+V) for YUV420p

(defn- read-exact! ^log [^BufferedInputStream in ^bytes buf]
  (loop [off 0, need (alength buf)]
    (when (pos? need)
      (let [r (.read in buf off need)]
        (when (neg? r) (throw (ex-info "EIF" {})))
        (recur (+ off r) (- need r))))
    (alength buf)))

(defn- jpeg-bytes ^bytes [^BufferedImage bi]
  (let [baos (ByteArrayOutputStream.)]
    (ImageIO/write bi "jpg" baos)
    (.toByteArray baos)))

(defn create-camera
  "Reads YUV420p frames from a FIFO (e.g., /tmp/camera.yuv), runs simple BoofCV
  on the Y plane, publishes an event, and stores a JPEG in `latest-frame` for /camera"
  ([]
   (create-camera "/tmp/camera.yuv"))
  ([fifo-path]
   (future
     (let [ybuf (byte-array BYTES-Y)
           uvbuf (byte-array BYTES-UV)
           gray (GrayU8. W H)]
       (loop []
         (try
           ;; Open the FIFO (blocks until writer present)
           (with-open [in (-> (Paths/get fifo-path (make-array String 0))
                              (Files/newInputStream (into-array StandardOpenOption []))
                              (BufferedInputStream. (* 1024 64)))]
             (while true
               ;; Read Y plane
               (read-exact! in ybuf)
               ;; Skip UV planes (we don't need them for CV)
               (read-exact! in uvbuf)

               ;; Fill GrayU8 from Y 
               (System/arraycopy ybuf 0 (.data gray) 0 BYTES-Y)

               ;; --- Example processing: threshold + erode, publish a simple metric
               (let [binary (GrayU8. W H)
                     _ (GThresholdImageOps/threshold gray binary 110 true)
                     eroded (BinaryImageOps/erode8 binary 1 nil)
                     on-count (.sum eroded)]
                 (publish! "vision/binary" {:on on-count :w W :h H}))
               ;; --- Overlay for the MJPEG preview
               (let [bi (ConvertBufferedImage/convertTo gray nil)
                     g ^Graphics2D (.getGraphics bi)]
                 (.setColor g (Color. 0 255 0))
                 (.setStroke g (BasicStroke. 2.0))
                 ;; tiny crosshair at center
                 (.drawLine g (quot W 2) (dec (quot H 2))
                            (quot W 2) (+ 1 (quot H 2)))
                 (.drawLine g (dec (quot W 2)) (quot H 2)
                            (+ 1 (quot W 2)) (quot H 2))
                 (.dispose g)
                 (reset! latest-frame (jpeg-bytes bi)))

               (Thread/sleep 33)))
           (catch Exception e
             (println "YUV consumer: stream ended or error:" (.getMessage e))
             ;; Loop back: re-open FIFO when producer restarts
             (Thread/sleep 500)
             (recur))))))))

(defn shutdown-camera! []
  (println "[CAMERA] Shutdown no-op"))

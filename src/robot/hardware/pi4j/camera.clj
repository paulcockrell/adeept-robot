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
   [boofcv.alg.filter.blur GBlurImageOps]
   [boofcv.alg.filter.binary GThresholdImageOps]
   [boofcv.alg.filter.binary BinaryImageOps]))

;; These must match the libcamera-vid setting in the Makefile
(def ^:private W 640)
(def ^:private H 480)

(def ^:private BYTES-Y (* W H))
(def ^:private BYTES-UV (/ (* W H) 2)) ; skip size (U+V) for YUV420p

(def latest-frame (atom nil))

(defn- encode-jpeg ^bytes [^BufferedImage bi]
  (let [baos (ByteArrayOutputStream.)]
    (ImageIO/write bi "jpg" baos)
    (.toByteArray baos)))

(defn find-brightest
  "Return {:x :y :val} of brightest pixel in the image."
  [^GrayU8 gray]
  (let [w (.width gray)
        h (.height gray)
        data (.data gray)]
    (loop [i 0
           best-x 0
           best-y 0
           best-val -1]
      (if (< i (* w h))
        (let [v (bit-and 0xFF (aget data i))]
          (if (> v best-val)
            (recur (inc i)
                   (mod i w)
                   (quot i w)
                   v)
            (recur (inc i) best-x best-y best-val)))
        {:x best-x :y best-y :val best-val}))))

(defn find-brightest-smooth
  "Find brightest pixel after a small Gaussian blur for stability."
  [^boofcv.struct.image.GrayU8 gray]
  (let [blurred (GrayU8. (.width gray) (.height gray))]
    ;; sigma = -1 lets BoofCV choose automatically; radius = 3 means 7×7 kernel
    (GBlurImageOps/gaussian gray blurred -1 3 nil)
    (find-brightest blurred)))

(defn handle-frame!
  "Highlight the brightest spot, publish its coordinates, and update latest-frame."
  [^GrayU8 gray ^long W ^long H]
  (let [{:keys [x y val]} (find-brightest-smooth gray)
        bi (ConvertBufferedImage/convertTo gray nil true)
        g  ^Graphics2D (.getGraphics bi)]
    (.setColor g (Color. 255 255 0))
    (.setStroke g (BasicStroke. 3))
    (.drawOval g (max 0 (- x 10)) (max 0 (- y 10)) 20 20)
    (.dispose g)
    (publish! "camera/brightest" {:x x :y y :val val :w W :h H})
    (reset! latest-frame (encode-jpeg bi))))

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
               (handle-frame! gray W H)

               ;; ~30fps target; tune as desired
               (Thread/sleep 10)))
           (catch Exception e
             (println "YUV consumer ended/error:" (.getMessage e))
             ;; Re-open the FIFO when producer restarts
             (Thread/sleep 500)))
         (recur))))))

(defn shutdown-camera! []
  (println "[CAMERA] Shutdown no-op"))

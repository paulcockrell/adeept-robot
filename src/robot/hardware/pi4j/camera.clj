(ns robot.hardware.pi4j.camera
  (:require [robot.mini-ros.core :refer [publish!]])
  (:import
   [java.net URL HttpURLConnection]
   [java.io BufferedInputStream ByteArrayOutputStream ByteArrayInputStream]
   [javax.imageio ImageIO]
   [java.awt Graphics2D BasicStroke Color]
   [java.awt.image BufferedImage]
   [boofcv.struct.image GrayU8 Planar]
   [boofcv.io.image ConvertBufferedImage]
   [boofcv.alg.filter.binary GThresholdImageOps]
   [boofcv.alg.filter.binary BinaryImageOps]))

(def latest-frame (atom nil))

(defn ^bytes to-jpeg ^bytes [^BufferedImage bi]
  (let [baos (ByteArrayOutputStream.)]
    (ImageIO/write bi "jpg" baos)
    (.toByteArray baos)))

(defn- read-headers! [^BufferedInputStream in]
  ;; Read CRLF-delimited header lines until blank line
  (let [sb (StringBuilder.)]
    (loop [prev 0 curr (.read in)]
      (when (= -1 curr) (throw (ex-info "MJPEG stream ended" {})))
      (.append sb (char curr))
      (if (and (= prev 13) (= curr 10)) ; saw CRLF
        (let [h (str sb)]
          (if (re-find #"\r\n\r\n$" h)
            h
            (recur curr (.read in))))
        (recur curr (.read in))))))

(defn- read-exact-bytes! [^BufferedInputStream in n]
  (let [buf (byte-array n)]
    (loop [off 0]
      (when (< off n)
        (let [r (.read in buf off (- n off))]
          (when (neg? r) (throw (ex-info "MJPEG content truncated" {})))
          (recur (+ off r)))))
    buf))

(defn- open-mjpeg [url]
  (doto ^HttpURLConnection (.openConnection (URL. url))
    (.setRequestProperty "User-Agent" "robot-hal/1.0")
    (.connect)))

(defonce ready (atom false))

(defn capture-frame! []
  (reset! ready true))

(defn create-camera
  "Consume MJPEG from rpicam-vid/ffmpeg, process with BoofCV, publish events,
   and keep annotated JPEG in `latest-frame`."
  [mjpeg-url]
  (println "XXX 1")
  (future
    (println "XXX 2")
    (let [conn (open-mjpeg mjpeg-url)
          in   (BufferedInputStream. (.getInputStream conn))]
    (println "XXX 3")
      (try
         ;; Parse boundary from initial headers
        (let [first-headers (read-headers! in)
              boundary (or (some-> (re-find #"boundary=([^\r\n;]+)" first-headers) second)
                           "frame")]
          (while true
             ;; Expect: --boundary + headers (incl. Content-Length)
             ;; Read up to the blank line
            (let [part-headers (read-headers! in)
                  len (some-> (re-find #"Content-Length:\s*(\d+)" part-headers)
                              second
                              Integer/parseInt)]
              (println "XXX hello")
              (when-not len
                (throw (ex-info "Missing Content-Length in MJPEG part" {:headers part-headers})))
              (let [jpeg-bytes (read-exact-bytes! in len)
                    _          (read-headers! in) ;; consume trailing CRLF after part body
                    ^BufferedImage bi (ImageIO/read (ByteArrayInputStream. jpeg-bytes))
                    w (.getWidth bi) h (.getHeight bi)
                    color (Planar. GrayU8 3 w h)
                    gray  (GrayU8. w h)]
                 ;; BoofCV conversions
                (ConvertBufferedImage/convertFrom bi color true)
                (boofcv.alg.color.ColorRgb/rgbToGray_Weighted color gray)

                 ;; Example: global threshold + clean → publish 'on-pixel' count
                (let [binary (GThresholdImageOps/threshold gray nil 110 true)
                      cleaned (BinaryImageOps/erode8 binary 1 nil)
                       ;; naive metric: count of 'on' pixels
                      on-count (.sum cleaned)]
                  (publish! "vision/binary" {:on on-count :w w :h h}))

                 ;; Optional overlay (just draw a small cross at center here)
                (let [g ^Graphics2D (.getGraphics bi)]
                  (.setColor g (Color. 0 255 0))
                  (.setStroke g (BasicStroke. 2.0))
                  (.drawLine g (quot w 2) (quot h 2) (quot w 2) (+ 5 (quot h 2)))
                  (.drawLine g (quot w 2) (quot h 2) (+ 5 (quot w 2)) (quot h 2))
                  (.dispose g))
                (println "frame bytes:" bi) 
                (reset! latest-frame (to-jpeg bi))))))
        (catch Exception e
          (reset! latest-frame nil)
          (throw e))
        (finally
          (.disconnect conn))))
    {:latest-frame latest-frame}))

(defn shutdown-camera! []
  (println "[CAMERA] Shutdown"))

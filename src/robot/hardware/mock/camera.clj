(ns robot.hardware.mock.camera
  (:require [clojure.java.io :as io])
  (:import [javax.imageio ImageIO]
           [java.awt Color Font RenderingHints]))

(defonce outfile (atom nil))

(defn create-camera [new-outfile]
  (println "[MOCK CAMERA] Created")
  (reset! outfile new-outfile))

(defn shutdown-camera! []
  (println "[CAMERA] Shutdown"))

(defn capture-frame!
  "Copies test_frame.jpg from resources and embeds frame
  number before copying to to outfile"
  []
  (let [src (ImageIO/read (io/resource "test_frame.jpg"))
        graphics (.createGraphics src)]
    (try
      (.setFont graphics (Font. "SansSerif" Font/BOLD 28))
      (.setColor graphics Color/RED)
      (.setRenderingHint graphics RenderingHints/KEY_TEXT_ANTIALIASING
                         RenderingHints/VALUE_TEXT_ANTIALIAS_ON)
      (.drawString graphics (str (java.time.Instant/now)) 15 30)
      (ImageIO/write src "jpg" (io/file @outfile))
      (finally (.dispose graphics)))))

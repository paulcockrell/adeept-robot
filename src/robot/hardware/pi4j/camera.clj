(ns robot.hardware.pi4j.camera
  (:require [babashka.process :refer [process check]]))

(defn capture-frame! [outfile]
  ;; -n = no preview, -t 100 = 100ms timeout (so it's quick)
  (-> (process ["libcamera-still"
                "-n"
                "-o" outfile
                "-t" "100"
                "--width" "640"
                "--height" "480"]
               {:inherit true})
      check))

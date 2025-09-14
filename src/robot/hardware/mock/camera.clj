(ns robot.hardware.mock.camera
  (:require [clojure.java.io :refer [copy resource input-stream file]]))

(defn capture-frame! [outfile]
  (copy (input-stream (resource "test_frame.jpg")) (file outfile)))

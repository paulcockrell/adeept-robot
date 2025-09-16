(ns robot.nodes.camera
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.hardware.camera :as camera]))

(defn start-camera-node []
  (go-loop []
    (try
      (camera/capture-frame! "resources/public/camera-frame.jpg")
      (catch Exception e
        (println "[CAMERA] capture failed:" (.getMessage e))))
    (<! (timeout 500)) ; 1 frame/sec
    (recur)))

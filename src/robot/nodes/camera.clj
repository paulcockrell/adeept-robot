(ns robot.nodes.camera
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [robot.hardware.camera :as camera]))

;; TODO this should consume the published face detection
;; messages and control the robots movement (to follow the face)
(defn start-camera-node []
  (go-loop []
    (try
      (camera/capture-frame!)
      (catch Exception e
        (println "[CAMERA] capture failed:" (.getMessage e))))
    (<! (timeout 500)) ; 1 frame/sec
    (recur)))

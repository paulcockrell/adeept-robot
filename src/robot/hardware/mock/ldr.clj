(ns robot.hardware.mock.ldr)

(defn create-sensor
  "Create mock line track ldr sensors"
  []
  {})

;; TODO Make the mock ldr sensors return true/false based on timer
;; i.e 10 seconds false, 10 seconds all true
(defn status
  "Get status of mock ldr sensors. Returns map where each sensor is always false"
  [_ldr-sensor]
  {:left false
   :middle false
   :right false})

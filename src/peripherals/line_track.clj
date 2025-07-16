(ns peripherals.line-track
  (:import
   com.pi4j.io.gpio.digital.DigitalInput
   com.pi4j.io.gpio.digital.PullResistance))

(defn- make-track-pin [pi4j pin]
  (let [provider (.provider pi4j "pigpio-digital-input")
        pin-id (str "line-track-" pin)
        config (-> (DigitalInput/newConfigBuilder pi4j)
                   (.id pin-id)
                   (.name pin-id)
                   (.address (int pin))
                   (.pull PullResistance/OFF)
                   (.build))]
    (.create provider config)))

(defn create-sensor
  "Create line track sensors"
  [pi4j {:keys [ldr-left-pin ldr-middle-pin ldr-right-pin]}]
  {:left (make-track-pin pi4j ldr-left-pin)
   :middle (make-track-pin pi4j ldr-middle-pin)
   :right (make-track-pin pi4j ldr-right-pin)})

(defn status [line-track-sensor]
  (into {}
        (for [[k pin] line-track-sensor]
          [k (.isHigh pin)])))

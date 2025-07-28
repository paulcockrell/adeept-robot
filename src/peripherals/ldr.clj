(ns peripherals.ldr
  (:import
   com.pi4j.io.gpio.digital.DigitalInput
   com.pi4j.io.gpio.digital.PullResistance))

(defn- make-ldr-pin [pi4j pin]
  (let [provider (.provider pi4j "pigpio-digital-input")
        pin-id (str "ldr-" pin)
        config (-> (DigitalInput/newConfigBuilder pi4j)
                   (.id pin-id)
                   (.name pin-id)
                   (.address (int pin))
                   (.pull PullResistance/OFF)
                   (.build))]
    (.create provider config)))

(defn create-sensor
  "Create line track ldr sensors"
  [pi4j {:keys [ldr-left-pin ldr-middle-pin ldr-right-pin]}]
  {:left (make-ldr-pin pi4j ldr-left-pin)
   :middle (make-ldr-pin pi4j ldr-middle-pin)
   :right (make-ldr-pin pi4j ldr-right-pin)})

(defn status [ldr-sensor]
  (into {}
        (for [[k pin] ldr-sensor]
          [k (.isHigh pin)])))

(ns adeept.peripherals.ultrasound
  (:import
   com.pi4j.io.gpio.digital.DigitalInput
   com.pi4j.io.gpio.digital.DigitalOutput
   com.pi4j.io.gpio.digital.DigitalState
   com.pi4j.io.gpio.digital.PullResistance))

(def speed-of-sound-mps 342.25)
(def trig-duration-nanos 10000)
(def min-echo-nanos 150000)
(def max-echo-nanos 25000000)

(defn- make-trig-pin [pi4j pin]
  (-> (DigitalOutput/newConfigBuilder pi4j)
      (.id (str "ultra-trig-" pin))
      (.name "HC-SR04 Trigger")
      (.address pin)
      (.shutdown DigitalState/LOW)
      (.initial DigitalState/LOW)
      (.provider "pigpio-digital-output")
      (.build)
      (.create pi4j)))

(defn- make-echo-pin [pi4j pin]
  (-> (DigitalInput/newConfigBuilder pi4j)
      (.id (str "ultra-echo-" pin))
      (.name "HC-SR04 Echo")
      (.address pin)
      (.pull PullResistance/PULL_DOWN)
      (.provider "pigpio-digital-input")
      (.build)
      (.create pi4j)))

(defn create-sensor
  "Constructs an ultrasound sensor map. Pass pin config map: {:trig BCM_PIN :echo BCM_PIN}"
  [pi4j {:keys [trig echo]}]
  {:trig (make-trig-pin pi4j trig)
   :echo (make-echo-pin pi4j echo)})

(defn- wait-for-echo
  "Busy waits until echo pin is HIGH or LOW depending on `high?`, with timeout."
  [^DigitalInput echo high?]
  (let [start (System/nanoTime)]
    (loop []
      (let [now (System/nanoTime)]
        (if (or (= (.isHigh echo) high?)
                (>= (- now start) max-echo-nanos))
          now
          (recur))))))

(defn- calculate-distance-cm [start-ns end-ns]
  (let [pulse-ns (- end-ns start-ns)]
    (* pulse-ns (/ speed-of-sound-mps 10000000.0 2.0)))) ; cm

(defn measure
  "Returns distance in cm or -1 on failure."
  [{:keys [trig echo]}]
  (try
    (.high ^DigitalOutput trig)
    (Thread/sleep 0 (int trig-duration-nanos))
    (.low ^DigitalOutput trig)

    (let [start (wait-for-echo echo true)
          end (wait-for-echo echo false)
          duration (- end start)]
      (if (and (>= duration min-echo-nanos) (<= duration max-echo-nanos))
        (calculate-distance-cm start end)
        -1.0))
    (catch Exception e
      (println "Ultrasound read error:" (.getMessage e))
      -1.0)))


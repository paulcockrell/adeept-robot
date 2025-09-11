(ns robot.hardware.pi4j.servo
  (:require
   [clojure.math :as math])
  (:import
   com.pi4j.io.i2c.I2C))

(def pca9685-addr 0x40)
(def pwm-freq 50)
(def osc-clock 25000000)
(def pwm-res 4096)

(def mode1-reg 0x00)
(def prescale-reg 0xFE)
(def led0-on-l 0x06)

(def min-ang 500) ; inverted, i think i put the servo in upside down
(def max-ang 100)

(defn calc-prescale [freq]
  (int (math/round (- (/ osc-clock pwm-res freq) 1))))

(defn create-i2c [pi4j]
  (let [config (-> (I2C/newConfigBuilder pi4j)
                   (.id "pca9685")
                   (.name "PWM Servo Driver")
                   (.bus (int 1))
                   (.device (int pca9685-addr))
                   (.provider "linuxfs-i2c")
                   (.build))]
    (.create pi4j config)))

(defn write-byte! [i2c reg val]
  (.writeRegister i2c reg (unchecked-byte val)))

(defn read-byte! [i2c reg]
  (bit-and 0xFF (.readRegister i2c reg)))

(defn set-pwm-freq! [i2c freq]
  (let [prescale (calc-prescale freq)
        oldmode (read-byte! i2c mode1-reg)
        sleepmode (bit-or (bit-and oldmode 0x7F) 0x10)] ;; sleep
    (write-byte! i2c mode1-reg sleepmode)
    (write-byte! i2c prescale-reg prescale)
    (write-byte! i2c mode1-reg oldmode)
    (Thread/sleep 5)
    (write-byte! i2c mode1-reg (bit-or oldmode 0x80)))) ;; restart

(defn set-pwm! [i2c channel on off]
  (let [base (+ led0-on-l (* 4 channel))]
    (write-byte! i2c base       (bit-and on 0xFF))
    (write-byte! i2c (inc base) (bit-shift-right on 8))
    (write-byte! i2c (+ base 2) (bit-and off 0xFF))
    (write-byte! i2c (+ base 3) (bit-shift-right off 8))))

(defn map-range
  "Maps `value` from [in-min, in-max] to [out-min, out-max]. No clamping."
  [value in-min in-max out-min out-max]
  (int (+ out-min (* (/ (- value in-min)
                        (- in-max in-min))
                     (- out-max out-min)))))

(defn set-ang!
  "Takes percentage value and translates and sets the camera angle"
  [i2c percent]
  (let [ang (map-range percent 0 100 min-ang max-ang)]
    (set-pwm! i2c 0 0 ang)
    ang))

(defn create-servo
  "Constructs a servo i2c instance"
  [pi4j]
  (let [servo (create-i2c pi4j)]
    (set-pwm-freq! servo pwm-freq)
    servo))

(defn clean-all! [i2c]
  (doseq [ch (range 16)]
    (try
      (set-pwm! i2c ch 0 0)
      (catch java.io.IOException e
        (println "Servo already closed")))))

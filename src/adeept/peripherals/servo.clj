(ns adeept.peripherals.servo
  (:require 
    [clojure.math :as math])
  (:import
    com.pi4j.io.i2c.I2C
    com.pi4j.util.Console))

(def pca9685-addr 0x40)
(def pwm-freq 50)
(def osc-clock 25000000)
(def pwm-res 4096)

(def mode1-reg 0x00)
(def prescale-reg 0xFE)
(def led0-on-l 0x06)

(defonce state (atom {:org-pos 300}))
(def look-direction 1)
(def look-max 500)
(def look-min 100)
(def default-home 300)

(defn calc-prescale [freq]
  (int (math/round (- (/ osc-clock pwm-res freq) 1))))

(defn create-i2c [pi4j]
  (let [config (-> (I2C/newConfigBuilder pi4j)
                   (.id "pca9685")
                   (.name "PWM Servo Driver")
                   (.bus (int 1))
                   (.device (int 0x40))
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

    (println "Prescale calculated:" prescale)

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

(defn ctrl-range [raw max-val min-val]
  (-> raw
      (min max-val)
      (max min-val)
      int))

(defn microseconds->pulse [us]
  ;; Map 1000-2000us to 0–4096 (based on 50Hz)
  (int (* us (/ pwm-res 20000.0)))) ;; 20ms period

(defn camera-ang! [i2c direction & [ang]]
  (let [ang (if (or (nil? ang) (= ang "no")) 50 ang)
        dir look-direction
        org-pos (:org-pos @state)
        new-pos (case [dir direction]
                  [1 "lookdown"] (ctrl-range (+ org-pos ang) look-max look-min)
                  [1 "lookup"]   (ctrl-range (- org-pos ang) look-max look-min)
                  [1 "home"]     default-home
                  [0 "lookdown"] (ctrl-range (- org-pos ang) look-max look-min)
                  [0 "lookup"]   (ctrl-range (+ org-pos ang) look-max look-min)
                  [0 "home"]     default-home
                  org-pos)]
    (println "camera-ang:" direction "org-pos:" org-pos "new-pos:" new-pos)
    (swap! state assoc :org-pos new-pos)
    (set-pwm! i2c 0 0 new-pos)))

(defn create-servo
  "Constructs a servo map"
  [pi4j]
  (let [servo (create-i2c pi4j)]
   (set-pwm-freq! servo pwm-freq)
   servo))

(defn clean-all! [i2c]
  (doseq [ch (range 16)]
    (set-pwm! i2c ch 0 0)))

; (defn -main []
;   (let [ctx (create-context)
;         i2c (create-i2c ctx)]
;     (set-pwm-freq! i2c pwm-freq)
;     (camera-ang! i2c "lookup")
;     (Thread/sleep 1000)
;     (camera-ang! i2c "lookup")
;     (Thread/sleep 1000)
;     (camera-ang! i2c "lookup")
;     (Thread/sleep 1000)
;     (camera-ang! i2c "lookup")
;     (Thread/sleep 1000)
;     (camera-ang! i2c "lookdown")
;     (Thread/sleep 1000)
;     (camera-ang! i2c "lookdown")
;     (Thread/sleep 1000)
;     (camera-ang! i2c "home")
;     (Thread/sleep 1000)
;     (clean-all! i2c)
;     (.shutdown ctx)))
;
; (comment
;   (-main))
;

(ns robot.hardware.mock.servo)

(def min-ang 500)
(def max-ang 100)

(defn map-range
  "Maps `value` from [in-min, in-max] to [out-min, out-max]. No clamping."
  [value in-min in-max out-min out-max]
  (int (+ out-min (* (/ (- value in-min)
                        (- in-max in-min))
                     (- out-max out-min)))))

(defn set-ang!
  "Takes percentage value and translates and sets the camera angle"
  [percent]
  (let [ang (map-range percent 0 100 min-ang max-ang)]
    (println "[Mock Servo] Set angle" ang)))

(defn create-servo
  "Constructs a servo i2c instance"
  []
  {})

(defn clean-all!
  []
  (println "[Mock Servo] Shutdown servos"))

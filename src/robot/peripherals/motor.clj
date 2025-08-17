(ns robot.peripherals.motor
  (:import
   com.pi4j.io.gpio.digital.DigitalOutput
   com.pi4j.io.gpio.digital.DigitalState
   com.pi4j.io.pwm.PwmType
   com.pi4j.io.pwm.Pwm))

(defn- digital-out [pi4j id pin]
  (let [provider (.provider pi4j "pigpio-digital-output")
        config (-> (DigitalOutput/newConfigBuilder pi4j)
                   (.id id)
                   (.name id)
                   (.address (int pin))
                   (.shutdown DigitalState/LOW)
                   (.initial DigitalState/LOW)
                   (.build))]
    (.create provider config)))

(defn- pwm-out [pi4j id pin]
  (let [config (-> (Pwm/newConfigBuilder pi4j)
                   (.id id)
                   (.name id)
                   (.address (int pin))
                   (.pwmType PwmType/SOFTWARE)
                   (.frequency (int 1000))
                   (.dutyCycle 100)
                   (.initial 0)
                   (.shutdown 0)
                   (.provider "pigpio-pwm")
                   (.build))]
    (.create pi4j config)))

(defn create-motor
  "Creates a motor map with enable (PWM) and two direction pins.
  Parameters:
  - pi4j: PI4J context
  - name: string label for the motor (used in ID naming)
  - en-pin: BCM GPIO pin for speed control (PWM)
  - in1-pin: BCM GPIO pin for direction control
  - in2-pin: BCM GPIO pin for direction control
  Returns: map with keys :name, :en1, :in1, :in2"
  [pi4j name en1-pin in1-pin in2-pin]
  {:name name
   :en1 (pwm-out pi4j (str name "-EN1") en1-pin)
   :in1 (digital-out pi4j (str name "-IN1") in1-pin)
   :in2 (digital-out pi4j (str name "-IN2") in2-pin)})

(defn set-direction!
  "Sets the motor direction.
  Parameters:
  - motor: map returned by `create-motor`
  - forward?: boolean indicating forward (true) or backward (false)"
  [{:keys [in1 in2]} forward?]
  (.state in1 (if forward? DigitalState/LOW DigitalState/HIGH))
  (.state in2 (if forward? DigitalState/HIGH DigitalState/LOW)))

(defn set-speed!
  "Sets the PWM speed for a motor.
  Parameters:
  - motor: map from `create-motor`
  - duty: float (0.0–1.0), interpreted as percentage of full speed"
  [{:keys [en1]} duty]
  (let [speed (* 100 duty)]
    (.dutyCycle en1 speed)
    (.on en1)))

(defn stop-motor!
  "Stops a single motor by disabling PWM and setting direction pins LOW.
  Parameters:
  - motor: map from `create-motor`"
  [{:keys [en1 in1 in2]}]
  (.off en1)
  (.state in1 DigitalState/LOW)
  (.state in2 DigitalState/LOW))

(defn drive!
  "Drives the robot based on direction and individual motor speeds.
  Accepts:
  - motors: {:left-motor m1 :right-motor m2}
  - cmd:    {:dir :forward/:backward/:left/:right
             :left-motor-speed n
             :right-motor-speed n}"
  [{:keys [left-motor right-motor]}
   {:keys [dir left-motor-speed right-motor-speed]}]
  ;; Set motor directions
  (case dir
    :forward (do
               (set-direction! left-motor true)
               (set-direction! right-motor true))
    :backward (do
                (set-direction! left-motor false)
                (set-direction! right-motor false))
    :left (do
            (set-direction! left-motor false)
            (set-direction! right-motor true))
    :right (do
             (set-direction! left-motor true)
             (set-direction! right-motor false))
    ;; Default (stop): safe fallback
    (do
      (stop-motor! left-motor)
      (stop-motor! right-motor)))

  ;; Set speeds
  (set-speed! left-motor (or left-motor-speed 1.0))
  (set-speed! right-motor (or right-motor-speed 1.0)))

(defn stop-all!
  "Stops all motors in a collection.
  Parameters:
  - motors: sequence of motor maps"
  [{:keys [left-motor right-motor]}]
  (stop-motor! left-motor)
  (stop-motor! right-motor))

(ns adeept.robot.motor
  (:import
   com.pi4j.Pi4J
   com.pi4j.io.gpio.digital.DigitalOutput
   com.pi4j.io.gpio.digital.DigitalState
   com.pi4j.io.pwm.PwmType
   com.pi4j.io.pwm.Pwm))

(defonce pi4j (Pi4J/newAutoContext))

(defn digital-out [id pin]
  (let [provider (.provider pi4j "pigpio-digital-output")
        config (-> (DigitalOutput/newConfigBuilder pi4j)
                   (.id id)
                   (.name id)
                   (.address (int pin))
                   (.shutdown DigitalState/LOW)
                   (.initial DigitalState/LOW)
                   (.build))]

    (println "Creating digital output for GPIO" pin)
    (println "Using digital output provider:" (.id provider))

    (.create provider config)))

(defn pwm-out [id pin]
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

(defonce ena (pwm-out "ENA" 4))
(defonce enb (pwm-out "ENB" 17))
(defonce motor-a-in1 (digital-out "MotorA-IN1" 26))
(defonce motor-a-in2 (digital-out "MotorA-IN2" 21))
(defonce motor-b-in1 (digital-out "MotorB-IN1" 27))
(defonce motor-b-in2 (digital-out "MotorB-IN2" 18))

(defn set-direction [in1 in2 fwd?]
  (.state in1 (if fwd? DigitalState/HIGH DigitalState/LOW))
  (.state in2 (if fwd? DigitalState/LOW DigitalState/HIGH)))

(defn set-speed [pwm duty]
  (let [speed (* 100 duty)]
    (println "setting speed to" speed)
    (.dutyCycle pwm speed)
    (.on pwm)))

(defn stop-motor [pwm in1 in2]
  (.off pwm)
  (.state in1 DigitalState/LOW)
  (.state in2 DigitalState/LOW))

(defn left []
  (set-direction motor-a-in1 motor-a-in2 true)
  (set-direction motor-b-in1 motor-b-in2 false)
  (set-speed ena 1.0)
  (set-speed enb 1.0))

(defn right []
  (set-direction motor-a-in1 motor-a-in2 false)
  (set-direction motor-b-in1 motor-b-in2 true)
  (set-speed ena 1.0)
  (set-speed enb 1.0))

(defn forward []
  (set-direction motor-a-in1 motor-a-in2 true)
  (set-direction motor-b-in1 motor-b-in2 true)
  (set-speed ena 1.0)
  (set-speed enb 1.0))

(defn backward []
  (set-direction motor-a-in1 motor-a-in2 false)
  (set-direction motor-b-in1 motor-b-in2 false)
  (set-speed ena 1.0)
  (set-speed enb 1.0))

(defn stop []
  (stop-motor ena motor-a-in1 motor-a-in2)
  (stop-motor enb motor-b-in1 motor-b-in2))

(defn -main []
  (println "Driving forward")
  (forward)
  (Thread/sleep 1000)
  (println "Stopping")
  (stop)
  (Thread/sleep 500)
  (println "Driving backward")
  (backward)
  (Thread/sleep 1000)
  (println "Stopping")
  (stop)
  (Thread/sleep 500)
  (println "Turning left")
  (left)
  (Thread/sleep 1000)
  (println "Stopping")
  (stop)
  (Thread/sleep 500)
  (println "Turning right")
  (right)
  (Thread/sleep 1000)
  (.shutdown pi4j))

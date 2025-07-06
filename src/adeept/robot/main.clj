(ns adeept.robot.main
  (:require
   [adeept.robot.system :as system]
   [adeept.peripherals.motor :as motor]
   [adeept.peripherals.ultrasound :as ultrasound]))

(defn ^:exec main
  "Entry point for the robot control app"
  [_]
  (let [sys (system/create-system)]
    (print "Measuring distance to obstacle... ")
    (println
     (ultrasound/measure (:ultrasound-sensor sys)) "cm")

    (println "Driving forward")
    (motor/drive!
     (:left-motor sys)
     (:right-motor sys)
     :forward)

    (Thread/sleep 1000)

    (println "Stopping")
    (motor/stop-all! [(:left-motor sys)
                      (:right-motor sys)])

    (print "Measuring distance to obstacle... ")
    (println
     (ultrasound/measure (:ultrasound-sensor sys)) "cm")

    (Thread/sleep 250)

    (println "Driving backward")
    (motor/drive!
     (:left-motor sys)
     (:right-motor sys)
     :backward)

    (Thread/sleep 1000)

    (println "Stopping")
    (motor/stop-all! [(:left-motor sys)
                      (:right-motor sys)])

    (print "Measuring distance to obstacle... ")
    (println
     (ultrasound/measure (:ultrasound-sensor sys)) "cm")

    (Thread/sleep 250)

    (println "Turning left")
    (motor/drive!
     (:left-motor sys)
     (:right-motor sys)
     :left)

    (Thread/sleep 1000)

    (println "Stopping")
    (motor/stop-all! [(:left-motor sys)
                      (:right-motor sys)])

    (print "Measuring distance to obstacle... ")
    (println
     (ultrasound/measure (:ultrasound-sensor sys)) "cm")

    (Thread/sleep 250)

    (println "Turning right")
    (motor/drive!
     (:left-motor sys)
     (:right-motor sys)
     :right)

    (Thread/sleep 1000)

    (println "Stopping")
    (motor/stop-all! [(:left-motor sys)
                      (:right-motor sys)])

    (print "Measuring distance to obstacle... ")
    (println
     (ultrasound/measure (:ultrasound-sensor sys)) "cm")

    (system/shutdown! sys)))

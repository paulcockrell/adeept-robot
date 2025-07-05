(ns adeept.robot.main
  (:require [adeept.robot.motor :as motor]))

(defonce motor-a-en1 4)
(defonce motor-a-in1 26)
(defonce motor-a-in2 21)

(defonce motor-b-en1 17)
(defonce motor-b-in1 27)
(defonce motor-b-in2 18)

(defn ^:exec main 
  "Entry point for the robot control app"
  [_]
  (let [left-motor (motor/create-motor "LEFT" motor-a-en1 motor-a-in1 motor-a-in2)
        right-motor (motor/create-motor "RIGHT" motor-b-en1 motor-b-in1 motor-b-in2)]

    (println "Driving forward")
    (motor/drive! left-motor right-motor :forward)
    (Thread/sleep 1000)

    (println "Stopping")
    (motor/stop-all! [left-motor right-motor])
    (Thread/sleep 250)

    (println "Driving backward")
    (motor/drive! left-motor right-motor :backward)
    (Thread/sleep 1000)

    (println "Stopping")
    (motor/stop-all! [left-motor right-motor])
    (Thread/sleep 250)

    (println "Turning left")
    (motor/drive! left-motor right-motor :left)
    (Thread/sleep 1000)

    (println "Stopping")
    (motor/stop-all! [left-motor right-motor])
    (Thread/sleep 250)

    (println "Turning right")
    (motor/drive! left-motor right-motor :right)
    (Thread/sleep 1000)))

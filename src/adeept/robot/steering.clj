(ns adeept.robot.steering
  (:require [adeept.peripherals.ultrasound :as ultrasound]
            [adeept.peripherals.motor :as motor]))

(defn drive [system] 
  (println "Drive")
  (motor/drive!
   (:left-motor system)
   (:right-motor system)
   :forward)

  (Thread/sleep 1000))


(defn stop [system] 
  (println "Stopping")
  (motor/stop-all! [(:left-motor system)
                    (:right-motor system)])
  (Thread/sleep 100))

(defn turn-left [system] 
  (println "Turning left")

  (motor/drive!
   (:left-motor system)
   (:right-motor system)
   :left)

  (Thread/sleep 1000)

  (stop system))

(defn start-behavior-loop
  "Spawns a background loop that reads ultrasound and drives motors.
   Options:
   - :system -> system map of initialised sensors
   - :threshold -> cm distance to consider 'too close'
   - :interval -> ms between reads (default 200)
   Returns a stop-fn to end the thread."
  [{:keys [system threshold interval]}]
  (let [running (atom true)
        thread  (Thread.
                 (fn []
                   (while @running

                     (let [dist (ultrasound/measure (:ultrasound-sensor system))]
                       (println "Distance:" dist "cm")
                       (cond
                         (neg? dist)
                         (println "Invalid reading.")

                         (< dist threshold)
                         (do
                           (println "Obstacle detected! Turning...")
                           (stop system)
                           (turn-left system))
                         :else
                           (drive system))
                     (Thread/sleep interval)))))]
    (.start thread)
    #(reset! running false)))


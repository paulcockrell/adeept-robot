(ns adeept.robot.main
  (:require
   [adeept.robot.system :as system]
   [adeept.robot.steering :as steering]
   [adeept.peripherals.motor :as motor]
   [adeept.peripherals.ultrasound :as ultrasound]))

(defn ^:exec main 
  [_]
  (let [sys (system/create-system)
        stop-loop (steering/start-behavior-loop
                   {:system sys
                    :threshold 25
                    :interval 200})]

    (println sys)
    ;; Let it run a while...
    (Thread/sleep 20000)

    ;; Stop it cleanly
    (stop-loop)
    (system/shutdown! sys)))

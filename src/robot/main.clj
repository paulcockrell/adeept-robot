(ns robot.main
  (:require
   [robot.system :refer [create-system start-nodes! shutdown!]]))

(defn add-shutdown-hook! [system]
  (.addShutdownHook
   (Runtime/getRuntime)
   (Thread. #(do
               (println "JVM shutting down, cleaning up robot...")
               (shutdown! system)))))

(defn ^:exec main [_]
  (let [system (create-system)]
    (add-shutdown-hook! system)
    (start-nodes! system)
    (println "Robot is live. Press Enter to quit.")
    (read-line)
    (shutdown! system)))

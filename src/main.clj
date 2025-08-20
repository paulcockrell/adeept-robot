(ns main
  (:require
   [robot.main :as robot]
   [web.backend.main :as backend])
  (:gen-class))

;; Keep a ref so we can stop things cleanly
(defonce state (atom {}))

(defn start! []
  ;; Start robot brain (non-blocking)
  (let [robot-system (robot/start!)]
    (backend/start!)
    (reset! state {:robot-system robot-system})
    (println "✅ Robot + Webserver are live on port 3000")))

(defn stop! []
  (when-let [{:keys [robot-system]} @state]
    (robot/stop! robot-system)
    (reset! state {})
    (backend/stop!)
    (println "🛑 Robot + Webserver stopped")))

(defn ^:exec -main [_]
  (start!)
  (println "Press ENTER to shutdown robot.")
  (read-line))

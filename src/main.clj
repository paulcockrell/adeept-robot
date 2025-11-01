(ns main
  (:require
   [robot.main :as robot]
   [web.backend.env :as env]
   [web.backend.main :as web-backend])
  (:gen-class))

;; Keep a ref so we can stop things cleanly
(defonce state (atom {}))

(defn start! []
  ;; Start robot brain (non-blocking)
  (let [robot-system (robot/start!) port (if env/is-rpi? 80 3000)]
    (web-backend/start! port)
    (reset! state {:robot-system robot-system})
    (println "✅ Robot + Webserver are live on port" port)))

(defn stop! []
  (when-let [{:keys [robot-system]} @state]
    (robot/stop! robot-system)
    (reset! state {})
    (web-backend/stop!)
    (println "🛑 Robot + Webserver stopped")))

(defn ^:exec -main [_]
  (start!)
  (println "Press ENTER to shutdown robot.")
  (read-line)
  (stop!))

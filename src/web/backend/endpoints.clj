(ns web.backend.endpoints
  (:require [ring.util.response :as resp]
            [org.httpkit.server :as http]
            [robot.hardware.pi4j.camera :refer [latest-frame]]))

(defn home-handler [_]
  (-> (resp/resource-response "index.html" {:root "public"})
      (resp/content-type "text/html")))

(defn camera-handler [req]
  (http/as-channel req
                   {:on-open (fn [ch]
                               (future
                                 (while true
                                   (when-let [jpg-bytes @latest-frame]
                                     (.write ch (.getBytes "--frame\r\n"))
                                     (.write ch (.getBytes "Content-Type: image/jpeg\r\n\r\n"))
                                     (.write ch jpg-bytes)
                                     (.write ch (.getBytes "\r\n"))
                                     (.flush ch))
                                   (Thread/sleep 100))))
                    :on-close (fn [ch status]
                                (println "Camera channel closed:" ch status))}))

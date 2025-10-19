(ns web.backend.endpoints
  (:require [ring.util.response :as resp]
            [org.httpkit.server :as http]
            [robot.hardware.pi4j.camera :as camera]))

(defn home-handler [_]
  (-> (resp/resource-response "index.html" {:root "public"})
      (resp/content-type "text/html")))

(defn camera-handler [req]
  (http/as-channel req
                   {:on-open (fn [ch]
                ;; Send initial response headers once
                               (http/send! ch {:status 200
                                               :headers {"Content-Type" "multipart/x-mixed-replace; boundary=frame"
                                                         "Cache-Control" "no-cache, no-store, must-revalidate"
                                                         "Pragma" "no-cache"}}
                                           false)
                ;; Stream frames forever
                               (future
                                 (while (http/open? ch)
                                   (when-let [^bytes jpg @camera/latest-frame]
                                     (http/send! ch (str "--frame\r\n"
                                                         "Content-Type: image/jpeg\r\n"
                                                         "Content-Length: " (alength jpg) "\r\n"
                                                         "\r\n")
                                                 false)
                                     (http/send! ch jpg false)
                                     (http/send! ch "\r\n" false))
                                   (Thread/sleep 66))))}))


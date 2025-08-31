(ns robot.hardware.mock.neopixel)

(defn start-daemon! []
  (println "[Mock NeoPixel] Started daemon"))

(defn send-command! [& args]
  (println "[Mock NeoPixel] Sending command" args))

(defn stop-daemon! []
  (println "[Mock NeoPixel] Stopped daemon"))


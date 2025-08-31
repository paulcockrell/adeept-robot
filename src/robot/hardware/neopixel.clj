(ns robot.hardware.neopixel
  (:require [robot.hardware.pi4j.neopixel :as neopixel]
            [robot.hardware.mock.neopixel :as mock-neopixel]
            [robot.env :as env]))

(defn start-daemon! []
  (println "[Mock NeoPixel] Started daemon")

  (if env/is-rpi?
    (neopixel/start-daemon!)
    (mock-neopixel/start-daemon!)))

(defn send-command! [& args]
  (println "[Mock NeoPixel] Sending command")

  (if env/is-rpi?
    (neopixel/send-command! args)
    (mock-neopixel/send-command! args)))

(defn stop-daemon! []
  (println "[Mock NeoPixel] Stopped daemon")

  (if env/is-rpi?
    (neopixel/stop-daemon!)
    (mock-neopixel/stop-daemon!)))


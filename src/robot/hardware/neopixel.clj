(ns robot.hardware.neopixel
  (:require [robot.hardware.pi4j.neopixel :as neopixel]
            [robot.hardware.mock.neopixel :as mock-neopixel]))

;; TODO move in to util
(def ^:private running-on-pi? (System/getenv "IS_RPI"))

(defn start-daemon! []
  (println "[Mock NeoPixel] Started daemon")

  (if running-on-pi?
    (neopixel/start-daemon!)
    (mock-neopixel/start-daemon!)))

(defn send-command! [& args]
  (println "[Mock NeoPixel] Sending command")

  (if running-on-pi?
    (neopixel/send-command! args)
    (mock-neopixel/send-command! args)))

(defn stop-daemon! []
  (println "[Mock NeoPixel] Stopped daemon")

  (if running-on-pi?
    (neopixel/stop-daemon!)
    (mock-neopixel/stop-daemon!)))


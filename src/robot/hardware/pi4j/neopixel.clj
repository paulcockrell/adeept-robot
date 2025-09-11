(ns robot.hardware.pi4j.neopixel
  (:require [babashka.process :refer [process]]
            [clojure.string :as str]
            [clojure.java.io :as io]))

(defonce led-proc (atom nil))
(defonce led-writer (atom nil))

(defn start-daemon! []
  (when-not (and @led-proc @led-writer)
    (let [proc (process ["python3" "src/robot/hardware/pi4j/neopixel_daemon.py"]
                        {:in :pipe
                         :out :inherit
                         :err :inherit})
          writer (io/writer (:in proc))]
      (reset! led-proc proc)
      (reset! led-writer writer)
      (println "Started NeoPixel daemon"))))

(defn send-command! [& args]
  (when-let [writer @led-writer]
    (let [line (str (str/join " " args) "\n")]
      (.write writer line)
      (.flush writer)))) ; don't close here! keep it open for more commands

(defn stop-daemon! []
  (send-command! "set" 0 0 0) ; off
  (send-command! "exit")
  (when-let [writer @led-writer]
    (.close writer) ; 🔒 we close here when we’re done
    (reset! led-writer nil))
  (when-let [proc @led-proc]
    (.waitFor proc)
    (reset! led-proc nil)
    (println "Stopped NeoPixel daemon")))


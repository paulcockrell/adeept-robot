(ns peripherals.neopixel
  (:require [babashka.process :refer [process]]
            [clojure.java.io :as io]))

(defn send-command!
  "Starts a NeoPixel Python script and sends RGB values to its stdin."
  [& args]
  (let [proc (process ["python3" "src/peripherals/neopixel_daemon.py"]
                      {:in :pipe}) ; gives us a writer
        writer (io/writer (:in proc))] ; get the stdin writer
    (binding [*out* writer]
      (println (str (clojure.string/join " " args) "\n"))
      (flush))
    (Thread/sleep 100) ; allow Python to read it
    (.close writer)))


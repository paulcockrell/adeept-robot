(ns adeept.peripherals.led
  (:require [clojure.java.shell :refer [sh]])
  (:import
   com.pi4j.io.gpio.digital.DigitalOutput
   com.pi4j.io.gpio.digital.DigitalState))

(def default-config
  {:led-count 16
   :led-pin 12
   :led-freq-hz 800000
   :led-dma 10
   :led-brightness 255
   :led-invert false
   :led-channel 0})

(defonce state (atom {:light-mode :none
                      :breath-color [0 0 0]
                      :breath-steps 10
                      :running true}))

(defn- digital-out [pi4j id pin]
  (let [provider (.provider pi4j "pigpio-digital-output")
        config (-> (DigitalOutput/newConfigBuilder pi4j)
                   (.id id)
                   (.name id)
                   (.address (int pin))
                   (.shutdown DigitalState/LOW)
                   (.initial DigitalState/LOW)
                   (.build))]
    (.create provider config)))

;; Replace with actual GPIO/LED initialization logic
(defn init-strip []
  ;; Stub — replace with interop to your NeoPixel setup
  (println "Initialized NeoPixel strip"))

(defn set-color [r g b]
  ;; Stub — replace with NeoPixel pixel set logic
  (println "Set color:" r g b))

(defn set-some-color [r g b ids]
  ;; Stub — set specific pixel IDs to color
  (println "Set some color:" r g b "at IDs:" ids))

(defn gpio-output [pin value]
  ;; Stub — Pi4J GPIO call or equivalent
  (println "GPIO" pin (if (= value 1) "HIGH" "LOW")))

(defn pause []
  (swap! state assoc :light-mode :none)
  (set-color 0 0 0))

(defn resume []
  (swap! state assoc :running true))

(defn police-loop []
  (dotimes [_ 3]
    (set-some-color 0 0 255 (range 13))
    (Thread/sleep 50)
    (set-some-color 0 0 0 (range 13))
    (Thread/sleep 50))
  (Thread/sleep 100)
  (dotimes [_ 3]
    (set-some-color 255 0 0 (range 13))
    (Thread/sleep 50)
    (set-some-color 0 0 0 (range 13))
    (Thread/sleep 50))
  (Thread/sleep 100))

(defn breath-loop [r g b steps]
  (doseq [i (range steps)]
    (when-not (= (:light-mode @state) :breath) (reduced nil))
    (let [scale (/ i steps)]
      (set-color (* r scale) (* g scale) (* b scale))
      (Thread/sleep 30)))
  (doseq [i (range steps)]
    (when-not (= (:light-mode @state) :breath) (reduced nil))
    (let [scale (/ i steps)]
      (set-color (- r (* r scale)) (- g (* g scale)) (- b (* b scale)))
      (Thread/sleep 30))))

(defn set-mode [mode]
  (swap! state assoc :light-mode mode)
  (resume))

(defn breath [r g b]
  (swap! state assoc
         :breath-color [r g b]
         :light-mode :breath)
  (resume))

(defn front-light [switch]
  (case switch
    "on" (do (gpio-output 6 1) (gpio-output 13 1))
    "off" (do (gpio-output 6 0) (gpio-output 13 0))))

(defn switch [port status]
  (let [pin (case port 1 5 2 6 3 13)]
    (when pin
      (gpio-output pin status))))

(defn set-all-off []
  (doseq [port [1 2 3]]
    (switch port 0)))

(defn head-light [switch]
  (gpio-output 5 (if (= switch "on") 1 0)))

(defn light-change-loop []
  (loop []
    (when (:running @state)
      (case (:light-mode @state)
        :none (pause)
        :police (police-loop)
        :breath (let [[r g b] (:breath-color @state)
                      steps (:breath-steps @state)]
                  (breath-loop r g b steps)))
      (recur))))

(defn start []
  (init-strip)
  (future (light-change-loop)))

;; Example usage
(comment
  (start)
  (breath 70 70 255)
  (Thread/sleep 15000)
  (pause)
  (front-light "off")
  (Thread/sleep 2000)
  (set-mode :police))


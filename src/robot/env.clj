(ns robot.env)

(defonce is-rpi?
  (= true (System/getenv "IS_RPI")))

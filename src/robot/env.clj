(ns robot.env)

(defonce is-rpi?
  (Boolean/parseBoolean (System/getenv "IS_RPI")))

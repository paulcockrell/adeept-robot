(ns web.backend.env)

(defonce is-rpi?
  (Boolean/parseBoolean (System/getenv "IS_RPI")))

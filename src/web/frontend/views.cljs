(ns web.frontend.views
  (:require [web.frontend.views.not-found :as not-found]
            [web.frontend.views.home :as home]
            [web.frontend.views.mode-manual :as mode-manual]
            [web.frontend.views.mode-sentient :as mode-sentient]
            [web.frontend.views.mode-programmable :as mode-programmable]
            [web.frontend.views.settings :as settings]
            [web.frontend.views.help :as help]
            [web.frontend.views.about :as about]))

(defmulti pages identity)

;; Error pages
(defmethod pages :default [_] [not-found/not-found])
(defmethod pages nil [_] [not-found/not-found])

;; Pages
(defmethod pages :home [] [home/home])
(defmethod pages :mode-manual [] [mode-manual/mode-manual])
(defmethod pages :mode-sentient [] [mode-sentient/mode-sentient])
(defmethod pages :mode-programmable [] [mode-programmable/mode-programmable])
(defmethod pages :settings [] [settings/settings])
(defmethod pages :help [] [help/help])
(defmethod pages :about [] [about/about])

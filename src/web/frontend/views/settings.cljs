(ns web.frontend.views.settings
  (:require [web.frontend.layout.layout :as layout]))

(defn settings []
  [layout/layout
   [:div "Settings"]])

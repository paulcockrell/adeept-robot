(ns web.frontend.views.about
  (:require [web.frontend.layout.layout :as layout]))

(defn about []
  [layout/layout
   [:div "About"]])

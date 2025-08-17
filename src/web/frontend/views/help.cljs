(ns web.frontend.views.help
  (:require [web.frontend.layout.layout :as layout]))

(defn help []
  [layout/layout
   [:div "Help"]])

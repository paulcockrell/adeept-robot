(ns web.frontend.views.not-found
  (:require [web.frontend.layout.layout :as layout]))

(defn not-found []
  [layout/layout
   [:div "Error: page not found"]])

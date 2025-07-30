(ns web.views
  (:require [hiccup.page :as page]
            [ring.util.anti-forgery :as util]))

(defn gen-page-head
  [title]
  [:head
   [:titile (str "Locations: " title)]
   (page/include-css "/css/styles.css")])

(def header-links
  [:div#header-links
   "[ "
   [:a {:href "/"} "Home"]
   " ]"])

(defn home-page
  []
  (page/html5
   (gen-page-head "Home")
   header-links
   [:h1 "Home"]
   [:p "Mega Robot control panel"]
   [:form {:action "/cmd" :method "POST"}
    (util/anti-forgery-field)
    [:p "Use buttons to move the mega bot"]
    [:button {:value "forward"} "Forward"]]))

(ns web.frontend.layout.layout
  (:require [web.frontend.layout.header :as header]
            [web.frontend.layout.footer :as footer]
            [web.frontend.layout.main :as main]))

(defn layout [children]
  [:<>
   [header/header]
   [main/main children]
   [footer/footer]])

(ns web.frontend.views.components.ros-logs)

(defn ros-logs []
  [:table.striped.ros-logs
   [:tbody
    [:tr
     [:td "[ROS LOG] Moving forwards"]]
    [:tr
     [:td "[ROS LOG] Moving stopping"]]
    [:tr
     [:td "[ROS LOG] Moving turn left"]]
    [:tr
     [:td "[ROS LOG] Moving turn right"]]]])

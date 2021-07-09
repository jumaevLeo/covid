import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Science from "@/pages/Science.vue";
import Login from "@/pages/auth/Login";
import Teacher from "../pages/Teacher";
import Pupil from "../pages/Pupil";
import Payment from "../pages/Payment";
import Rating from "../pages/Rating";
import Result from "../pages/Result";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "science",
        name: "Science",
        component: Science
      },
      {
        path: "teacher",
        name: "Teacher",
        component: Teacher
      },
      {
        path: "pupil",
        name: "Pupil",
        component: Pupil
      },
      {
        path: "payment",
        name: "Payment",
        component: Payment
      },
      {
        path: "rating",
        name: "Rating",
        component: Rating
      },
      {
        path: "result",
        name: "Result",
        component: Result
      }
    ]
  },
  { path: "/auth/login", component: Login },
  { path: "/logout", component: Login }
];

export default routes;

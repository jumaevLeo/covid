import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Catalogs from "@/pages/Catalogs.vue";
import Login from "@/pages/auth/Login";
import Orders from "../pages/Orders";
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
        path: "catalogs",
        name: "Catalogs",
        component: Catalogs
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders
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

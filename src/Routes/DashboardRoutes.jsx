import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import Orders from "../Dashboard/Orders/Orders";
import Sales from '../Dashboard/Sales/Sales';
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";


const dashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "",
      element: <DashboardHome />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "reports/sales",
      element: <Sales />,
    },
    // Add more routes as needed
  ],
};

export default dashboardRoutes;

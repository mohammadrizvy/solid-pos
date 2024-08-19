import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import DashboardLayoutBasic from "../Layout/DashboardLayout/DashboardLayout";
import dashboardRoutes from "./DashboardRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/mensCollection",
      //   element: <MensCollection></MensCollection>,
      // },
      // {
      //   path: "/womensCollection",
      //   element: <WomensCollection></WomensCollection>,
      // },
      // {
      //   path: "/buy/:id",
      //   element: <BuyPage></BuyPage>,
      // },
      // {
      //   path: "/carts",
      //   element: <Carts></Carts>,
      // },
      // {
      //   path: "/product-details/:id",
      //   element: <ProductDetails></ProductDetails>,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:7000/${params.id}`),
      // },
      // {
      //   path: "/check-out",
      //   element: <PrivateRoute>
      //     <CheckOut/>
      //   </PrivateRoute> ,
      // },
      // {
      //   path: "/discount",
      //   element: (
      //     <>
      //       <Discount></Discount>
      //     </>
      //   ),
      // },
      // {
      //   path: "profile",
      //   element: <ProfileLayout/>,
      //   children: [
      //     {
      //       path: "",
      //       element: <UserProfile></UserProfile>,
      //     },
      //     {
      //       path: "orders",
      //       element: <Orders></Orders>,
      //     },
      //     {
      //       path: "payment-history",
      //       element: <PaymentHistory></PaymentHistory>,
      //     },
      //   ],
      // },
    ],
  },
  dashboardRoutes
]);

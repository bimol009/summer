import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "./../Pages/SignUp/Register";
import AllInstructorPage from "./../Pages/AllInstructorPage/AllInstructorPage";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import Dashboard from "../Layout/Dashboard";

import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import MySelectedClasses from "../Pages/DashBoard/MySelectedClasses/MySelectedClasses";
import EnrollClass from "../Pages/DashBoard/EnrollClass/EnrollClass";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import Payment from "../Pages/DashBoard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "all",
        element: <AllClasses />,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allinstructors",
        element: <AllInstructorPage></AllInstructorPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
    
        <PrivateRoutes><Dashboard /></PrivateRoutes>
   
    ),
    children: [
      {
        path:"userhome",
        element:<UserHome></UserHome>
      },
      {
        path:"mycart",
        element:<MyCart></MyCart>
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path:"selectclass",
        element:<MySelectedClasses></MySelectedClasses>
      },
      {
        path:"enrollclass",
        element:<EnrollClass></EnrollClass>
      },
      //Admin home
      {
        path: "users",
        element: <AdminRoutes><AllUsers /></AdminRoutes>,
      },
      {
        path: "adminhome",
        element: <AdminRoutes><AdminHome/></AdminRoutes>,
      },
     
      
    ],
  },
]);

export default router;

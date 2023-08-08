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
import EnrollClass from "../Pages/DashBoard/EnrollClass/EnrollClass";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import Payment from './../Pages/DashBoard/Payment/Payment';
import UpdateClass from "../Pages/DashBoard/UpdateClass/UpdateClass";
import InstructorRoutes from "./InstructorRoutes";
import PaymentDetails from "../Pages/DashBoard/PaymnetHistory/PaymentDetails";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import UpdateInstaClass from "../Pages/DashBoard/UpdateInstaClass/UpdateInstaClass";



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
      //user er route
      {
        path:"userhome",
        element:<UserHome></UserHome>
      },
      {
        path:"selectclass",
        element:<MyCart></MyCart>
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path:"enrollclass",
        element:<EnrollClass></EnrollClass>
      },
      {
        path:"details",
        element:<PaymentDetails></PaymentDetails>
      },
    
     
      //Admin home
      {
        path: "users",
        element: <AdminRoutes><AllUsers /></AdminRoutes>,
      },
    
      {
        path: "manage",
        element: <AdminRoutes><ManageItem /></AdminRoutes>,
      },
      {
        path: "updateclass/:id",
        element: <PrivateRoutes><UpdateInstaClass /></PrivateRoutes>,
      },
      {
        path: "adminhome",
        element: <AdminRoutes><AdminHome/></AdminRoutes>,
      },
     //instructor routes
     {
      path:"addclass",
      element:<InstructorRoutes><UpdateClass></UpdateClass></InstructorRoutes>
     },
     
      
    ],
  },
]);

export default router;

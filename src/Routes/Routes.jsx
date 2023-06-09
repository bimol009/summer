import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "./../Pages/SignUp/Register";
import AllInstructorPage from './../Pages/AllInstructorPage/AllInstructorPage';
import AllClasses from "../Pages/AllClasses/AllClasses";




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
        path:'all',
        element:<AllClasses/>
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
]);

export default router;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Nav/Navbar";


const Main = () => {
  // const location = useLocation();

  // const noHeaderFooter = location.pathname.includes("*");
  return (
    <div>
      {/* {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>} */}
      <Navbar></Navbar>
      <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default Main;

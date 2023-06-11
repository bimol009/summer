import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();


  return (
    <div className="drawer lg:drawer-open py-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
       <Outlet/>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content bg-[#dad3c8]">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> ADMIN HOME
                </NavLink>
              </li>
              {/* Additional menu items for admin */}
              <li>
                <NavLink to="/dashboard/history">MANAGE BOOKINGS</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">ALL USERS</NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome /> User Instructor
                </NavLink>
              </li>
              {/* Additional menu items for instructors */}
              <li>
                {/* <NavLink to="/dashboard/mycart">
                  <FaShoppingCart /> My Cart
                  <span className="badge badge-secondary">
                    {cart?.length} || 0
                  </span>
                </NavLink> */}
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              {/* Additional menu items for regular users */}
              <li>
                <NavLink to="">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* Common menu items */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink>Secret</NavLink>
          </li>
          <li>
            <NavLink>Order</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

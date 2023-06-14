import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open py-20">
      <Helmet>
        <title>Academy of Dance | Dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
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
              <Fade cascade>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome /> ADMIN HOME
                  </NavLink>
                </li>
              </Fade>

              <li>
                <NavLink to="/dashboard/manage">Manage Classes</NavLink>
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

              <li>
                <NavLink to="/dashboard/addclass">Update A Item</NavLink>
              </li>
            </>
          ) : (
            <>
              <Fade cascade>
                {" "}
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome /> User Home
                  </NavLink>
                </li>
              </Fade>
              <Fade damping>
                {" "}
                <li>
                  <NavLink to="/dashboard/selectclass">
                    <FaHome /> <h2>Selected Class</h2>
                  </NavLink>
                </li>
              </Fade>
              <Fade damping>
                <li>
                  <NavLink to="/dashboard/enrollclass">My Enroll</NavLink>
                </li>
              </Fade>
              <Fade damping>
                {" "}
                <li>
                  <NavLink to="/dashboard/details">
                    <FaWallet /> Payment History
                  </NavLink>
                </li>
              </Fade>
            </>
          )}

          {/* Common menu items */}
          <div className="divider"></div>
          <Fade cascade>
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
          </Fade>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useContext } from "react";
import { set } from "react-hook-form";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOutEmail, darkTheme, setDarkTheme } = useAuth();
  const location = useLocation();
  console.log(user);

  const handleLogOut = () => {
    logOutEmail()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/allinstructors">Instructor</Link>
      </li>

      <li>
        <Link to="/all">Classes</Link>
      </li>

      <li>
        <Link to="/">Home</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          {user && (
            <img
              className="profile-img h-[50px] w-[50px] rounded-full mr-2"
              src={user?.photoURL}
              alt=""
              title={user?.displayName}
            />
          )}
          {/* {user && <p className="text-white">{user.displayName}</p>} */}

          <button onClick={handleLogOut}>Logout</button>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`${
        darkTheme
          ? "dark-theme"
          : location.pathname === "/"
          ? "white-theme"
          : "dark-theme"
      }`}
    >
      <div className="navbar fixed z-10 bg-opacity-30 pl-5 pr-5 text-white  bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img
              className="h-[60px] w-[60px]"
              src="https://i.ibb.co/Db9KTKD/feminin-dance-logo-727263-7-removebg-preview.png"
              alt=""
            />
            <Link className="btn btn-ghost hidden lg:flex normal-case text-xl">
              Dance Academy
            </Link>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      
        <div className="navbar-end">
          <a className="btn btn-square btn-outline text-white">  <div>
          {location.pathname === "/" && (
            <button
              onClick={() => {
                setDarkTheme((theme) => !theme);
              }}
            >
              {darkTheme ? <h1 className="text-3xl"><FaSun/></h1> : <h1 className="text-3xl"><FaMoon/></h1>}
            </button>
          )}
        </div></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

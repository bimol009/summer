import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOutEmail } = useAuth();
  console.log(user)

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
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl bg-black ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="h-[50px] w-[50px]" src="https://i.ibb.co/kDG45Zv/desktop-wallpaper-dance-high-quality-logo-of-dance-academy-background-dance-studio-removebg-preview.png" alt="" />
          <Link className="btn btn-ghost normal-case text-xl">Academy Of Dance</Link>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}       
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Dance</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

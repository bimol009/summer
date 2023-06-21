import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTile/SectionTitle";
import useAuth from "../../hooks/useAuth";
import UseMenu from "../../hooks/UseMenu";

const PopularClassesSection = () => {
  const [menu] = UseMenu();
  const { user,darkTheme, setDarkTheme } = useAuth();

  const navigate = useNavigate();
  const [enrollStatus, setEnrollStatus] = useState({});
  menu?.sort((a, b) => b.enrolledStudent - a.enrolledStudent)

  const handleEnroll = (item) => {
    if (user && user.email) {
      const menuItem = {
        itemId: item._id,
        email: user.email,
        name: item.name,
        price: item.price,
        image: item.picture,
        category: item.category,
        instructor: item.instructor,
        seat: item.available_seats,
        enStu: item.enrolledStudent
      };

      

      fetch("https://summer-camp-server-livid.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(menuItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Added to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
            setEnrollStatus((prevState) => ({
              ...prevState,
              [item._id]: true,
            }));
          }
        })
        .catch((error) => {
       
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "Are you sure you want to enroll? Please login first.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div> 
      <div className="py-10">
        <SectionTitle subHeading={"Classes Section"} heading={"Popular Class"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-4">
        {menu.slice(0,6).map((ins) => (
          <div
            key={ins._id}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              ins.available_seats === 0 ? "bg-red-500" : ""
            }`}
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={ins.picture}
              alt="Card Image"
            />
            <div >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Name: {ins.name}
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat erat vitae libero tristique ullamcorper.
              </p>
              <p className="text-3xl text-gray-600">Category: {ins.category}</p>
              <p className="text-3xl text-gray-600">Price: {ins.price}</p>
              <p className="text-3xl text-gray-600">enroll: {ins.enrolledStudent}</p>
              <button
                className="btn btn-primary my-2"
                onClick={() => handleEnroll(ins)}
                disabled={enrollStatus[ins._id] || ins.available_seats === 0}
              >
                {enrollStatus[ins._id] ? "Pending" : "Enroll"}
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClassesSection;

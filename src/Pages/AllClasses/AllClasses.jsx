import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTile/SectionTitle";
import UseMenu from "../../hooks/UseMenu";
import useAuth from "./../../hooks/useAuth";

const AllClasses = () => {
  const [menu] = UseMenu();

  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrollStatus, setEnrollStatus] = useState({});

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
    <div className="py-10">
    <Helmet>
      <title>Academy of Dance | All Popular Class</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <SectionTitle subHeading={'Classes Section'} heading={'All Popular Class'} />

    <div className="px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((ins) => (
          <div
            key={ins._id}
            className={`rounded-lg shadow-lg bg-white text-gray-800`}
          >
            <div className="relative">
              <img
                className="w-full h-56 object-cover object-center rounded-t-lg"
                src={ins.picture}
                alt="Card Image"
              />
              {!ins.available_seats && (
                <span className="absolute top-0 right-0 p-2 text-xs font-semibold text-white bg-red-600 rounded-bl-lg">
                  Sold Out
                </span>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{ins.name}</h2>
              <p className="text-gray-600 mb-3">
                {ins.description}
              </p>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm text-gray-600">Instructor: {ins.instructor}</p>
                  <p className="text-sm text-gray-600">Available Seats: {ins.available_seats}</p>
                  <p className="text-sm text-gray-600">Category: {ins.category}</p>
                  <p className="text-sm text-gray-600">Price: ${ins.price}</p>
                </div>
                <button
                  className={`px-4 py-2 rounded-full ${
                    enrollStatus[ins._id] || ins.available_seats === 0
                      ? 'bg-gray-300 cursor-not-allowed text-gray-600'
                      : 'bg-purple-500 hover:bg-purple-600 text-white transform transition-transform duration-300 ease-in-out hover:scale-105'
                  }`}
                  onClick={() => handleEnroll(ins)}
                  disabled={enrollStatus[ins._id] || ins.available_seats === 0}
                >
                  {enrollStatus[ins._id] ? 'Pending' : 'Enroll Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default AllClasses;

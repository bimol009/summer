import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useInstaFind from "./../../../hooks/useInstaFind";

const EnrollClass = () => {
  const [instaFind, refetch] = useInstaFind();
  const handleDeleteOne = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/payment/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Academy of Dance | All Enroll</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2>enroll class</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {instaFind.map((insta, index) => (
              <tr key={insta._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{insta.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {insta.price}
                  </span>
                </td>

                <button
                  onClick={() => handleDeleteOne(insta)}
                  className="btn btn-ghost btn-md bg-red-600 text-white"
                >
                  <FaTrashAlt />
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollClass;

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";




const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(res)
    return res.data;
  });

  const [selectedRole, setSelectedRole] = useState("");

  const handleMakeRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleMakeAdmin = (user) => {
    const role = user.role === "admin" ? "instructor" : "admin";

    fetch(`http://localhost:5000/users/${role}/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now a ${role}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteOne = (user) => {
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
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
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
    <div className="py-20">
      <h2>All Users {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <>
                      <button
                        className={`btn btn-toggle ${
                          selectedRole === "admin" ? "active" : ""
                        }`}
                        onClick={() => handleMakeRoleChange("admin")}
                      >
                        Admin
                      </button>
                      <button
                        className={`btn btn-toggle ${
                          selectedRole === "instructor" ? "active" : ""
                        }`}
                        onClick={() => handleMakeRoleChange("instructor")}
                      >
                        Instructor
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost btn-md bg-orange-500 text-white"
                  >
                    <FaUserShield />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteOne(user)}
                    className="btn btn-ghost btn-md bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table with visual elements */}
    </div>
  );
};

export default AllUsers;

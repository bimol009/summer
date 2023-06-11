import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin(); // Add the isAdmin hook
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(res);
    return res.data;
  });

  const [showChangeRole, setShowChangeRole] = useState(false);

  const handleRoleChange = (user, updatedRole) => {
    if (isAdmin) {
      fetch(`http://localhost:5000/users/${updatedRole}/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is now ${updatedRole}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  const handleDeleteOne = (user) => {
    if (isAdmin) {
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
          fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    }
  };

  const roleToggoleButton = (user) => {
    if (isAdmin && showChangeRole) {
      const updatedRole = user.role === "admin" ? "instructor" : "admin";
      return (
        <button
          onClick={() => handleRoleChange(user, updatedRole)}
          className={`btn btn-ghost btn-md ${
            user.role === "admin"
              ? "bg-orange-500 text-white"
              : "bg-gray-500 text-gray-300"
          }`}
        >
          {updatedRole}
        </button>
      );
    }
  };

  return (
    <div>
      <h2>All Users {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>Role</th>
              {isAdmin && <th>Change Role</th>}
              {isAdmin && <th>ACTION</th>}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
                </td>
                <td>
                  {isAdmin && (
                    <button
                      onClick={() => setShowChangeRole(!showChangeRole)}
                      className="btn btn-ghost btn-md bg-blue-600 text-white"
                    >
                      Change Role
                    </button>
                  )}
                  {roleToggoleButton(user)}
                </td>
                <td>
                  {isAdmin && (
                    <button
                      onClick={() => handleDeleteOne(user)}
                      className="btn btn-ghost btn-md bg-red-600 text-white"
                      disabled={!isAdmin}
                    >
                      <FaTrashAlt />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

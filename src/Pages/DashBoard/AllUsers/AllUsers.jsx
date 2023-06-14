import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");

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

  const roleToggleButton = (user) => {
    if (isAdmin && showChangeRole ) {
      const roles = ["admin", "student", "instructor"];
      const currentRole = user?.role || "";

      return (
        <div className="flex justify-center">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleChange(user, role)}
              className={`${
                currentRole === role
                  ? "btn btn-success text-white font-bold"
                  : "bg-gray-300 text-gray-700 font-bold"
              } mx-1 px-4 py-2 rounded-md`}
              disabled={currentRole === "admin"}
            >
              {role}
            </button>
          ))}
        </div>
      );
    }
  };



  return (
    <div>
      <button className="btn btn-outline"><h2>When you are admin other 2 button is disable</h2></button>
      <h2>All Users {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              {isAdmin && <th>Change Role</th>}
              {isAdmin && <th>Action</th>}
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                </td>
                <td>
                  {isAdmin && (
                    <button
                      onClick={() => setShowChangeRole(!showChangeRole)}
                      className="btn btn-outline  font-bold "
                  
                    >
                      {showChangeRole ? "Hide Roles" : "Role Change"}
                    </button>
                  )}
                  {roleToggleButton(user)}
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


import Swal from "sweetalert2";

import useMenuItem from "../../../hooks/useMenuItem";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menuItem, loading, refetch] = useMenuItem();


  

  const handleAccept = (item) => {
    fetch(`https://summer-camp-server-bimol009.vercel.app/menuItem/${item._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
     else if (data.result.insertedId) {
        refetch();
        Swal.fire("inserted Fire!", "Your file has been deleted.", "success");
      }
    });
  };
  

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
        fetch(`https://summer-camp-server-bimol009.vercel.app/menuItem/${item._id}`, {
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
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>

            <th>Seat</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Update</th>
            <th>Accept</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {menuItem.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.picture}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>

              <td>
                <span className="badge badge-ghost badge-sm">
                  {item.available_seats}
                </span>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">{item.price}</span>
              </td>

              <td>
                <button
                  onClick={() => handleDeleteOne(item)}
                  className="btn btn-ghost btn-md bg-red-600 text-white"
                >
                  <FaTrashAlt />
                </button>
              </td>
              <td>
                <Link to={`/dashboard/updateclass/${item._id}`}>
                  <button
                    //   onClick={() => handleUpdate(item)}
                    className="btn btn-ghost btn-md bg-red-600 text-white"
                  >
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleAccept(item)}
                  className="btn btn-ghost btn-md bg-red-600 text-white"
                >
                  Accept
                </button>
              </td>
              <td>
                <button
                  //   onClick={() => handleFeedback(item)}
                  className="btn btn-ghost btn-md bg-red-600 text-white"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageItem;

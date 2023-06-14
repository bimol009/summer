import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import UseMenu from "../../../hooks/UseMenu";

import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UpdateClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const img_hosting_token = import.meta.env.VITE_image_token;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const ing_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(ing_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgFind) => {
        if (imgFind.success) {
          const imgUrl = imgFind.data.display_url;
          const { name, price, available_seats } = data;

          const menuChange = {
            name: name,
            instructor: user?.displayName,
            picture: imgUrl,
            email: user?.email,
            available_seats: available_seats,
            price: parseFloat(price),
          };

          axiosSecure.post("/menuItem", menuChange).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Adeded successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-4">
      <div>
        <Helmet>
          <title>Academy of Dance | Add Class</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <SectionTitle heading={"ADD Class"}></SectionTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              readOnly
              // value={instructorName}
              value={user?.displayName}
              {...register("insName", { required: true, maxLength: 80 })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="text"
              readOnly
              value={user?.email}
              {...register("email", { required: true, maxLength: 80 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Available Seat</span>
          </label>
          <input
            type="number"
            placeholder="Available Seat"
            {...register("available_seats", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full  my-5">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            placeholder="Class Image"
            {...register("image")}
          />
        </div>

        <button className="btn btn-primary btn-block">Add Class</button>
      </form>
    </div>
  );
};

export default UpdateClass;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTile/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UpdateInstaClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();

  const { data: item = {}, refetch } = useQuery({
    queryKey: ['menuItem', id],
    queryFn: async () => {
      const res = await axiosSecure(`/menuItem/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  const img_hosting_token = import.meta.env.VITE_image_token;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('image', data.image[0]);
      const imgResponse = await fetch(img_hosting_url, {
        method: 'POST',
        body: formData,
      });
      const imgFind = await imgResponse.json();

      if (imgFind.success) {
        const imgUrl = imgFind.data.display_url;
        const { name, price, available_seats } = data;

        const menuChange = {
          name: name,
          instructor: user?.displayName,
          picture: imgUrl,
          email: user?.email,
          available_seats: parseFloat(available_seats),
          price: parseFloat(price),
        };

        const response = await axiosSecure.patch(`/menuItem/${id}`, menuChange);

        if (response.data && response.data.modifiedCount > 0) {
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Updated successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  return (
    <div className="w-full px-4">
      <div>
        <SectionTitle heading={'Update Class'}></SectionTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register('name', { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              readOnly
              value={user?.displayName}
              {...register('insName', { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
            {errors.insName && <span className="text-red-500">This field is required</span>}
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="text"
              readOnly
              value={user?.email}
              {...register('email', { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register('price', { required: true })}
              className="input input-bordered w-full"
            />
            {errors.price && <span className="text-red-500">This field is required</span>}
          </div>
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Available Seat</span>
          </label>
          <input
            type="number"
            placeholder="Available Seat"
            {...register('available_seats', { required: true })}
            className="input input-bordered w-full"
          />
          {errors.available_seats && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="form-control w-full my-5">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            placeholder="Class Image"
            {...register('image', { required: true })}
          />
          {errors.image && <span className="text-red-500">This field is required</span>}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Update Class
        </button>
      </form>
    </div>
  );
};

export default UpdateInstaClass;

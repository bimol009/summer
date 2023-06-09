import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUserEmailPass, createdProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    createUserEmailPass(data.email, data.password).then((result) => {
      const loggeUser = result.user;
      console.log(loggeUser);

      createdProfile(data.name, data.photoURL)
        .then(() => {
          const savedUser = { name: data.name, email: data.email,photoURL: data.photoURL };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Sign up Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
    if (data.password !== data.confirm) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "The password and confirm password fields must match.",
      });
      return;
    }

    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Academy of dance | Register</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Register now!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <p className="text-red-600">This Name field is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.photoURL && (
              <p className="text-red-600">This Photo field is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-600">This email field is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", {
                  required: true,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="absolute top-0 right-0 mt-2 mr-2 text-sm text-gray-500 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              <label className="text-gray-700">Show Password</label>
            </div>
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Minimum six characters, at least one uppercase letter, one
                lowercase letter, and one number
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Password is required and must be at least 6 characters long
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm"
                {...register("confirm", { required: true })}
                placeholder="Confirm Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="absolute top-0 right-0 mt-2 mr-2 text-sm text-gray-500 focus:outline-none"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              <label className="text-gray-700">Show Password</label>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <div>
              Already have an account?
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

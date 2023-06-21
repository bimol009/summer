
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";
// import useInstructor from "../../../hooks/useInstructor";
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Instructor = () => {
  // const [instructor] = useInstructor();

  const [axiosSecure] = useAxiosSecure();
  const { data: instructor = [] } = useQuery(["instructor"], async () => {
    const res = await axiosSecure.get("/instructor");
    return res.data;
  });

  return (
    <div>
      <Helmet>
        <title>Academy of dance | Intructor</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <SectionTitle
        subHeading={"Popular Instructor Section"}
        heading={"Instructor"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-4 px-10">
        {instructor.slice(0,6).map((ins) => (
          <div key={ins._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover object-center" src={ins.picture} alt="Card Image" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{ins.name}</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat erat vitae libero tristique ullamcorper.</p>
            
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;

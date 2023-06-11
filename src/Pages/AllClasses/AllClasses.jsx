import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTile/SectionTitle";
import UseMenu from "../../hooks/UseMenu";

const AllClasses = () => {
  const [menu] = UseMenu();
  console.log(menu)
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  const handleEnroll = (classId) => {
    // Perform payment process and backend API call to enroll in the class
    // On successful payment and enrollment, update the enrolledClasses state

    // Example code for demonstration purposes
    // Simulate a successful payment and enrollment
    const enrolledClass = menu.find((ins) => ins._id === classId);
    setEnrolledClasses([...enrolledClasses, enrolledClass]);
  };

  return (
    <div>
      <div className="py-10">
        <Helmet>
          <title>Academy of Dance | All Classes</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <SectionTitle subHeading={"Classes Section"} heading={"All Class"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-4">
        {menu.map((ins) => (
          <div
            key={ins._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={ins.picture}
              alt="Card Image"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Name: {ins.name}
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat erat vitae libero tristique ullamcorper.
              </p>
              <p className="text-3xl">Category: {ins.category}</p>
              <p className="text-3xl">Price: {ins.price}</p>
              <button
                className="btn btn-primary my-2"
                onClick={() => handleEnroll(ins._id)}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Enrolled Classes:</h2>
        {enrolledClasses.length > 0 ? (
          <ul>
            {enrolledClasses.map((classItem) => (
              <li key={classItem._id}>{classItem.name}</li>
            ))}
          </ul>
        ) : (
          <p>No classes enrolled yet.</p>
        )}
      </div>
    </div>
  );
};

export default AllClasses;

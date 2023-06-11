import React, { useState } from 'react';

const MySelectedClasses = () => {

    


  const [selectedClasses, setSelectedClasses] = useState([
    {
      id: 1,
      name: "Mathematics",
      teacher: "John Smith",
      fee: 50
    },
    {
      id: 2,
      name: "Physics",
      teacher: "Emily Johnson",
      fee: 60
    },
    {
      id: 3,
      name: "English",
      teacher: "Sarah Davis",
      fee: 40
    }
  ]);

  const handleDeleteClass = (classId) => {
    setSelectedClasses(selectedClasses.filter((classInfo) => classInfo.id !== classId));
  };

  const handlePayClass = (classId) => {
    // Implement the logic for payment here
    alert("Payment logic goes here");
  }
    return (
        <div>
        <h1>Selected Classes</h1>
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Teacher</th>
              <th>Fee</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((classInfo) => (
              <tr key={classInfo.id}>
                <td>{classInfo.name}</td>
                <td>{classInfo.teacher}</td>
                <td>${classInfo.fee}</td>
                <td>
                  <button onClick={() => handleDeleteClass(classInfo.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handlePayClass(classInfo.id)}>Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MySelectedClasses;
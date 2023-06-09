// import React from 'react';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';

const useInstructor = () => {
    // const {user,loading} = useAuth()
    // const [axiosSecure] = useAxiosSecure()

    // const {data: isInstructor, isLoading} = useQuery({
    //     queryKey : ['isInstructor' , user?.email],
    //     enabled:!loading,
    //     queryFn: async()=>{
    //         const res = await axiosSecure.get(`/users/instructor/${user?.email}`) 
            
    //         return res.data.admin;
    //     }
    // })
    // return [isInstructor,isLoading]


    const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);
  return [instructor];
};

export default useInstructor;
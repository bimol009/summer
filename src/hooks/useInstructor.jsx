import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isInstructor, isLoading} = useQuery({
        queryKey : ['isInstructor' , user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`) 
            
            return res.data.admin;
        }
    })
    return [isInstructor,isLoading]
};

export default useInstructor;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isUser, isLoading} = useQuery({
        queryKey : ['user'],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users`) 
            
            return res.data;
        }
    })
    return [isUser,isLoading]
};

export default useUser;
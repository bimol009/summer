import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log(res.data)
      return res.data.admin;
      
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;

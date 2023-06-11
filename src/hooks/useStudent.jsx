import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useStudent = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isStudent, isLoading} = useQuery({
        queryKey : ['student' , user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/student/${user?.email}`) 
            console.log(res)
            return res.data.instructor;
        }
    })
    return [isStudent,isLoading]
};

export default useStudent;
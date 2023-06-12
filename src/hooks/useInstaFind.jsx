
import { useQuery } from '@tanstack/react-query';

const useInstaFind = () => {
    const {
        data: instaFind = [],
        isLoading: loading ,
        refetch,
      } = useQuery({
        queryKey: ["instaFind"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/payment");
          console.log(res)
          return res.json();
        },
      });
      return [instaFind, loading, refetch];
};

export default useInstaFind;
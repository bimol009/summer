
import { useQuery } from '@tanstack/react-query';

const useInstaFind = () => {
    const {
        data: instaFind = [],
        isLoading: loading ,
        refetch,
      } = useQuery({
        queryKey: ["instaFind"],
        queryFn: async () => {
          const res = await fetch("https://summer-camp-server-bimol009.vercel.app/payment");
   
          return res.json();
        },
      });
      return [instaFind,refetch, loading ];
};

export default useInstaFind;
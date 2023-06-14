
import { useQuery } from '@tanstack/react-query';

const UseMenu = () => {
    const {
        data: menu = [],
        isLoading: loading ,
        refetch,
      } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
          const res = await fetch("https://summer-camp-server-bimol009.vercel.app/menu");
   
          return res.json();
        },
      });
      return [menu, loading, refetch];
};

export default UseMenu;
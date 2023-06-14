import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useMenuItem = () => {
    const {
        data: menItem = [],
        isLoading: loading ,
        refetch,
      } = useQuery({
        queryKey: ["menuitem"],
        queryFn: async () => {
          const res = await fetch("https://summer-camp-server-bimol009.vercel.app/menuItem");
   
          return res.json();
        },
      });
      return [menItem, loading, refetch];
};

export default useMenuItem;
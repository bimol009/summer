import React from 'react';
import { useQuery } from '@tanstack/react-query';

const UseMenu = () => {
    const {
        data: menu = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
          const res = await fetch("menu.json");
          return res.json();
        },
      });
      return [menu, loading, refetch];
};

export default UseMenu;
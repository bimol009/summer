import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  // const {
  //   data: menu = [],
  //   isLoading: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["menu"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/menu");
  //     return res.json();
  //   },
  // });
  return [menu, loading, refetch];
};

export default UseMenu;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DanceSection from "../../DanceSection/DanceSection";
import PopularClassesSection from "../../PopularClasses/PopularClassesSection";
import Banner from "../Banner/Banner";
import Instructor from "./../Instructor/Instructor";

const Home = () => {
  const { darkTheme, setDarkTheme } = useAuth();

  return (
    <div className={`${darkTheme ? "dark-theme" : "white-theme"}`}>
      <Banner></Banner>
      <PopularClassesSection></PopularClassesSection>
      <Instructor></Instructor>

      <DanceSection></DanceSection>
    </div>
  );
};

export default Home;

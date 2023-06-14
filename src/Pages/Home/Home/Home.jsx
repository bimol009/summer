import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DanceSection from "../../DanceSection/DanceSection";
import PopularClassesSection from "../../PopularClasses/PopularClassesSection";
import Banner from "../Banner/Banner";
import Instructor from "./../Instructor/Instructor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClassesSection></PopularClassesSection>
      <Instructor></Instructor>

      <DanceSection></DanceSection>
    </div>
  );
};

export default Home;

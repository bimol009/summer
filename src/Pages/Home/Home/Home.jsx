import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DanceSection from "../../DanceSection/DanceSection";
import PopularClassesSection from "../../PopularClasses/PopularClassesSection";
import Banner from "../Banner/Banner";
import ImgContentPart from "../imageContent/ImgContentPart";
import Instructor from "./../Instructor/Instructor";
import Background from "./Background/Background";
import ImgarSweper from "./Sweper/ImgarSweper";

const Home = () => {
  const { darkTheme, setDarkTheme } = useAuth();

  return (
   <div>
     <div className={`${darkTheme ? "white-theme" : "dark-theme"}`}>
      <Banner></Banner>
      <PopularClassesSection></PopularClassesSection>
      <Instructor></Instructor>
      <ImgContentPart></ImgContentPart>
      <ImgarSweper></ImgarSweper>
      <Background></Background>
      <DanceSection></DanceSection>
    </div>
   </div>
  );
};

export default Home;

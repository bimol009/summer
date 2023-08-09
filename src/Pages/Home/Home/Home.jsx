import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DanceSection from "../../DanceSection/DanceSection";
import PopularClassesSection from "../../PopularClasses/PopularClassesSection";
import Banner from "../Banner/Banner";
import ImgContentPart from "../imageContent/ImgContentPart";
import Instructor from "./../Instructor/Instructor";
import Background from "./Background/Background";
import DanceThumb from "./DanceThumb/DanceThumb";
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
      <DanceThumb></DanceThumb>
      <DanceSection></DanceSection>
    </div>
   </div>
  );
};

export default Home;

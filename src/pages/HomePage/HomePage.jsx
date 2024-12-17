import React from "react";
import FirstSection from "../../components/HomePage/FirstSection/FirstSection";
import Management from "../../components/HomePage/Management/Management";
import Portfolio from "../../components/HomePage/Portfolio/Portfolio";
import ProjectSlider from "../../components/HomePage/ProjectsSlider/ProjectSlider";
import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";

function HomePage() {
  return (
    <>
      <FirstSection />
      <WolseyInNumbers />
      <Management />
      {/* <Portfolio /> */}
      <ProjectSlider />
    </>
  );
}

export default HomePage;

import React from "react";
import FirstSection from "../../components/HomePage/FirstSection/FirstSection";
import WolseyInNumber from "../../components/HomePage/WolseyInNumber/WolseyInNumber";
import Management from "../../components/HomePage/Management/Management";
import Portfolio from "../../components/HomePage/Portfolio/Portfolio";
import ProjectSlider from "../../components/HomePage/ProjectsSlider/ProjectSlider";

function HomePage() {
  return (
    <>
      <FirstSection />
      <WolseyInNumber />
      <Management />
      <Portfolio />
      <ProjectSlider />
    </>
  );
}

export default HomePage;

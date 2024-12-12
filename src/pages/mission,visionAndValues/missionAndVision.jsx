import React from "react";
import Mission from "../../components/AboutPage/Mission/Mission";
import Vision from "../../components/AboutPage/Vision/Vision";
import Values from "../../components/AboutPage/values/values";
import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";

function MissionAndVision() {
  return (
    <>
      <Mission />
      <Vision />
      <Values />
      <WolseyInNumbers />
    </>
  );
}

export default MissionAndVision;

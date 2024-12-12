import React from "react";
import Solutions from "../../components/Solutions/solutionSection/Solutions";
import SolutionsPoster from "../../components/Solutions/solutuibsposter/solutionsPoster";
import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";

function SolutionsPage() {
  return (
    <>
      <SolutionsPoster />
      <Solutions />
      <WolseyInNumbers />
    </>
  );
}

export default SolutionsPage;

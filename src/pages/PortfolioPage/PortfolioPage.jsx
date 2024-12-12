import React, { useEffect, useRef } from "react";
import PortfolioPoster from "../../components/PortfolioPage/PortfolioPoster/PortfolioPoster";
import Industries from "../../components/PortfolioPage/Industries/Industries";
import Projects from "../../components/PortfolioPage/Projects/Projects";
import Solutions from "../../components/Solutions/solutionSection/Solutions";
import { useLocation } from "react-router-dom";

function PortfolioPage() {
  const solutions = useRef();

  const location = useLocation();
  const scrollToSection = (ref) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollTo({
        top: offsetTop - 100, // Adjust for 50px offset
      });
    }
  };
  useEffect(() => {
    if (location.state?.scrollTo === "solutions") {
      scrollToSection(solutions);
    }
  }, [location]);
  return (
    <>
      <PortfolioPoster />
      <div ref={solutions}>
        <Solutions />
      </div>
      <Industries />
      <Projects />
    </>
  );
}

export default PortfolioPage;

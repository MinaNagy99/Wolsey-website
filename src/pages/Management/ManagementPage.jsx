import React, { useEffect, useRef } from "react";
import PosterOfManagement from "../../components/ManagementPage/PosterOfManagment/PosterOfManagement";
import FounderOfJourney from "../../components/ManagementPage/FounderOfJourney/FounderOfJourney";
import Engineers from "../../components/ManagementPage/Engineers/Engineers";
import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";
import TrustedBy from "../../components/shared/TrustedBy/TrustedBy";
import { useLocation } from "react-router-dom";

function ManagementPage() {
  const founderRef = useRef();
  const firstSectionRef = useRef();
  const engineersRef = useRef();
  const location = useLocation();
  const scrollToSection = (ref) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollTo({
        top: offsetTop - 145, // Adjust for 50px offset
      });
    }
  };
  useEffect(() => {
    if (location.state?.scrollTo === "firstSection") {

      scrollToSection(firstSectionRef);
    }
    if (location.state?.scrollTo === "founder") {

      scrollToSection(founderRef);
    }
    if (location.state?.scrollTo === "engineers") {

      scrollToSection(engineersRef);
    }
  }, [location]);
  return (
    <>
      <div ref={firstSectionRef}>
        <PosterOfManagement />
      </div>
      <div className="bg-mainGray">
        <div ref={founderRef}>
          <FounderOfJourney />
        </div>
        <div ref={engineersRef}>
          <Engineers />
        </div>
        <WolseyInNumbers />
      </div>
      <TrustedBy />
    </>
  );
}

export default ManagementPage;

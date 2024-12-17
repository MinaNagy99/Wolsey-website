import React, { useEffect, useRef } from "react";
import AboutSection from "../../components/AboutPage/AboutSection/AboutSection";
import Mission from "../../components/AboutPage/Mission/Mission";
import Vision from "../../components/AboutPage/Vision/Vision";
import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";
import TrustedBy from "../../components/shared/TrustedBy/TrustedBy";
import { useLocation } from "react-router-dom";

function AboutPage() {
  const aboutRef = useRef();
  const missionRef = useRef();
  const visionRef = useRef();
  const location = useLocation();
  const scrollToSection = (ref) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
      });
    }
  };
  useEffect(() => {
    if (location.state?.scrollTo === "about") {
      scrollToSection(aboutRef);
    }
    if (location.state?.scrollTo === "mission") {
      scrollToSection(missionRef);
    }
    if (location.state?.scrollTo === "vision") {
      scrollToSection(visionRef);
    }
  }, [location]);
  return (
    <>
      <div className="md:mt-18 mt-10">
        <div ref={aboutRef}>
          <AboutSection />
        </div>
    



        <WolseyInNumbers />
        {/* <TrustedBy /> */}
      </div>
    </>
  );
}

export default AboutPage;

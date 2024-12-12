import React from "react";
import CertificationPoster from "../../components/CertificationPage/certificationPoster/certificationPoster";
import CertificationDetails from "../../components/CertificationPage/certificationsDetails/CertificationDetails";
import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";
import TrustedBy from "../../components/shared/TrustedBy/TrustedBy";

function CertificationPage() {
  return (
    <>
      <CertificationPoster />
      <CertificationDetails />
      <WolseyInNumbers />
      {/* <TrustedBy /> */}
    </>
  );
}

export default CertificationPage;

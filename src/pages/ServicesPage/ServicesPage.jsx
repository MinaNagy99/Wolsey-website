import React from "react";
import ServicesBrief from "../../components/Services/servicesBrief/servicesBrief";
import MainServices from "../../components/Services/mainServices/mainServices";
import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";

function ServicesPage() {
  return (
    <>
      <div className="mt-14">
        <ServicesBrief />
        <MainServices />
        <WolseyInNumbers />
      </div>
    </>
  );
}

export default ServicesPage;

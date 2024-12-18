import React from "react";
import LearnMore from "../../shared/LearnMore";
import { Link } from "react-router-dom";

function FirstSection() {
  return (
    <>
      <div className="flex flex-col  justify-center lg:ps-10 ps-3 h-[80vh] w-full bg-[url('/home/firstSection.webp')] mt-20 bg-cover bg-center">
        <div className="lg:w-[50%]">
          <p className="mb-2">
            <span className="text-mainBrown custom-text-lg font-semibold">
              ABOUT US
            </span>{" "}
            Founded in 2006, Wolsey Structural Engineering
          </p>
          <p className="text-justify">
            delivers innovative, sustainable solutions across diverse sectors,
            with over 3,000 projects completed worldwide. Backed by 20+ skilled
            engineers, Wolsey combines precision and environmental
            responsibility to create resilient, future-focused structures that
            set new industry standards and enrich communities.
          </p>
          <LearnMore path="/about" />
        </div>
      </div>
      {/* <img src="/home/firstSection.webp" alt="" /> */}
    </>
  );
}

export default FirstSection;

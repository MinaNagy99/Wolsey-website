import React from "react";
import "./certifications.css";
function CertificationPoster() {
  return (
    <>
      <div className="posterCertification  md:mt-18 mt-8 ">
        <div className="flex flex-col justify-center p-5 h-full">
          <h1 className="custom-text-xxl mb-6">CERTIFICATIONS & AWARDS</h1>
          <p>
            <span className="text-mainBrown custom-text-xl font-berlin">
              At Wolsey,{" "}
            </span>
            <span className=" custom-text-lg font-semibold">
              we set new standards in structural engineering
            </span>
          </p>
          <p className="mt-5 lg:w-1/2 lg:pe-6 text-justify">
            backed by over 20 years of expertise and a team of 20+ skilled
            design engineers. With a portfolio spanning 1000+ projects across 5
            continents, we bring sustainable, award-winning designs to life
            using cutting-edge technology and an unwavering commitment to
            quality, resilience, and innovation. Our dedication to client
            satisfaction is reflected in our partnerships with 36+ clients, with
            over 95% returning for new projects. From initial concept to project
            completion, we provide robust, environmentally conscious structural
            solutions that are tailored to meet both current demands and future
            challenges. At Wolsey, our goal is to shape a sustainable and
            resilient built environment that will endure for generations.
          </p>
        </div>
      </div>
    </>
  );
}

export default CertificationPoster;

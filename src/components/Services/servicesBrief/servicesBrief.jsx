import React from "react";

function ServicesBrief() {
  return (
    <>
      <>
        <div
          style={{
            backgroundImage: `url('/about/about.webp')`,
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",

            backgroundSize: `100% 100%`,
          }}
          className="flex flex-col justify-center md:ps-11 ps-5 py-10"
        >
          <h2 className={` mb-3`}>
            <span className="pe-2 text-mainBrown font-berlin custom-text-xl">
              SERVICES
            </span>
            <span className={`custom-text-lg  font-semibold pe-1`}>
              Structural Engineering Solution
            </span>
          </h2>
          <div className="md:w-1/2">
            <p className={` custom-text-base mb-3 `}>
              With a legacy of over 1,000 projects spanning four continents,
              ADAL’s portfolio exemplifies a steadfast commitment to innovation,
              precision, and excellence. Our work transcends boundaries,
              encompassing a diverse range of sectors, from visionary master
              planning and transformative urban designs to iconic cultural
              landmarks, advanced healthcare facilities, and modern residential
              and commercial spaces.
            </p>
            <p className={` custom-text-base mb-3 `}>
              Every project integrates functionality, aesthetic sophistication,
              and sustainable design principles, ensuring lasting impact and
              relevance in a rapidly evolving global landscape. At ADAL, we are
              dedicated to shaping communities and redefining spaces with
              designs that inspire, connect, and endure.
            </p>
            <p className={` custom-text-base mb-3 `}>
              This track record of success reflects not only our technical
              expertise but also our collaborative ethos and unwavering
              dedication to enhancing the built environment through thoughtful
              and innovative architectural solutions.
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export default ServicesBrief;

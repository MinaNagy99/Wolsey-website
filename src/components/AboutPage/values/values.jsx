import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function values() {
  const values = [
    {
      title: "Engineering Excellence",
      description:
        "Delivering innovative, precise, and high-performance structural solutions",
    },
    {
      title: "Client-Centric Focus",
      description:
        "Building strong partnerships through tailored, impactful outcomes.",
    },
    {
      title: "Integrity and Professionalism",
      description:
        "Upholding ethical standards and ensuring transparency in all engagements.",
    },
    {
      title: "Sustainability",
      description:
        "Prioritizing environmentally responsible designs for lasting impact.",
    },
    {
      title: "Multidisciplinary Expertise",
      description: "Offering versatile solutions across diverse industries.",
    },
    {
      title: "Commitment to Quality",
      description:
        "Crafting durable, efficient, and visually refined structures",
    },
    {
      title: "Visionary Innovation",
      description:
        "Redefining the structural landscape through cutting-edge methodologies.",
    },
  ];
  return (
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
        <h2 className={`text-mainBrown font-berlin custom-text-xl mb-3`}>
          VALUES
        </h2>
        {values.map((v, index) => (
          <React.Fragment key={index}>
            <p>
              <span className={`custom-text-lg  font-semibold pe-1`}>
                {v.title}
              </span>
            </p>
            <p className={` custom-text-base mb-3 `}>{v.description}</p>
          </React.Fragment>
        ))}{" "}
      </div>
    </>
  );
}

export default values;

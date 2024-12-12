import React from "react";
import CustomParagraph from "../../shared/CustomParagraph/CustomParagraph";

function FounderOfJourney() {
  const data = {
    firstLine: {
      part1: {
        isBold: true,
        fontSize: "xl",
        color: "text-mainBrown",
        text: "DANNY WOLSEY",
      },
      part2: {
        isBold: true,
        fontSize: "lg",
        text: "’S EXPERIENCE AND VISION",
      },
    },
    bgColor: "bg-secondGray",
    normalText: [
      "Danny Wolsey, LEED AP, P.Eng., founded Wolsey Structural Engineering Ltd. in 2006 following a distinguished career collaborating with leading engineers on high-profile projects worldwide. In late-2023, Wolsey Structural Engineering proudly joined Mosaic Holding Corporation as a subsidiary.",
      "His experiences span across 5 continents - North America, Oceania, Asia, Europe and Africa- contributing to high-profile projects in more than 15 countries across the globe. With a diverse portfolio ranging from institutional and commercial projects to entertainment and residential designs, Danny has developed a profound understanding of complex structural challenges, always prioritising practical, innovative, and sustainable solutions.",
      "His vision for the firm centres on client satisfaction, and collaboration, believing that sustainable design is not only beneficial for the environment but also adds lasting value to construction. Danny's leadership and expertise have been key in transforming Wolsey into a trusted leader in the structural engineering field, renowned for its ability to elevate the performance of each project it undertakes",
    ],
  };
  const { header, learnMore, normalText, firstLine, handelWidth, bgColor } =
    data;
  const { part1, part2 } = firstLine;
  return (
    <>
      <div className="grid lg:grid-cols-4  grid-cols-1 ">
        <div className="col-span-1 lg:flex ">
          <img
            className="lg:translate-x-5 lg:w-5/6 lg:ms-auto lg:my-auto"
            src="/management/founder.webp"
            alt=""
          />
        </div>
        <div className="lg:col-span-3 col-span-1 pt -5 my-auto ">
          <div className="bg-secondGray h-full py-5 md:ps-16 md:p-10 p-3">
            <p>
              <span
                className={`text-${part1.fontSize} ${
                  part1.color == "text-mainBrown" ? "text-mainBrown" : ""
                }  ${part1.isBold && "font-semibold"} pe-1`}
              >
                {part1.text}
              </span>
              {part2 && (
                <span
                  className={` text-${part2.fontSize} ${
                    part2.color == "text-mainBrown" ? "text-mainBrown" : ""
                  }  ${part2.isBold && "font-semibold"}`}
                >
                  {part2.text}
                </span>
              )}
            </p>
            {normalText.map((text, index) => (
              <React.Fragment key={index}>
                <p className={`${handelWidth && "md:w-1/2 w-full"} my-2`}>
                  {text}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FounderOfJourney;

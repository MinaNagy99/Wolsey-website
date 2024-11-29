import React from "react";
import TextWithBgImg from "../../shared/TextWithBg-img/TextWithBgImg";

function Portfolio() {
  const data = {
    header: { text: "PORTOFOLIO", fontSize: "xl" },
    imgFirst: true,
    img: { src: "/home/portofolio.webp", size: "cover" },
    firstLine: {
      part1: {
        isBold: true,
        fontSize: "lg",
        text: "At Wolsey Structural Engineering",
      },
    },
    normalText: [
      "we deliver landmark structures that showcase our expertise in resilient, forward-thinking design. Each project reflects our commitment to excellence, sustainability, and engineering innovation—pushing the boundaries of modern structural solutions.",
    ],
    handelWidth: true,
  };
  return (
    <>
      <TextWithBgImg data={data} />
    </>
  );
}

export default Portfolio;

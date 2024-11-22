import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function Mission() {
  const data = {
    header: { text: "MISSION", fontSize: "xl" },
    imgFirst: true,
    bgColor: "secondGray",
    img: "/about/mission.webp",
    firstLine: {
      part1: {
        isBold: true,
        text: "Wolsey Structural Engineering",
        fontSize: "lg",
      },
      part2: {
        isBold: false,
        fontSize: "base",
        text: "is committed to delivering world-class",
      },
    },
    normalText: [
      "designs combining innovation, sustainability, and technical precision. Through a client-centric, collaborative approach, we strive to exceed expectations by providing cost-effective, eco-conscious and highly efficient engineering solutions. Our mission is to foster a resilient and sustainable future, ensuring every project has the highest standards of safety, quality, and environmental responsibility.",
    ],
  };
  return (
    <>
      <TextWithImg data={data} />
    </>
  );
}

export default Mission;

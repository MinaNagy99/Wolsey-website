import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function Vision() {
  const data = {
    header: { text: "VISSION", fontSize: "xl" },
    imgFirst: false,
    bgColor: "mainGray",
    img: "/about/vision.webp",
    firstLine: {
      part1: {
        isBold: true,
        text: "To be a vanguard in structural engineering",
        fontSize: "lg",
      },
      part2: {
        isBold: false,
        fontSize: "base",
        text: "shaping the future",
      },
    },
    normalText: [
      "shaping the future of-the-built environment through pioneering, sustainable, and aesthetically compelling solutions that redefine modern construction.",
    ],
  };
  return (
    <>
      <TextWithImg data={data} />
    </>
  );
}

export default Vision;

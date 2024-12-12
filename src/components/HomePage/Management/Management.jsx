import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function Management() {
  const data = {
    header: { text: "MANAGEMENT TEAM", fontSize: "xl" },
    imgFirst: true,
    img: "/home/managementTeam.webp",
    firstLine: {
      part1: {
        isBold: true,
        text: "Danny Wolsey",
        fontSize: "lg",
      },
      part2: {
        isBold: false,
        fontSize: "lg",
        text: " LEED AP, P.Eng., founded Wolsey Structural Engineering Ltd. ",
      },
    },
    normalText: [
      "in 2006 following a distinguished career collaborating with leading engineers on high-profile projects worldwide. In mid-2023, Wolsey Structural Engineering proudly joined Mosaic Holding Corporation as a subsidiary.",
    ],
    learnMore: { path: "/founder" },
  };
  return (
    <>
      <TextWithImg data={data} />
    </>
  );
}

export default Management;

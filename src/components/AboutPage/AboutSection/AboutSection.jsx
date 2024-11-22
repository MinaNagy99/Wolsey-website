import React from "react";
import TextWithBgImg from "../../shared/TextWithBg-img/TextWithBgImg";

function AboutSection() {
  const data = {
    imgFirst: true,
    img: { src: "/about/about.webp", size: "cover" },
    firstLine: {
      part1: {
        isBold: true,
        color: "text-mainBrown",
        fontSize: "xl",
        text: "ABOUT US",
      },
      part2: {
        isBold: true,
        fontSize: "lg",
        text: "Founded in 2006, Wolsey Structural Engineering",
      },
    },
    normalText: [
      "Founded in 2006, Wolsey Structural Engineering has built a reputation for delivering innovative, sustainable, and cost-effective structural solutions that shape modern engineering. With over 17 years of expertise, 20+ design engineers, and a portfolio spanning multifamily residential, commercial, institutional, and specialty fabrication projects, Wolsey has completed 3000+ projects for 36 clients across 10+ countries, with a 40% client retention rate. The company prioritizes client needs and upholds high standards in structural integrity and environmental responsibility, emphasizing collaboration and precision. Wolsey’s skilled team blends advanced methodologies with sustainable practices, consistently exceeding client expectations by creating resilient structures that contribute positively to communities and embody the firm’s dedication to pushing the boundaries of structural engineering.",
    ],
    handelWidth: true,
  };
  return (
    <>
      <TextWithBgImg data={data} />
    </>
  );
}

export default AboutSection;

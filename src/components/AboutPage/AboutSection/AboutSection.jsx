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
      "which became a subsidiary of “Mosaic Holding Corporation” in late 2023, has earned a distinguished reputation for delivering innovative, sustainable, and cost-effective structural solutions that shape the landscape of modern engineering. With over 20 years of expertise and 20+ design engineers, Wolsey’s work spans diverse sectors—including multifamily residential, commercial, institutional, and specialty fabrication projects. Serving over 36 clients across 10+ countries, with 95% recurring clients, and 1000+ completed projects, Wolsey prioritises a deep understanding of client needs while advancing standards in structural integrity and environmental responsibility. Our approach is rooted in collaboration and precision, ensuring that each project is tailored to meet specific objectives, seamlessly incorporating resilience and adaptability into our designs.",
      "At the core of Wolsey’s success is a team of skilled professionals who bring together a wealth of technical knowledge and industry insights. Our engineers and specialists combine advanced methodologies with sustainable practices to create designs that are efficient, functional, and future-focused. Driven by a commitment to excellence, Wolsey consistently exceeds client expectations by crafting resilient structures that not only enhance the built environment but also make positive contributions to the communities they serve. Each project reflects our dedication to pushing the boundaries of what’s possible in structural engineering, forging a legacy of impactful, enduring design.",
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

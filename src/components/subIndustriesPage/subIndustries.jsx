import React from "react";
import SubIndustryCard from "./subIndustryCard/subIndustryCard";

function SubIndustries() {
  const data = [
    {
      imgFirst: true,
      bgColor: "secondGray",
      img: "/portfolio/projects/1.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "MULTIFAMILY RESIDENTIAL",
          fontSize: "xl",
        },
      },
      normalText: [
        "Wolsey delivers robust structural engineering solutions for multifamily residential buildings, ensuring durability, stability, and compliance with industry standards while supporting sustainable community growth.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/portfolio/projects/2.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "RETAIL COMMERCIAL",
          fontSize: "xl",
        },
      },
      normalText: [
        "Our team specializes in engineering structurally efficient retail spaces, prioritizing stability, durability, and adaptability. By integrating advanced structural systems and optimizing load-bearing designs, we create commercial environments that support functionality, enhance usability, and meet the unique demands of retail operations.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/portfolio/projects/3.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "OFFICE WAREHOUSE",
          fontSize: "xl",
        },
      },
      normalText: [
        "Wolsey's structural engineering expertise for office warehouse projects focuses on creating durable, efficient frameworks designed to withstand operational demands. Our solutions emphasize load-bearing capacity, optimal material use, and structural integrity, ensuring the facilities are adaptable, scalable, and built to support diverse business requirements.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/portfolio/projects/4.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "DEALERSHIPS",
          fontSize: "xl",
        },
      },
      normalText: [
        "We engineer dealership structures with a focus on robust and efficient designs that support high-traffic use while meeting the unique demands of automotive showrooms. By prioritizing structural integrity and functionality, we create spaces that optimize the display of inventory and enhance client engagement, all while upholding the highest standards of durability and performance.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/portfolio/projects/5.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "SPECIALITY FABRICATION",
          fontSize: "xl",
        },
      },
      normalText: [
        "It  involves the custom design and construction of critical structural components like beams, supports, and frames. This process ensures each element meets precise specifications, integrates seamlessly with the overall design, and complies with safety and regulatory standards, providing strength, durability, and reliability for complex projects.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/portfolio/projects/6.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "MUNICIPAL INSTITUTION",
          fontSize: "xl",
        },
      },
      normalText: [
        "Our municipal institution is engineered for durability and safety, focusing on robust structural integrity. We apply advanced engineering methods to ensure long-lasting, resilient spaces that meet the needs of the community, using sustainable materials and innovative design solutions.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/portfolio/projects/7.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "LANDSCAPE ELEMENTS",
          fontSize: "xl",
        },
      },
      normalText: [
        "Landscape elements involve the engineering of functional outdoor structures such as retaining walls, walkways, terraces, and stairs. Our approach ensures these features are structurally sound, stable, and sustainable, while complementing the natural environment.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/portfolio/projects/8.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "MODULAR STRUCTURES",
          fontSize: "xl",
        },
      },
      normalText: [
        "Modular structures are prefabricated building components engineered for strength, durability, and efficiency. Designed with precision, these structures offer rapid assembly while maintaining high standards of load-bearing capacity and resilience to environmental conditions. Ideal for various applications, modular systems provide flexible, reliable solutions tailored to specific engineering requirements.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/portfolio/projects/9.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "SINGLE FAMILY RESIDENTIAL",
          fontSize: "xl",
        },
      },
      normalText: [
        "Our structural engineering services for single-family homes focus on safety, durability, and precision. We design and analyze load-bearing systems, ensuring compliance with building codes and optimizing stability. From foundations to framing, our tailored solutions deliver reliable, long-lasting structures.",
      ],
      link: "/projects",
    },
  ];
  return (
    <>
      <div className="mb-10">
        {data.map((data, index) => (
          <React.Fragment key={index}>
            <SubIndustryCard data={data} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default SubIndustries;

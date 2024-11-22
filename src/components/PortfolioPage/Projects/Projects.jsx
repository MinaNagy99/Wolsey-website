import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
  const data = [
    {
      imgFirst: true,
      bgColor: "secondGray",
      img: "/portfolio/projects/1.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "MULTIFAMILY",
          fontSize: "xl",
        },
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "Wolsey expertly designs and engineers",
        },
      },
      normalText: [
        "multifamily structures that harmonise durability with aesthetic appeal, creating cohesive living spaces that meet diverse residential needs. Our approach ensures high-quality, sustainable solutions that support both structural integrity and community growth.",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "Our team specialises",
        },
      },
      normalText: [
        "in developing retail environments that embody brand identity while optimising space functionality and customer experience. With a focus on structural innovation, we deliver commercial designs that are both efficient and visually impactful",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "Wolsey’s engineering",
        },
      },
      normalText: [
        "solutions for office warehouse projects blend adaptability with robust structural design, tailored to support dynamic business operations. We prioritise flexibility and scalability, ensuring each facility meets the evolving demands of today’s workspaces.",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "We design dealership structures",
        },
      },
      normalText: [
        " that emphasise a seamless integration of style and function, showcasing inventory in a space that enhances client engagement and brand presence. Our team’s expertise ensures these spaces are not only visually compelling but also structurally optimised for high-traffic use.",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "With a commitment",
        },
      },
      normalText: [
        "to precision and creativity, Wolsey’s specialty fabrication services transform unique client visions into engineered reality. Our approach combines advanced engineering with meticulous attention to detail, delivering custom solutions that stand out for their innovation and quality.",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "Wolsey brings deep",
        },
      },
      normalText: [
        "expertise to the structural needs of municipal projects, developing facilities that serve public interests with lasting durability and civic pride. Our work with municipal institutions reflects our dedication to creating functional, resilient structures that benefit communities.",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "Our landscape structural",
        },
      },
      normalText: [
        "solutions enhance outdoor spaces, blending seamlessly with natural surroundings to support both aesthetics and utility. We apply sustainable practices to create structures that endure, adding lasting value to any environment.",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "Wolsey’s modular",
        },
      },
      normalText: [
        "structure designs emphasise flexibility, efficiency, and fast-track construction to meet modern demands. Each project balances innovation with practicality, allowing for modular configurations that offer durable and adaptable solutions.",
      ],
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
        part2: {
          isBold: true,
          fontSize: "lg",
          text: "We design",
        },
      },
      normalText: [
        "single-family residential structures with a focus on both structural integrity and personal comfort, tailored to meet the unique needs of each client. By combining meticulous engineering with a collaborative approach, Wolsey creates homes that reflect quality and timelessness.",
      ],
    },
  ];
  return (
    <>
      <div className="mb-10">
        {data.map((data, index) => (
          <React.Fragment key={index}>
            <ProjectCard data={data} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Projects;

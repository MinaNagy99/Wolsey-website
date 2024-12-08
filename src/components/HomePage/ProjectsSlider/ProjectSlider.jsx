import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "./Arrows/NextArrow";
import PreArrow from "./Arrows/PreArrow";
function ProjectSlider({ data }) {
  const images = [
    { src: "/home/p1.webp", width: 420 },
    { src: "/home/p2.webp", width: 600 },
    { src: "/home/p3.webp", width: 420 },
  ];
  const [isMobile, setIsMobil] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobil(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  var settings = {
    className: "slider variable-width",
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: !isMobile,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
  };
  return (
    <>
      <p className="text-mainBrown custom-text-xl text-center mt-10">
        Award winning projects
      </p>
      <div className="slider-container  mt-2 mx-0 overflow-hidden">
        <Slider {...settings}>
          {images.map(({ src, width }, index) => (
            <React.Fragment key={index}>
              <div style={{ width }} className="h-[418px]">
                <img
                  className="w-full h-full border-4 border-white"
                  src={src}
                  alt=""
                />
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ProjectSlider;

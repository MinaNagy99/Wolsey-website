import React from "react";
import Slider from "react-slick";

function SliderOfImgsProject({ imgs }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 50, // Set the autoplay speed to 1 second (1000 ms)
    fade: true, // Enable fade effect
  };
  return (
    <>
      <div className="slider-container ">
        <Slider {...settings}>
          {imgs.map((img, index) => (
            <div key={index}>
              <img className="w-full h-[70vh] object-cover" src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderOfImgsProject;

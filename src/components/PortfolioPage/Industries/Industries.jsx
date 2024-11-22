import React from "react";
import "./Industries.css";
function Industries() {
  const industries = [
    "./portfolio/1.png",
    "./portfolio/2.png",
    "./portfolio/3.png",
    "./portfolio/4.png",
    "./portfolio/5.png",
    "./portfolio/6.png",
    "./portfolio/7.png",
  ];
  return (
    <>
      <div className="map md:h-[60vh] flex items-center">
        <div className="grid md:grid-cols-7 grid-cols-2 lg:px-20 items-center justify-center ">
          {industries.map((img, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 flex items-center justify-center">
                <img className="w-4/5 m-auto" src={img} alt="" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Industries;

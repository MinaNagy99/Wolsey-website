import React from "react";

function MainServices() {
  const services = [
    "./services/1.png",
    "./services/2.png",
    "./services/3.png",
    "./services/4.png",
    // "./services/5.png",
    "./services/6.png",
    "./services/7.png",
  ];
  return (
    <>
      <h1 className="custom-text-xl font-bold text-center my-20 text-mainBrown">
        MAIN SERVICES
      </h1>
      <div className="map md:h-[60vh] flex items-center">
        <div className="grid md:grid-cols-6 grid-cols-2 lg:px-20 items-center justify-center ">
          {services.map((img, index) => (
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

export default MainServices;

import React from "react";

function PosterCareer() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/management/poster.jpg")`,
        }}
        className="grid grid-cols-5 h-[50vh] lg:mt-28 mt-20 bg-center bg-cover bg-no-repeat"
      >
        <div className="flex flex-col lg:col-span-2 col-span-5 items-start justify-center lg:ps-10 ps-2   ">
          <h1 className="custom-text-xxl font-berlin">
            WOLSEY CAREER <br /> OPPORTUNITIES
          </h1>

          <p className="text-mainBrown custom-text-lg font-berlin">
            Your Future With Wolsey
          </p>
        </div>
        <img
          className="lg:col-span-2 col-span-3  h-full lg:translate-y-[20%]"
          src="/portfolio/projects/1.webp"
          alt=""
        />
        <img
          className="lg:col-span-1 col-span-2 h-full  lg:translate-y-[20%]"
          src="/portfolio/projects/2.webp"
          alt=""
        />
      </div>
    </>
  );
}

export default PosterCareer;

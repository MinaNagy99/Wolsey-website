import React from "react";

function PosterCareer() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/career/poster.webp")`,
        }}
        className="grid grid-cols-7 h-[50vh] lg:mt-28 mt-20 bg-center bg-cover bg-no-repeat"
      >
        <div className="flex flex-col sm:col-span-4 col-span-6 items-start justify-center lg:ps-10 ps-2   ">
          <h1 className="custom-text-xxl font-berlin">
            WOLSEY CAREER <br /> OPPORTUNITIES
          </h1>

          <p className="text-mainBrown custom-text-lg font-berlin">
            Your Future With Wolsey
          </p>
        </div>
        <img
          className="sm:col-span-2 col-span-4 w-full  h-[90%] lg:translate-y-[30%]"
          src="/career/11.webp"
          alt=""
        />
        <img
          className="sm:col-span-1  col-span-3  h-[90%]  w-full lg:translate-y-[30%]"
          src="/career/22.webp"
          alt=""
        />
      </div>
    </>
  );
}

export default PosterCareer;

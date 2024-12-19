import React from "react";

function PosterCareer() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/career/poster.webp")`,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",

          backgroundSize: `cover`,
        }}
        className="grid grid-cols-7 h-[50vh] object-cover  mt-18 bg-center bg-cover bg-no-repeat"
      >
        <div className="flex flex-col sm:col-span-6 text-end col-span-6 items-end justify-center lg:ps-10 ps-2   ">
          <h1 className="custom-text-xxl font-berlin">
            WOLSEY CAREER <br /> OPPORTUNITIES
            <p className="text-mainBrown custom-text-lg  text-center w-full font-berlin">
              Your Future With Wolsey
            </p>
          </h1>
        </div>
        {/* <img
          className="sm:col-span-2 col-span-4 w-full  h-[90%] lg:translate-y-[30%]"
          src="/career/11.webp"
          alt=""
        />
        <img
          className="sm:col-span-1  col-span-3  h-[90%]  w-full lg:translate-y-[30%]"
          src="/career/22.webp"
          alt=""
        /> */}
      </div>
    </>
  );
}

export default PosterCareer;

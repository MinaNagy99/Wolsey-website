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
        <div className="flex flex-col sm:col-span-7  text-end col-span-6 items-end justify-center lg:ps-10 pe-10   ">
          <h1 className="custom-text-xxl font-berlin">
            WOLSEY CAREER <br /> OPPORTUNITIES
            <p className="text-mainBrown custom-text-lg  text-center w-full font-berlin">
              Your Future With Wolsey
            </p>
          </h1>
        </div>

      </div>
    </>
  );
}

export default PosterCareer;

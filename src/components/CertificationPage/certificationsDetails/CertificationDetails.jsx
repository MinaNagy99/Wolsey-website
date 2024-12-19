import React, { useEffect, useState } from "react";
import "./certificationDetails.css";
function CertificationDetails() {
  const [widthScreen, setWidthScreen] = useState();
  useEffect(() => {
    setWidthScreen(window.innerWidth);
    [];
  }, [widthScreen]);
  return (
    <>
      <div className="bg-mainGray grid md:grid-cols-3 grid-cols-1  xl:gap-20 gap-10 xl:px-20 px-5 py-10">
        <div className="col-span-1 p-8 md:p-0">
          <img className="w-2/4 m-auto " src="/certifications/c2.png" alt="" />
          <p className="custom-text-xxl font-bold py-2 my-4 relative bg-mainBrown  text-white text-center">
            {widthScreen > "1650" && (
              <img
                className="w-1/5 absolute right-2 arrow translate-x-full -translate-y-full"
                src="/certifications/arrow2.png"
                alt=""
              />
            )}
            2012
          </p>
          <p className="font-bold my-2 ">
            The Alberta Masonry Design Award of Merit for Structural Masonry in
            the Commercial Building category, 2012 ( 718 8th Avenue SW office
            building, Calgary)
          </p>
          {/* <p className="my-2">
            Wolsey Structural Engineering’s design for the 718 8th Avenue SW
            office in Calgary—a four-story, 24,400-square-foot building
            completed in 2012—won the Alberta Masonry Design Award of Merit,
            showcasing its structural integrity for professional and tech firms.
          </p> */}
        </div>
        <div className="col-span-1 p-8 md:p-0">
          {widthScreen > 720 ? (
            <>
              <p className="font-bold my-2 ">
                Canadian Architect Award of Excellence, 2017. (V20 multi-family
                project, Calgary)
              </p>

              <p className="custom-text-xxl font-bold py-2 my-4 bg-mainBrown  text-white text-center">
                2017
              </p>

              <img
                className="w-2/4 m-auto "
                src="/certifications/c1.png"
                alt=""
              />
            </>
          ) : (
            <>
              <img
                className="w-2/4 m-auto "
                src="/certifications/c2.png"
                alt=""
              />
              <p className="custom-text-xxl font-bold py-2 my-4 bg-mainBrown  text-white text-center">
                2017
              </p>
              <p className="font-bold my-2 ">
                The Alberta Masonry Design Award of Merit for excellence in
                Landscape urban design and planning, 2019 (Mount Royal Retaining
                Wall, Calgary)
              </p>
              <p className="my-2">
                The 19,450-square-foot BV20 multi-family project in Calgary
                features sustainable design has won the Canadian Architect Award
                of Excellence in 2017.
              </p>
            </>
          )}
        </div>
        <div className="col-span-1 p-8 md:p-0">
          <img className="w-2/4 m-auto " src="/certifications/c3.png" alt="" />
          <p className="custom-text-xxl font-bold py-2 my-4 relative bg-mainBrown  text-white text-center">
            {widthScreen > "1650" && (
              <img
                className="w-1/5 absolute left-1  arrow -translate-x-full -translate-y-full"
                src="/certifications/arrow1.png"
                alt=""
              />
            )}
            2019
          </p>
          <p className="font-bold my-2 ">
            The Alberta Masonry Design Award of Merit for excellence in
            Landscape urban design and planning, 2019 (Mount Royal Retaining
            Wall, Calgary)
          </p>
          {/* <p className="my-2">
            The 1880s Mount Royal Retaining Wall restoration, using local
            sandstone and lime mortar, won the 2019 Alberta Masonry Design
            Award.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default CertificationDetails;

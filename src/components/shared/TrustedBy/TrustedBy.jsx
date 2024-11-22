import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import "./TrustedBy.css";
function TrustedBy() {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  // const { ref, inView } = useInView({ triggerOnce: true });

  // const [mountOfTranslate, setMountOfTranslate] = useState(0);
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  const logos = {
    line1: [
      "/images/trustBy/line1/1.jpg",
      "/images/trustBy/line1/2.jpg",
      "/images/trustBy/line1/3.jpg",
      "/images/trustBy/line1/4.jpg",
    ],
    line2: [
      "/images/trustBy/line2/1.jpg",
      "/images/trustBy/line2/2.jpg",
      "/images/trustBy/line2/3.jpg",
      "/images/trustBy/line2/4.jpg",
      "/images/trustBy/line2/5.jpg",
      "/images/trustBy/line2/6.jpg",
      "/images/trustBy/line2/7.jpg",
    ],
    line3: [
      "/images/trustBy/line3/1.jpg",
      "/images/trustBy/line3/2.jpg",
      "/images/trustBy/line3/3.jpg",
      "/images/trustBy/line3/4.jpg",
      "/images/trustBy/line3/5.jpg",
      "/images/trustBy/line3/6.jpg",
    ],
    line4: [
      "/images/trustBy/line4/1.jpg",
      "/images/trustBy/line4/2.jpg",
      "/images/trustBy/line4/3.jpg",
      "/images/trustBy/line4/4.jpg",
    ],
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollTop = window.scrollY;

  //     if (inView) {
  //       if (currentScrollTop > lastScrollTop) {
  //         // Scrolling down
  //         setMountOfTranslate((prev) => prev + 3);
  //       } else if (currentScrollTop < lastScrollTop) {
  //         // Scrolling up
  //         setMountOfTranslate((prev) => prev - 3);
  //       }
  //       setLastScrollTop(currentScrollTop);
  //     }
  //   };

  //   if (inView) {
  //     window.addEventListener("scroll", handleScroll);
  //   }

  //   // Cleanup scroll listener when out of view or component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [inView, lastScrollTop]);

  return (
    <>
      <h2  className="text-center text-mainBrown custom-text-xl my-10">
        TRUSTED BY INDUSTRY LEADERS
      </h2>
      <div className="lg:px-24 md:px-10 mb-10 xl:w-[95%] xl:m-auto">
        {/* {Object.entries(logos).map(([line, images]) => (
          <div key={line} className={`grid grid-cols-${images.length}  `}>
            {images.map((logo, index) => (
              <div
                key={`${line}-${index}`}
                className="col-span-1 flex items-center justify-center  xl:px-5 py-0"
              >
                <img
                  className="object-contain xl:W-1/2 "
                  src={logo}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ))} */}

        <div className={`grid grid-cols-4  `}>
          {logos.line1.map((logo, index) => (
            <div
              key={index}
              className="col-span-1 flex  xl:w-3/4 m-auto items-center justify-center tra  xl:px-5 py-0"
            >
              <img
                className="object-cover W-1/2 "
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 ">
          {logos.line2.map((logo, index) => (
            <div
              key={index}
              className="col-span-1   xl:w-3/4 m-auto flex items-center justify-center  xl:px-5 py-0"
            >
              <img
                className="object-contain xl:W-1/2 "
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 ">
          {logos.line3.map((logo, index) => (
            <div
              key={index}
              className="col-span-1   xl:w-3/4 m-auto flex items-center justify-center  xl:px-5 py-0"
            >
              <img
                className="object-contain xl:W-1/2 "
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 ">
          {logos.line4.map((logo, index) => (
            <div
              key={index}
              className="col-span-1   xl:w-3/4 m-auto flex items-center justify-center  xl:px-5 py-0"
            >
              <img
                className="object-contain xl:W-1/2 "
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrustedBy;

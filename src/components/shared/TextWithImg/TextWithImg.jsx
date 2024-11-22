import React from "react";
import CustomParagraph from "../CustomParagraph/CustomParagraph";

function TextWithImg({ data }) {
  const { img, imgFirst, bgColor } = data;
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-1">
        {imgFirst ? (
          <>
            <div className=" col-span-1">
              <img className="w-full h-full object-cover " src={img} alt="" />
            </div>
            <div
              className={`md:col-span-3 col-span-1 flex flex-col justify-center md:ps-11 ps-5 py-10 bg-${bgColor}`}
            >
              <CustomParagraph data={data} />
            </div>
          </>
        ) : (
          <>
            <div
              className={`md:col-span-3 col-span-1 flex flex-col justify-center md:ps-11 ps-5 py-10 bg-${bgColor}`}
            >
              <CustomParagraph data={data} />
            </div>
            <div className=" col-span-1">
              <img className="w-full h-full object-cover " src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TextWithImg;

import React from "react";
import CustomParagraph from "../../shared/CustomParagraph/CustomParagraph";
import { Link } from "react-router-dom";

function SubIndustryCard({ data }) {
  const { img, imgFirst, bgColor, link } = data;

  return (
    <>
      <div className="grid md:grid-cols-6  grid-cols-1">
        {imgFirst ? (
          <>
            <div className=" col-span-2">
              <img className="w-full  object-cover h-full " src={img} alt="" />
            </div>
            <div
              className={`md:col-span-4 col-span-1 flex flex-col justify-center md:ps-11 px-10 py-10 bg-${bgColor}`}
            >
              <CustomParagraph data={data} />{" "}
              <Link to={link} className="text-mainBrown font-berlin">
                Read More
              </Link>{" "}
            </div>
          </>
        ) : (
          <>
            <div
              className={`md:col-span-4 col-span-1 flex flex-col justify-center md:ps-11 px-10 py-10 bg-${bgColor}`}
            >
              <CustomParagraph data={data} />
              <Link to={link} className="text-mainBrown font-berlin">
                Read More
              </Link>
            </div>
            <div className=" col-span-2">
              <img className="w-full h-full object-cover " src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SubIndustryCard;

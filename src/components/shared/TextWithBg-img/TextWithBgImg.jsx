import React from "react";
import CustomParagraph from "../CustomParagraph/CustomParagraph";

function TextWithBgImg({ data }) {
  const { img } = data;
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",

          backgroundSize: `100% 100%`,
        }}
        className="flex flex-col justify-center md:ps-11 ps-5 py-10"
      >
        <CustomParagraph data={data} />
      </div>
    </>
  );
}

export default TextWithBgImg;

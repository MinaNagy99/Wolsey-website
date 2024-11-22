import React from "react";

function PosterOfManagement() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/management/poster.jpg")`,
        }}
        className="flex items-center ps-10 h-[50vh] mt-28 bg-center bg-cover bg-no-repeat"
      >
        <h1 className="custom-text-xxl font-berlin">
          MANAGEMENT <br /> TEAM
        </h1>
      </div>
    </>
  );
}

export default PosterOfManagement;

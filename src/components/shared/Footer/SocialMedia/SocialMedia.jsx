import React from "react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <>
      <div className="grid grid-cols-4  justify-evenly">
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.instagram.com/wolsey_structuralengineering/"
          >
            <i className="fa-brands fa-instagram text-mainBrown rounded-full p-2 custom-text-lg border-mainBrown border-[3px]"></i>
          </Link>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.facebook.com/profile.php?id=61565888981089"
          >
            <i className="fa-brands fa-facebook text-mainBrown rounded-full p-2 custom-text-lg border-mainBrown border-[3px]"></i>
          </Link>
        </div>

        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.linkedin.com/company/wolsey-structural-engineering-ltd-/?originalSubdomain=ca"
          >
            <i className="fa-brands fa-linkedin text-mainBrown rounded-full p-2 custom-text-lg border-mainBrown border-[3px]"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;

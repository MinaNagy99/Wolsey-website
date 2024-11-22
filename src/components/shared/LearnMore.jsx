import React from "react";
import { Link } from "react-router-dom";

function LearnMore({ path }) {
  return (
    <>
      <Link to={path}>
        <p className="font-semibold flex items-center mt-2">
          <i className="fa-solid me-2 custom-text-lg text-mainGold fa-caret-right"></i>
          Learn more
        </p>
      </Link>
    </>
  );
}

export default LearnMore;

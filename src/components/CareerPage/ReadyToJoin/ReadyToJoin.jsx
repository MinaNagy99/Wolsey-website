import React from "react";

function ReadyToJoin() {
  return (
    <>
      <div className="bg-mainGray py-8">
        <div className="  w-3/4 m-auto">
          <h2 className="text-mainBrown text-center font-semibold custom-text-xl">
            Ready to Join Us?
          </h2>
          <p className="text-center mt-5">
            If you’re inspired to shape the future with a team that values
            ambition, excellence, and professional growth, Wolsey is the place
            to elevate your career. Explore our current opportunities and join a
            company that invests in your potential to drive industry evolution.
          </p>
          <div className="text-center mt-5">
            <button className="bg-mainBrown rounded-full px-8 py-2  text-white m-auto text-center">
              Become Part of Our Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyToJoin;

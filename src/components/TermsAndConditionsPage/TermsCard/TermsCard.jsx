import React from "react";

function TermsCard({ data }) {
  const { title, text, list } = data;

  return (
    <>
      <div className="py-5 px-10">
        <h2 className="font-berlin custom-text-lg text-mainBrown">{title}</h2>
        <p className="my-3">{text}</p>

        {list &&
          list.map((list, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center my-3">
                <div className="w-3 h-3 rounded-full bg-mainBrown inline-flex me-3"></div>
                <p>{list}</p>
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
}

export default TermsCard;

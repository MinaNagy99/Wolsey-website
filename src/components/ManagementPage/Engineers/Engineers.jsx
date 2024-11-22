import React from "react";

function Engineers() {
  const engieerings = [
    {
      name: "RYAN JAMES",
      position: "Office Manager",
      img: "/management/team/1.webp",
    },
    {
      name: "NATHAN MACDONALD",
      position: "Technologist",
      img: "/management/team/2.webp",
    },
    {
      name: "NILESH SHAH",
      position: "Engineer",
      img: "/management/team/3.webp",
    },

    {
      name: "ZOUHAIER HAMMADI",
      position: "Engineer",
      img: "/management/team/4.webp",
    },
    {
      name: "EVAN SHIER",
      position: "Technologist",
      img: "/management/team/5.webp",
    },
    {
      name: "RYAN RAMIREZ",
      position: "Engineer",
      img: "/management/team/6.webp",
    },
    {
      name: "DIPO ADAMS",
      position: "Engineer",
      img: "/management/team/7.webp",
    },
    {
      name: "MARK ZAPATA",
      position: "Technologist",
      img: "/management/team/8.webp",
    },
    {
      name: "VISHAL MISKIN",
      position: "Engineer",
      img: "/management/team/9.webp",
    },
    {
      name: "SUKHJEET KANG",
      position: "Engineer",
      img: "/management/team/10.webp",
    },
  ];
  return (
    <>
      <h2 className="text-mainBrown custom-text-xl text-center my-10">
        ENGINEERS AND TECHNOLOGISTS{" "}
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-20 gap-10 lg:px-20 px-5">
        {engieerings.map((engieer, index) => (
          <React.Fragment key={index}>
            <div className="col-span-1 shadow-2xl bg-white">
              <img className="" src={engieer.img} alt="" />
              <div className="p-3 ">
                <p className="font-semibold">{engieer.name}</p>
                <p className="text-sm">{engieer.position}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Engineers;

import React, { useContext } from "react";
import { navbarContext } from "../../../../context/navbarContaxt";
import { Link, useNavigate } from "react-router-dom";

function DesktopNav() {
  const {
    navbarList,
    projectsName,
    setVisibleProjects,
    visibleProjects,
    setVisibleDropdownIndex,
    visibleDropdownIndex,
  } = useContext(navbarContext);
  const navigate = useNavigate();

  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };
  return (
    <>
      <div className="flex ">
        {navbarList.map(({ name, list, path }, index) => (
          <div
            onClick={(e) => {
              e.stopPropagation();

              handleNavigate(path.page, path.section);
            }}
            key={index}
            onMouseEnter={() => {
              setVisibleDropdownIndex(index);
            }}
            onMouseLeave={() => {
              setVisibleDropdownIndex(null);
              setVisibleProjects(false);
            }}
            className=" text-sm xl:mx-2 md:mx-2 mx-1 relative hover:bg-mainBrown  xl:p-5   p-2 cursor-pointer  hover:text-white"
          >
            <div
              className={`absolute top-[100%] left-0 min-w-max bg-mainBrown !text-white ${
                visibleDropdownIndex === index ? "" : "hidden"
              }`}
            >
              {list &&
                list.map(({ name, path }, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(path.page, path.section);
                      }}
                    >
                      <div
                        className="p-5 relative cursor-pointer hover:bg-mainDark text-white"
                        onMouseEnter={() => {
                          name === "Our Projects" && setVisibleProjects(true);
                        }}
                        onMouseLeave={() => setVisibleProjects(false)}
                      >
                        {name}
                        {name === "Our Projects" && (
                          <i className="fa-solid ms-2 text-mainGold fa-caret-right"></i>
                        )}
                        {name === "Our Projects" && (
                          <div
                            className={`absolute top-0 left-full transform  bg-mainBrown w-full ${
                              visibleProjects ? "" : "hidden"
                            }`}
                          >
                            {projectsName.map((project, projectIndex) => (
                              <p
                                key={projectIndex}
                                className="p-5 hover:bg-mainDark text-white"
                              >
                                {project}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
            {name}

            {list && (
              <i className="fa-solid text-mainGold fa-caret-down ms-2"></i>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default DesktopNav;

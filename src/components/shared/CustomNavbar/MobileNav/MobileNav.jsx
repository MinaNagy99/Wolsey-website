import React, { useContext, useState } from "react";
import { navbarContext } from "../../../../context/navbarContaxt";
import "./MobileNav.css";
import { Link } from "react-router-dom";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    navbarList,
    projectsName,
    setVisibleProjects,
    visibleProjects,
    setVisibleDropdownIndex,
    visibleDropdownIndex,
  } = useContext(navbarContext);

  return (
    <>
      <i
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fa-solid ${!isMenuOpen ? "fa-grip-lines" : "fa-xmark"}`}
      ></i>
      <div
        className={`menu-container ${
          isMenuOpen ? "open" : ""
        } flex flex-col fixed top-14 w-full bg-mainBrown !text-white space-y-2`}
      >
        {navbarList.map(({ name, list, path }, index) => (
          <div
            key={index}
            onClick={() => {
              if (visibleDropdownIndex == null) {
                setVisibleDropdownIndex(index);
              } else {
                setVisibleDropdownIndex(null);
                setVisibleProjects(false);
              }
            }}
            className="relative hover:bg-blend-normal p-2 text-white"
          >
            {name}
            {list && (
              <i className="fa-solid text-mainGold fa-caret-down ms-2"></i>
            )}
            <div
              className={`absolute top-full left-0 w-full bg-mainBrown text-white transition-all duration-300 ${
                visibleDropdownIndex === index ? "relative mt-2" : "hidden"
              }`}
            >
              {list &&
                list.map(({ name }, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-3 hover:bg-mainDark  text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (name === "Our Projects") {
                        setVisibleProjects(!visibleProjects);
                      }
                    }}
                  >
                    <Link to={path}>{name}</Link>
                    {name === "Our Projects" && (
                      <i className="fa-solid ms-2 text-mainGold fa-caret-right"></i>
                    )}
                    {name === "Our Projects" && (
                      <div
                        className={`absolute top-0 w-full transform bg-mainBrown ${
                          visibleProjects ? "relative mt-2" : "hidden"
                        }`}
                      >
                        {projectsName.map((project, projectIndex) => (
                          <p
                            key={projectIndex}
                            className="p-2 hover:bg-mainDark text-white"
                          >
                            {project}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MobileNav;

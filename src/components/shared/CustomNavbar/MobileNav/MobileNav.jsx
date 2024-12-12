import React, { useContext, useState } from "react";
import { navbarContext } from "../../../../context/navbarContaxt";
import "./MobileNav.css";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };
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
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate(path.page, path.section);
              setIsMenuOpen(false);
            }}
            key={index}
            className="relative hover:bg-blend-normal p-2 text-white"
          >
            {name}
            {list && (
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  F;
                  if (visibleDropdownIndex == null) {
                    setVisibleDropdownIndex(index);
                  } else {
                    setVisibleDropdownIndex(null);
                    setVisibleProjects(false);
                  }
                }}
                className="fa-solid text-mainGold fa-caret-down ms-2"
              ></i>
            )}
            <div
              className={`absolute top-full left-0 w-full bg-mainBrown text-white transition-all duration-300 ${
                visibleDropdownIndex === index ? "relative mt-2" : "hidden"
              }`}
            >
              {list &&
                list.map(({ name, path }, itemIndex) => (
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
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(path.page, path.section);
                        setIsMenuOpen(false);
                      }}
                    >
                      {name}
                    </div>
                    {name === "Our Projects" && (
                      <i className="fa-solid ms-2 text-mainGold fa-caret-right hidden"></i>
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

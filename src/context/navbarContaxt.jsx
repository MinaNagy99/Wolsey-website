import React, { createContext, useState } from "react";

export const navbarContext = createContext(null);
function NavbarContaxtProvider({ children }) {
  const [visibleDropdownIndex, setVisibleDropdownIndex] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(false);

  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };
  const projectsName = [
    "Multifamily",
    "Retail Commercial",
    "Office Warehouse",
    "Dealerships",
    "Specialty Fabrication",
    "Municipal Institution",
    "Landscape Elements",
    "Modular Structures",
    "Single Family Residential",
  ];

  const navbarList = [
    {
      name: "About",
      list: [
        {
          name: "Mission, Vision and Values",
          path: { page: "/missionAndVision", section: "about" },
        },
        {
          name: "Founder’s Journey",
          path: { page: "/founder", section: "mission" },
        },
        {
          name: "Certifications and Awards ",
          path: { page: "/certifications-and-awards", section: "vision" },
        },
      ],
      path: { page: "/about", section: "about" },
    },
    // {
    //   name: "Management team",
    //   path: { page: "/management", section: "firstSection" },
    //   list: [
    //     {
    //       name: "Founder's Experience and Vision",
    //       path: { page: "/management", section: "founder" },
    //     },
    //     ,
    //     {
    //       name: "Engineers and Technologists",
    //       path: { page: "/management", section: "engineers" },
    //     },
    //     ,
    //   ],
    // },
    {
      name: "Services",
      path: { page: "/services", section: "firstSection" },
      list: [
        {
          name: "Structural Engineering Solutions",
          path: { page: "/solutions", section: "founder" },
        },
        ,
        {
          name: "Wolsey’s Sub-Industries",
          path: { page: "/subIndustries", section: "engineers" },
        },
        ,
      ],
    },
    {
      name: "Projects",
      path: { page: "/projects", section: "firstSection" },
    },
    // {
    //   name: "Portfolio",
    //   path: { page: "/portfolio", section: "engineers" },
    //   list: [
    //     {
    //       name: "Our structural engineering solutions",
    //       path: { page: "/portfolio", section: "solutions" },
    //     },
    //     { name: "Our Projects" },
    //   ],
    // },

    {
      name: "Career opportunities",
      path: { page: "/career", section: "engineers" },
    },
    { name: "Contact us", path: { page: "/contact-us", section: "engineers" } },
  ];
  return (
    <navbarContext.Provider
      value={{
        projectsName,
        navbarList,
        visibleDropdownIndex,
        setVisibleDropdownIndex,
        visibleProjects,
        setVisibleProjects,
      }}
    >
      {children}
    </navbarContext.Provider>
  );
}

export default NavbarContaxtProvider;

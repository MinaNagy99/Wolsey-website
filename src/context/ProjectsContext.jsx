import React, { createContext, useEffect, useState } from "react";
import projectsData from "./data/ProjectsData";

export const projectContext = createContext(null);
function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState(projectsData);
  const [subIndustriesOptions, setSubIndustriesOptions] = useState();
  const [locationOptions, setLocationOptions] = useState();
  const [industryOptions, setIndustryOptions] = useState();
  const [term, setTerm] = useState({
    name: { text: "" },
    client: { text: "" },
    industry: { text: [] },
    subIndustry: { text: [] },
    location: { text: [] },
    status: { text: "" },
  });
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const selectSubIndustries = (industry) => {
    const result = projects
      .filter((p) => industry.includes(p.industry))
      .map((p) => p.subIndustry);
    const subIndustries = [...new Set(result)].map((item) => {
      return { value: item, label: item };
    });

    setSubIndustriesOptions(subIndustries);
  };
  useEffect(() => {
    const uniqueIndustries = projects
      .map((p) => ({ value: p.industry, label: p.industry }))
      .filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.value === item.value)
      );
    const uniqueLocations = projects
      .map((p) => ({ value: p.location, label: p.location }))
      .filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.value === item.value)
      );

    setIndustryOptions(uniqueIndustries);
    setLocationOptions(uniqueLocations);
  }, [projects]);
  const projectFilter = (terms) => {
    if (terms.industry.text.length > 0) {
      selectSubIndustries(terms.industry.text);
    }
    setFilteredProjects(
      projects
        .filter((p) =>
          p.name.toLowerCase().includes(terms.name.text.toLowerCase())
        )
        .filter((p) =>
          p.client.toLowerCase().includes(terms.client.text.toLowerCase())
        )
        .filter(
          (p) =>
            terms.industry.text.length === 0 ||
            terms.industry.text.includes(p.industry)
        )
        .filter(
          (p) =>
            terms.subIndustry.text.length === 0 ||
            terms.subIndustry.text.includes(p.subIndustry)
        )
        .filter(
          (p) =>
            terms.location.text.length === 0 ||
            terms.location.text.includes(p.location)
        )
        .filter(
          (p) =>
            terms.status.text === "" || p.status.includes(terms.status.text)
        )
    );
  };

  return (
    <projectContext.Provider
      value={{
        projects,
        setProjects,
        filteredProjects,
        projectFilter,
        subIndustriesOptions,
        term,
        setTerm,
        locationOptions,
        industryOptions,
      }}
    >
      {children}
    </projectContext.Provider>
  );
}

export default ProjectsContextProvider;

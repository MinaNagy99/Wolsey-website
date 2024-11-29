import React, { createContext, useEffect, useState } from "react";
import projectsData from "./data/ProjectsData";

export const projectContext = createContext(null);
function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState(projectsData);
  const [subIndustriesOptions, setSubIndustriesOptions] = useState();
  const [industryOptions, setIndustryOptions] = useState();
  const [term, setTerm] = useState({
    name: { text: "" },
    client: { text: "" },
    industry: { text: [] },
    subIndustry: { text: "" },
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

    setIndustryOptions(uniqueIndustries);
  }, [projects]);
  const projectFilter = (terms) => {
    if (terms.industry.text != "") {
      selectSubIndustries(terms.industry.text);
    }
    const industriesTerms = terms.industry.text;
    setFilteredProjects(
      projects
        .filter((p) => p.name.includes(terms.name.text))
        .filter((p) => p.client.includes(terms.client.text))
        .filter((p) => industriesTerms.includes(p.industry))
        .filter((p) => {
          return true;
        })
    );

    const result = projects
      .filter((p) => p.name.includes(terms.name.text))
      .filter((p) => p.client.includes(terms.client.text));

    // console.log(result);

    const shared = [];
    console.log(result);

    // console.log(termsIndustry);
    // console.log(allIndustry);

    // console.log(allIndustry.filter((p) => termsIndustry.includes(p)));
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
        industryOptions,
      }}
    >
      {children}
    </projectContext.Provider>
  );
}

export default ProjectsContextProvider;

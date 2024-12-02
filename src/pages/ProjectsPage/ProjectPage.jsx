import React, { useContext, useEffect, useState } from "react";
import { projectContext } from "../../context/ProjectsContext";
import { Input, Select, Option } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { ProjectCard } from "../../components/ProjectsPage/ProjectCard/ProjectCard";
import Date from "../../components/ProjectsPage/Filteration/date/date";
import MultiSelect from "../../components/ProjectsPage/Filteration/Select/Select";
import SelectIndustry from "../../components/ProjectsPage/Filteration/Select/SelectIndustry";
import SelectSubIndustry from "../../components/ProjectsPage/Filteration/Select/SelectSubIndustry";
import SelectLocation from "../../components/ProjectsPage/Filteration/Select/SelectLocation";
import { Filteration } from "../../components/ProjectsPage/Filteration/Filtertation";

function ProjectPage() {
  const {
    projects: originalProjects,
    projectFilter,
    filteredProjects,
    term,
    setTerm,
  } = useContext(projectContext);

  useEffect(() => {
    projectFilter(term);
  }, [term, originalProjects]);
  return (
    <>
      <div className="mt-24 lg:px-20 px-8">
        <h1 className="text-mainBrown custom-text-xxl font-berlin text-center">
          Projects
        </h1>
        <hr />
        <Filteration />

        <hr />
        <div className="flex justify-center">
          <div className="space-x-8"></div>
        </div>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5">
          {filteredProjects.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <div className="col-span-1">
                  <ProjectCard project={project} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectPage;

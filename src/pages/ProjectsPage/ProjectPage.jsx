import React, { useContext, useEffect, useState } from "react";
import { projectContext } from "../../context/ProjectsContext";
import { Input, Select, Option } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { ProjectCard } from "../../components/ProjectsPage/ProjectCard/ProjectCard";
import Date from "../../components/ProjectsPage/Filteration/date/date";
import MultiSelect from "../../components/ProjectsPage/Filteration/Select/Select";
import SelectIndustry from "../../components/ProjectsPage/Filteration/Select/SelectIndustry";
import SelectSubIndustry from "../../components/ProjectsPage/Filteration/Select/SelectSubIndustry";

function ProjectPage() {
  const {
    projects: originalProjects,
    projectFilter,
    filteredProjects,
    subIndustries,
    term,
    setTerm,
  } = useContext(projectContext);

  useEffect(() => {
    projectFilter(term);
  }, [term, originalProjects]);
  return (
    <>
      <div className="mt-24 px-20">
        <h1 className="text-mainBrown custom-text-xxl font-berlin text-center">
          Projects
        </h1>
        <hr />
        <div className="grid gap-6 grid-cols-6 my-5">
          <div className="col-span-2">
            <div className=" m-auto ">
              <Input
                onChange={(e) => {
                  setTerm({
                    ...term,
                    name: { text: e.target.value },
                  });
                }}
                label="Project Name"
              />
            </div>
          </div>
          <div className="col-span-1 ">
            <Input
              onChange={(e) => {
                setTerm({
                  ...term,
                  client: { text: e.target.value },
                });
              }}
              label="Clien Name"
            />
          </div>
          <div className="col-span-1">
            <div className=" m-auto ">
              <Select
                onChange={(value) => {
                  setTerm({
                    ...term,
                    industry: { text: value },
                    subIndustry: { text: "" },
                  });
                }}
                label="Select Industry"
              >
                <Option value="">Select Industry</Option>
                <Option value="engineering">engineering</Option>
                <Option value="oil&gas">oil&gas</Option>
                <Option value="realState">realState</Option>
                <Option value="education">education</Option>
                <Option value="Structure">Structure</Option>
              </Select>
            </div>{" "}
            {/* <div className=" m-auto ">
              {subIndustries && (
                <Select
                  onChange={(value) => {
                    setTerm({
                      ...term,
                      subIndustry: { text: value },
                    });
                  }}
                  label="Select Sub Industry"
                >
                  {subIndustries.map((industry) => (
                    <Option value={industry}>{industry}</Option>
                  ))}
                </Select>
              )}
            </div> */}
          </div>

          <div className="col-span-1 flex justify-start ">
            <Checkbox label="Compeleted" />
            <Checkbox label="Pending" />{" "}
          </div>
          <div className="col-span-1 flex justify-start ">
            <Date />
            <Date />
          </div>
          <div className="col-span-4">
            <SelectIndustry />
          </div>
          <div className="col-span-4">
            <SelectSubIndustry />
          </div>
        </div>{" "}
        <hr />
        <div className="flex justify-center">
          <div className="space-x-8"></div>
        </div>
        <div className="grid gap-5 grid-cols-4 mt-5">
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

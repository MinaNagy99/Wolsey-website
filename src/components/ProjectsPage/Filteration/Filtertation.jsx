import React, { useContext, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import SelectIndustry from "./Select/SelectIndustry";
import SelectSubIndustry from "./Select/SelectSubIndustry";
import SelectLocation from "./Select/SelectLocation";
import { projectContext } from "../../../context/ProjectsContext";

export function Filteration() {
  const {
    projects: originalProjects,
    projectFilter,
    term,

    setTerm,
  } = useContext(projectContext);

  useEffect(() => {
    projectFilter(term);
  }, [term, originalProjects]);
  return (
    <>
      <div className="grid gap-6 grid-cols-6 my-5">
        <div className="lg:col-span-4 col-span-3">
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
        <div className="lg:col-span-1 col-span-3">
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

        <div className="lg:col-span-1 col-span-3 flex justify-start ">
          <Checkbox
            onChange={(e) => {
              const value = "Completed";
              setTerm({
                ...term,
                status: {
                  text: e.target.checked
                    ? [...term.status.text, value]
                    : term.status.text.filter((status) => status !== value),
                },
              });
            }}
            label="Completed"
            value="Completed"
          />
          <Checkbox
            label="Pending"
            onChange={(e) => {
              const value = "Pending";
              setTerm({
                ...term,
                status: {
                  text: e.target.checked
                    ? [...term.status.text, value]
                    : term.status.text.filter((status) => status !== value),
                },
              });
            }}
          />{" "}
        </div>
        <div className="lg:col-span-2 col-span-3">
          <SelectIndustry />
        </div>
        <div className="lg:col-span-2 col-span-3">
          <SelectSubIndustry />
        </div>
        <div className="lg:col-span-2 col-span-3">
          <SelectLocation />
        </div>
      </div>{" "}
    </>
  );
}

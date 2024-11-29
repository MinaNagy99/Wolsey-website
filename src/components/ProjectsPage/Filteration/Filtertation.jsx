import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { projectContext } from "../../../context/ProjectsContext";
export function Filteration() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [term, setTerm] = useState({
    name: { text: "" },
    client: { text: "" },
    industry: { text: "" },
    subIndustry: { text: "" },
  });
  const {
    projects: originalProjects,
    projectFilter,
    filteredProjects,
    subIndustries,
  } = useContext(projectContext);

  useEffect(() => {
    projectFilter(term);
  }, [term, originalProjects]);
  return (
    <React.Fragment>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Filter Projects{" "}
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
            Narrow down your search to find the projects that match your needs.{" "}
          </Typography>
        </div>
        <form className="flex flex-col gap-6 p-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Project Name
          </Typography>
          <Input
            onChange={(e) => {
              setTerm({
                ...term,
                name: { text: e.target.value },
              });
            }}
            label="Project Name"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Client Name
          </Typography>
          <Input
            onChange={(e) => {
              setTerm({
                ...term,
                client: { text: e.target.value },
              });
            }}
            label="Clien Name"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Industry{" "}
          </Typography>
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
              {subIndustries.map((industry, index) => (
                <Option key={index} value={industry}>
                  {industry}
                </Option>
              ))}
            </Select>
          )}
        </form>
      </Drawer>
    </React.Fragment>
  );
}

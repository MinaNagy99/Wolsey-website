import React, { useContext, useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projectContext } from "../../../context/ProjectsContext";

export function Pagination() {
  const {
    filteredProjects,
    setFilteredProjects,
    projectsPerPage,
    setPaginationProjects,
    paginationProjects,
  } = useContext(projectContext);
  const [active, setActive] = React.useState(1);
  const [numberOfPages, setNumberOfPages] = React.useState(
    Math.ceil(filteredProjects.length / projectsPerPage)
  );

  const getPaginatedProjects = (index) => {
    const start = index * projectsPerPage;
    const end = start + projectsPerPage;
    setPaginationProjects(filteredProjects.slice(start, end));
  };
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      getPaginatedProjects(index);
      setActive(index);
    },
  });

  const next = () => {
    if (active === numberOfPages) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center text-center justify-center  gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(numberOfPages)].map((page, index) => (
          <div key={index}>
            <IconButton {...getItemProps(index + 1)}>{index + 1}</IconButton>
          </div>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === numberOfPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

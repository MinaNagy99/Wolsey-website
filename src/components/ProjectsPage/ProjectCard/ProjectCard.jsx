import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function ProjectCard({ project }) {
  const { img, name, industry, subIndustry, location, status, client } =
    project;
  return (
    <Card
      shadow={false}
      className="relative grid h-[25rem] w-full items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{ backgroundImage: `url(${img})` }}
        className={`absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {name}
        </Typography>
        <Typography variant="h5" className="mb-4 text-white text-start ">
          <span className="font-semibold text-gray-400">Industry: </span>{" "}
          {industry}
        </Typography>
        <Typography variant="h5" className="mb-4 text-white  text-start">
          <span className="font-semibold text-gray-400">sub Industry: </span>{" "}
          {subIndustry}
        </Typography>
        <Typography variant="h5" className="mb-4 text-white  text-start">
          <span className="font-semibold text-gray-400">Location:</span>{" "}
          {location}
        </Typography>
        <Typography variant="h5" className="mb-4 text-white  text-start">
          <span className="font-semibold text-gray-400">Status:</span> {status}
        </Typography>
        <Typography variant="h5" className="mb-4 text-white  text-start">
          <span className="font-semibold text-gray-400">Client:</span> {client}
        </Typography>
      </CardBody>
    </Card>
  );
}

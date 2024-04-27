import React from "react";
import { mainDiv, PROJECTS } from "./Constants";
import Card from "./Card";

const Projects = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#172E4D] to-[#20385E]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Projects</h1>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 max-w-4xl sm:w-1/3 w-full mt-12 md:text-lg lg:text-xl">
        {Object.values(PROJECTS).map((data) => {
          return <Card data={data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

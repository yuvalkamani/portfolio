import React from "react";
import { mainDiv } from "./CSSConstants";

const Projects = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#172E4D] to-[#20385E]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Projects</h1>
      </div>
    </div>
  );
};

export default Projects;

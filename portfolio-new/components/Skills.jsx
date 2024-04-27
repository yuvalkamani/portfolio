import React from "react";
import { mainDiv, SKILLS } from "./Constants";
import Card from "./Card";

const Skills = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#090F26] to-[#101F38]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Skills</h1>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 max-w-4xl sm:w-1/3 w-full mt-12 md:text-lg lg:text-xl">
        {Object.values(SKILLS).map((data) => {
          return <Card data={data} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

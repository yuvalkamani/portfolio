import React from "react";
import { mainDiv, EXPERIENCE } from "./Constants";
import Card from "./Card";

const Experience = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#101F38] to-[#172E4D]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Experience
        </h1>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 max-w-4xl sm:w-1/3 w-2/3 mt-12 md:text-lg lg:text-xl hide-scrollbar">
        {Object.values(EXPERIENCE).map((data) => {
          return <Card data={data} />;
        })}
      </div>
    </div>
  );
};

export default Experience;

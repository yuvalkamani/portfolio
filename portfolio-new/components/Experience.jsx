import React from "react";
import { mainDiv } from "./CSSConstants";

const Experience = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#101F38] to-[#172E4D]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Experience
        </h1>
      </div>
      <div class="flex overflow-x-auto space-x-4 snap-x max-w-60 snap-mandatory"></div>
    </div>
  );
};

export default Experience;

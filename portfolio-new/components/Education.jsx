import React from "react";
import { mainDiv } from "./CSSConstants";

const Education = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#090F26] to-[#101F38]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Education
        </h1>
      </div>
    </div>
  );
};

export default Education;

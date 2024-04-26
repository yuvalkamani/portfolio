import React from "react";
import { mainDiv } from "./Constants";

const AboutMe = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#060314] to-[#090F26]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">About Me</h1>
        <p className="mt-6 text-base md:text-lg lg:text-xl">
          I'm Yuval, a software engineer fueled by coffee, code, and a
          never-ending educational journey, ocassionally sidetracked by
          bingewatching shows. Currently challenged everyday at UofT (can't wait
          to graduate).
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

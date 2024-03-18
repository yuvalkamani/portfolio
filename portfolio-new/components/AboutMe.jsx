import React from "react";

const AboutMe = () => {
  return (
    <div className="snap-start flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-b from-[#060314] to-[#090F26] text-white p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-left">
          About Me
        </h1>
        <p className="text-left mt-6 text-base md:text-lg lg:text-xl">
          I'm Yuval, a software engineer fueled by coffee, code, and a drive to
          create awesome things. Currently challenged everyday at UofT (can't
          wait to graduate).
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

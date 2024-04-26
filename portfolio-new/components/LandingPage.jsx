"use client";
import React from "react";
import { mainDiv } from "./Constants";

const LandingPage = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#000000] to-[#060314]`}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
        Yuval Kamani
      </h1>
      <p className="mt-6 text-base md:text-lg lg:text-xl">
        Software Engineer & Mathematician
      </p>
    </div>
  );
};

export default LandingPage;

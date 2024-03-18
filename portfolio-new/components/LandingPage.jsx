"use client";
import React from "react";
import { mainDiv } from "./CSSConstants";

const LandingPage = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#000000] to-[#060314]`}>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
        Yuval Kamani
      </h1>
      <p className="text-center text-base md:text-lg lg:text-xl">
        Software Engineer & Mathematician
      </p>
    </div>
  );
};

export default LandingPage;

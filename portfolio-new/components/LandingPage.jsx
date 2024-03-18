"use client";
import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="snap-start flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#000000] to-[#060314]">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white">
        Yuval Kamani
      </h1>
      <p className="text-center mt-6 text-base md:text-lg lg:text-xl text-white">
        Software Engineer & Mathematician
      </p>
    </div>
  );
};

export default LandingPage;

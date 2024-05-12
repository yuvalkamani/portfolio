"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const circleMotion = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, 20, 0, 20, 0],
    y: [0, 0, 0, 0, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    },
    rotate: 360,
  },
};

const squareMotion = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, -20, 0, -20, 0],
    y: [0, 0, 0, 0, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    },
    rotate: -360,
  },
};

export const Landing = () => {
  return (
    <div className="h-screen snap-start flex flex-col justify-between items-center max-h-screen max-w-screen">
      <div className="relative h-screen gap-y-4 flex flex-col justify-center px-[107px]">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold z-[99999]">
          Yuval Kamani
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl z-[99999]">
          Software Engineer & Mathematician
        </h3>
        <motion.div
          variants={circleMotion}
          initial="initial"
          animate="animate"
          className="absolute w-60 h-60 hidden sm:block left-0 skew-x-8 rounded-3xl bg-gradient-to-r from-[#f5e6ad] to-[#f13c77] blur-[45px] animate-pulse"
        />
        <motion.div
          variants={circleMotion}
          initial="initial"
          animate="animate"
          className="absolute h-64 w-64 rounded-full left-0 sm:left-1/4 bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] blur-[45px] animate-pulse"
        />
        <motion.div
          variants={squareMotion}
          initial="initial"
          animate="animate"
          className="absolute w-64 h-64 right-0 sm:right-1/4 skew-x-8 rounded-3xl bg-gradient-to-r from-[#f8acff] to-[#696eff] blur-[45px] animate-pulse"
        />
        <motion.div
          variants={squareMotion}
          initial="initial"
          animate="animate"
          className="absolute h-60 w-60 rounded-full hidden sm:block right-0 bg-gradient-to-r from-[#439cfb] to-[#f187fb] blur-[45px] animate-pulse"
        />
      </div>
      <div>
        <ChevronDown className="h-4 w-4 mb-28 sm:h-5 sm:w-5 md:h-6 md:w-6 animate-bounce" />
      </div>
    </div>
  );
};

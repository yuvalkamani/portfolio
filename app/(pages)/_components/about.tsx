"use client";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col sm:flex-row flex-wrap justify-around items-start sm:p-10"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <div className="sm:w-1/2 text-center">
        <div className="md:text-[60px] sm:text-[50px] text-[60px] font-bold sm:sticky sm:top-24">
          About
        </div>
      </div>
      <div className="sm:w-1/2 text-left sm:pr-5">
        <div className="text-[15px] text-neutral-600 dark:text-neutral-300">
          I'm Yuval, a software engineer fueled by coffee, code, and a
          never-ending educational journey, occasionally sidetracked by
          bingewatching shows (currently watching Young Sheldon). I recently
          graduated from UofT with a degree in Computer Science and Mathematics.
        </div>
        <div className="text-[15px] text-neutral-400 py-5">INTERESTS</div>
        <ul className="text-[15px] text-neutral-600 dark:text-neutral-300">
          <li>⚽️ Football</li>
          <li>🏎 Formula 1</li>
          <li>✈️ Traveling</li>
          <li>🍿 Netflix</li>
          <li>🧗🏼 Hiking</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;

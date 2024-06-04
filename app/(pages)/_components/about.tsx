"use client";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";
import { DiJava, DiNodejsSmall } from "react-icons/di";
import {
  SiC,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiHaskell,
  SiRacket,
  SiReact,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiJunit5,
  SiSwift,
  SiAndroid,
  SiXcode,
  SiGit,
  SiDocker,
  SiFigma,
  SiDrupal,
  SiAmazonaws,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ICON_SIZE = 30;

const languages = [
  { icon: <DiJava size={ICON_SIZE} />, language: "Java" },
  { icon: <SiJavascript size={ICON_SIZE} />, language: "JavaScript" },
  { icon: <SiC size={ICON_SIZE} />, language: "C" },
  { icon: <SiPython size={ICON_SIZE} />, language: "Python" },
  { icon: <SiTypescript size={ICON_SIZE} />, language: "TypeScript" },
  { icon: <SiHtml5 size={ICON_SIZE} />, language: "HTML" },
  { icon: <SiCss3 size={ICON_SIZE} />, language: "CSS" },
  { icon: <SiHaskell size={ICON_SIZE} />, language: "Haskell" },
  { icon: <SiRacket size={ICON_SIZE} />, language: "Racket" },
  { icon: <SiSwift size={ICON_SIZE} />, language: "Swift" },
];

const frameworks = [
  { icon: <RiNextjsFill size={ICON_SIZE} />, language: "Next.js" },
  { icon: <SiReact size={ICON_SIZE} />, language: "React & React Native" },
  { icon: <DiNodejsSmall size={ICON_SIZE + 5} />, language: "Node.js" },
  { icon: <SiExpress size={ICON_SIZE} />, language: "Express" },
  { icon: <SiMongodb size={ICON_SIZE} />, language: "MongoDB" },
  { icon: <SiPostgresql size={ICON_SIZE} />, language: "PostgreSQL" },
  { icon: <SiTailwindcss size={ICON_SIZE} />, language: "Tailwind CSS" },
  { icon: <SiBootstrap size={ICON_SIZE} />, language: "Bootstrap" },
  { icon: <SiJunit5 size={ICON_SIZE} />, language: "JUnit" },
  { icon: <SiAndroid size={ICON_SIZE} />, language: "Android" },
  { icon: <SiXcode size={ICON_SIZE} />, language: "XCode" },
  { icon: <SiGit size={ICON_SIZE} />, language: "Git" },
  { icon: <SiDocker size={ICON_SIZE} />, language: "Docker" },
  { icon: <SiFigma size={ICON_SIZE} />, language: "Figma" },
  { icon: <SiDrupal size={ICON_SIZE} />, language: "Drupal" },
  { icon: <SiAmazonaws size={ICON_SIZE} />, language: "AWS" },
];

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

  const animationVariants = useMemo(
    () => ({
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    }),
    []
  );

  return (
    <div className="w-full flex flex-col sm:flex-row flex-wrap justify-around custom-md:px-36 pb-12">
      <div className="sm:w-1/3 sm:text-right text-left">
        <motion.div
          className="md:text-[60px] sm:text-[50px] text-[60px] font-bold sm:sticky sm:top-24"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animationVariants}
        >
          About
        </motion.div>
      </div>
      <motion.div
        className="sm:w-1/2 text-left mt-3 pl-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <div className="text-[15px] text-neutral-500 dark:text-neutral-300">
          I am Yuval, a software engineer fueled by coffee, code, and a
          never-ending educational journey, occasionally sidetracked by
          bingewatching shows (currently watching Young Sheldon). I recently
          graduated from UofT with a degree in Computer Science and Mathematics.
        </div>
        <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-500 mt-6 mb-2" />
        <div className="text-[15px] text-neutral-400 pb-5">Interests</div>
        <ul className="text-[15px] text-neutral-500 dark:text-neutral-300">
          <li>⚽️ Football</li>
          <li>🏎 Formula 1</li>
          <li>✈️ Traveling</li>
          <li>🍿 Netflix</li>
          <li>🧗🏼 Hiking</li>
        </ul>
        <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-500 mt-6 mb-2" />
        <div className="text-[15px] text-neutral-400 pb-5">Languages</div>
        <div className="text-neutral-400 w-full flex gap-3 flex-wrap items-center">
          {languages.map((lang) => (
            <TooltipProvider key={lang.language}>
              <Tooltip>
                <TooltipTrigger className="hover:text-black dark:hover:text-white">
                  {lang.icon}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{lang.language}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <div className="text-[15px] text-neutral-400 py-5">
          Frameworks & Tools <span className="text-[10px]"></span>
        </div>
        <div className="text-neutral-400 w-full flex gap-3 flex-wrap items-center">
          {frameworks.map((framework) => (
            <TooltipProvider key={framework.language}>
              <Tooltip>
                <TooltipTrigger className="hover:text-black dark:hover:text-white">
                  {framework.icon}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{framework.language}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;

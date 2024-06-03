"use client";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
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
  SiOpenai,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const ICON_SIZE = 30;

const languages = [
  { icon: <DiJava key="java" size={ICON_SIZE} />, language: "Java" },
  {
    icon: <SiJavascript key="javascript" size={ICON_SIZE} />,
    language: "JavaScript",
  },
  { icon: <SiC key="c" size={ICON_SIZE} />, language: "C" },
  { icon: <SiPython key="python" size={ICON_SIZE} />, language: "Python" },
  {
    icon: <SiTypescript key="typescript" size={ICON_SIZE} />,
    language: "TypeScript",
  },
  { icon: <SiHtml5 key="html5" size={ICON_SIZE} />, language: "HTML" },
  { icon: <SiCss3 key="css3" size={ICON_SIZE} />, language: "CSS" },
  { icon: <SiHaskell key="haskell" size={ICON_SIZE} />, language: "Haskell" },
  { icon: <SiRacket key="racket" size={ICON_SIZE} />, language: "Racket" },
  { icon: <SiSwift key="swift" size={ICON_SIZE} />, language: "Swift" },
];

const frameworks = [
  { icon: <RiNextjsFill key="nextjs" size={ICON_SIZE} />, language: "Next.js" },
  {
    icon: <SiReact key="react" size={ICON_SIZE} />,
    language: "React & React Native",
  },
  {
    icon: <DiNodejsSmall key="nodejs" size={ICON_SIZE + 5} />,
    language: "Node.js",
  },
  { icon: <SiExpress key="express" size={ICON_SIZE} />, language: "Express" },
  { icon: <SiMongodb key="mongodb" size={ICON_SIZE} />, language: "MongoDB" },
  {
    icon: <SiPostgresql key="postgresql" size={ICON_SIZE} />,
    language: "PostgreSQL",
  },
  {
    icon: <SiTailwindcss key="tailwindcss" size={ICON_SIZE} />,
    language: "Tailwind CSS",
  },
  {
    icon: <SiBootstrap key="bootstrap" size={ICON_SIZE} />,
    language: "Bootstrap",
  },
  { icon: <SiJunit5 key="junit5" size={ICON_SIZE} />, language: "JUnit" },
  { icon: <SiAndroid key="android" size={ICON_SIZE} />, language: "Android" },
  { icon: <SiXcode key="xcode" size={ICON_SIZE} />, language: "XCode" },
  { icon: <SiGit key="git" size={ICON_SIZE} />, language: "Git" },
  { icon: <SiDocker key="docker" size={ICON_SIZE} />, language: "Docker" },
  { icon: <SiFigma key="figma" size={ICON_SIZE} />, language: "Figma" },
  { icon: <SiDrupal key="drupal" size={ICON_SIZE} />, language: "Drupal" },
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

  return (
    <div className="w-full flex flex-col sm:flex-row flex-wrap justify-around custom-md:px-36 pb-12">
      <div className="sm:w-1/2 sm:text-center text-left">
        <motion.div
          className="md:text-[60px] sm:text-[50px] text-[60px] font-bold sm:sticky sm:top-24"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
          }}
        >
          About
        </motion.div>
      </div>
      <motion.div
        className="sm:w-1/2 text-left mt-3 pl-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <div className="text-[15px] text-neutral-500 dark:text-neutral-300">
          I am Yuval, a software engineer fueled by coffee, code, and a
          never-ending educational journey, occasionally sidetracked by
          bingewatching shows (currently watching Young Sheldon). I recently
          graduated from UofT with a degree in Computer Science and Mathematics.
        </div>
        <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-500 mt-6 mb-2" />
        <div className="text-[15px] text-neutral-400 pb-5">INTERESTS</div>
        <ul className="text-[15px] text-neutral-500 dark:text-neutral-300">
          <li>⚽️ Football</li>
          <li>🏎 Formula 1</li>
          <li>✈️ Traveling</li>
          <li>🍿 Netflix</li>
          <li>🧗🏼 Hiking</li>
        </ul>
        <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-500 mt-6 mb-2" />
        <div className="text-[15px] text-neutral-400 pb-5">
          LANGUAGES <span className="text-[10px]"></span>
        </div>
        <div className="text-neutral-400 w-full flex gap-3 flex-wrap items-center">
          {languages.map((lang) => {
            return (
              <div
                key={lang.language}
                className="hover:text-black dark:hover:text-white"
              >
                {lang.icon}
              </div>
            );
          })}
        </div>
        <div className="text-[15px] text-neutral-400 py-5">
          FRAMEWORKS & TOOLS <span className="text-[10px]"></span>
        </div>
        <div className="text-neutral-400 w-full flex gap-3 flex-wrap items-center">
          {frameworks.map((framework) => {
            return (
              <div
                key={framework.language}
                className="hover:text-black dark:hover:text-white"
              >
                {framework.icon}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;

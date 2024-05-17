"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BackgroundGradient } from "@/components/ui/background-gradient";
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
import { BsFiletypeSql } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";

const CONTENTS = [
  {
    id: 0,
    title: "About Me",
    content:
      "I'm Yuval, a software engineer fueled by coffee, code, and a never-ending educational journey, occasionally sidetracked by bingewatching shows (currently watching Succession). I recently graduated from UofT with a degree in Computer Science and Mathematics.",
  },
  {
    id: 1,
    title: "Interests",
    content: [
      "⚽️ Football ",
      "🏎 Formula 1",
      "✈️ Traveling",
      "🎶 Music",
      "🍿 Netflix",
      "🧗🏼 Hiking",
    ],
    list: true,
  },
  {
    id: 2,
    title: "Languages",
    content: [
      { icon: <DiJava key="java" size={50} />, language: "Java" },
      {
        icon: <SiJavascript key="javascript" size={40} />,
        language: "JavaScript",
      },
      { icon: <SiC key="c" size={40} />, language: "C" },
      { icon: <SiPython key="python" size={40} />, language: "Python" },
      {
        icon: <SiTypescript key="typescript" size={40} />,
        language: "TypeScript",
      },
      { icon: <SiHtml5 key="html5" size={40} />, language: "HTML" },
      { icon: <SiCss3 key="css3" size={40} />, language: "CSS" },
      { icon: <SiHaskell key="haskell" size={40} />, language: "Haskell" },
      { icon: <SiRacket key="racket" size={40} />, language: "Racket" },
      { icon: <BsFiletypeSql key="sql" size={40} />, language: "SQL" },
      { icon: <SiSwift key="swift" size={40} />, language: "Swift" },
    ],
    list: true,
    icons: true,
  },
  {
    id: 3,
    title: "Frameworks & Tools",
    content: [
      { icon: <RiNextjsFill key="nextjs" size={50} />, language: "Next.js" },
      {
        icon: <SiReact key="react" size={40} />,
        language: "React & React Native",
      },
      { icon: <DiNodejsSmall key="nodejs" size={50} />, language: "Node.js" },
      { icon: <SiExpress key="express" size={40} />, language: "Express" },
      { icon: <SiMongodb key="mongodb" size={40} />, language: "MongoDB" },
      {
        icon: <SiPostgresql key="postgresql" size={40} />,
        language: "PostgreSQL",
      },
      {
        icon: <SiTailwindcss key="tailwindcss" size={40} />,
        language: "Tailwind CSS",
      },
      {
        icon: <SiBootstrap key="bootstrap" size={40} />,
        language: "Bootstrap",
      },
      { icon: <SiJunit5 key="junit5" size={40} />, language: "JUnit" },
      { icon: <SiAndroid key="android" size={40} />, language: "Android" },
      { icon: <SiXcode key="xcode" size={40} />, language: "XCode" },
      { icon: <SiGit key="git" size={40} />, language: "Git" },
      { icon: <SiDocker key="docker" size={40} />, language: "Docker" },
      { icon: <SiFigma key="figma" size={40} />, language: "Figma" },
      { icon: <SiDrupal key="drupal" size={40} />, language: "Drupal" },
      { icon: <SiOpenai key="openai" size={40} />, language: "OpenAI" },
    ],
    list: true,
    icons: true,
  },
];

export const About = () => {
  return (
    <div className="sm:h-screen w-screen sm:overflow-auto snap-start text-left p-10 sm:p-[80px] custom-md:p-16 no-scrollbar">
      <div className="flex flex-col justify-start items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:pb-10">
          {CONTENTS.map((content, idx) => {
            return (
              <BackgroundGradient
                key={content.id}
                className="rounded-2xl w-full p-7 h-full sm:p-10 bg-[#141414]"
                evenIndex={idx === 0 || idx === 1}
              >
                <p className="mt-2 mb-7 text-lg sm:text-2xl font-bold text-center">
                  {content.title}
                </p>
                <div className="text-zinc-300">
                  {content.list != undefined && content.list ? (
                    <div
                      className={`w-2/3 sm:w-2/4 ${
                        content.icons
                          ? "flex justify-around items-center flex-wrap"
                          : "text-center"
                      } gap-5 mx-auto`}
                    >
                      {content.icons ? (
                        <TooltipProvider>
                          {Array.isArray(content.content) &&
                            content.content.map((listElem, i) => {
                              return (
                                <Tooltip key={i}>
                                  <TooltipTrigger>
                                    <div>{listElem.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{listElem.language}</p>
                                  </TooltipContent>
                                </Tooltip>
                              );
                            })}
                        </TooltipProvider>
                      ) : (
                        <div>
                          {Array.isArray(content.content) &&
                            content.content.map((listElem, i) => {
                              if (typeof listElem === "string") {
                                return <ul key={i}>{listElem}</ul>;
                              }
                            })}
                        </div>
                      )}
                    </div>
                  ) : (
                    `${content.content}`
                  )}
                </div>
              </BackgroundGradient>
            );
          })}
        </div>
      </div>
    </div>
  );
};

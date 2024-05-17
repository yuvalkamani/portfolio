"use client";

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
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { BiFootball } from "react-icons/bi";

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
      <DiJava size={50} />,
      <SiJavascript size={40} />,
      <SiC size={40} />,
      <SiPython size={40} />,
      <SiTypescript size={40} />,
      <SiHtml5 size={40} />,
      <SiCss3 size={40} />,
      <SiHaskell size={40} />,
      <SiRacket size={40} />,
      <BsFiletypeSql size={40} />,
    ],
    list: true,
    icons: true,
  },
  {
    id: 3,
    title: "Frameworks",
    content: [
      <RiNextjsFill size={50} />,
      <SiReact size={40} />,
      <DiNodejsSmall size={50} />,
      <SiExpress size={40} />,
      <SiMongodb size={40} />,
      <SiPostgresql size={40} />,
      <SiTailwindcss size={40} />,
      <SiBootstrap size={40} />,
      <SiJunit5 size={40} />,
    ],
    list: true,
    icons: true,
  },
];

export const About = () => {
  return (
    <div className="sm:h-screen w-screen sm:overflow-auto snap-start text-left p-10 sm:p-[80px] custom-md:p-[150px] no-scrollbar">
      <div className="flex justify-center items-start custom-md:items-center w-full h-full">
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
                <div className="text-zinc-300 mb-7">
                  {content.list != undefined && content.list ? (
                    <div
                      className={`w-2/3 sm:w-2/4 ${
                        content.icons
                          ? "flex justify-around items-center flex-wrap"
                          : "text-center"
                      } gap-5 mx-auto`}
                    >
                      {Array.isArray(content.content) &&
                        content.content.map((listElem, i) => {
                          return <div>{listElem}</div>;
                        })}
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

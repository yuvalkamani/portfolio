"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    content: ["⚽️ Football ", "🏎 Formula 1", "✈️ Traveling", "🎶 Music"],
    list: true,
  },
  {
    id: 2,
    title: "Languages",
    content: [
      "Java",
      "C",
      "Python",
      "Javascript",
      "Typescript",
      "HTML",
      "CSS",
      "Racket",
      "Haskell",
      "SQL",
    ],
    list: true,
  },
  {
    id: 3,
    title: "Frameworks",
    content: [
      "Next.js",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "React Native",
      "PostgreSQL",
      "Tailwind CSS",
      "Bootstrap",
      "JUnit",
      "JavaFX",
    ],
    list: true,
  },
];

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const useAnimatedEntry = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls };
};

type Content = {
  id: number;
  title: string;
  content: string[] | string;
  list?: boolean;
};

type ContentCardProps = {
  content: Content;
  index: number;
};

const ContentCard: React.FC<ContentCardProps> = ({ content, index }) => {
  const { ref, controls } = useAnimatedEntry();

  return (
    <motion.div
      key={content.id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideUpVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card
        className={`border border-transparent border-t-[1px] h-fit ${
          index === 0 || index === 1
            ? "border-t-purple-500"
            : "border-t-orange-500"
        }`}
      >
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl custom-md:text-5xl">
            {content.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-base custom-md:text-xl sm:text-lg">
          {content.list != undefined && content.list ? (
            <ul>
              {Array.isArray(content.content) &&
                content.content.map((listElem, i) => {
                  return <li key={i}>{listElem}</li>;
                })}
            </ul>
          ) : (
            `${content.content}`
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const About = () => {
  return (
    <div className="overflow-scroll md:overflow-hidden snap-start text-center sm:text-left gap-3 p-12 sm:p-[90px] custom-md:p-[130px] grid grid-cols-1 sm:grid-cols-2 no-scrollbar">
      {CONTENTS.map((content, index) => (
        <ContentCard content={content} index={index} key={content.id} />
      ))}
    </div>
  );
};

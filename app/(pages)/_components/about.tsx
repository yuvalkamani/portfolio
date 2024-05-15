"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <Card
      className={`border border-transparent border-t-2 h-fit ${
        index === 0 || index === 1
          ? "border-t-purple-500"
          : "border-t-orange-500"
      } ${index === CONTENTS.length - 1 && "sm:pb-12"}`}
    >
      <CardHeader>
        <CardTitle className="text-zinc-100">{content.title}</CardTitle>
      </CardHeader>
      <CardContent className="leading-relaxed tracking-wide text-zinc-300">
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
  );
};

export const About = () => {
  return (
    <div className="sm:h-screen w-screen sm:overflow-auto md:overflow-hidden snap-start text-center sm:text-left gap-3 p-12 sm:p-[90px] custom-md:p-[130px] grid grid-cols-1 sm:grid-cols-2 no-scrollbar">
      {CONTENTS.map((content, index) => (
        <ContentCard content={content} index={index} key={content.id} />
      ))}
    </div>
  );
};

import React from "react";
import { mainDiv } from "./CSSConstants";

const Skills = () => {
  return (
    <div className={`${mainDiv} bg-gradient-to-b from-[#090F26] to-[#101F38]`}>
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Skills</h1>
      </div>
      <div className="flex flex-wrap max-w-4xl w-full mt-6 md:text-lg lg:text-xl">
        <div className="w-1/3">
          <div className="font-bold">Languages</div>
          <ul className="mt-6">
            <li>Java</li>
            <li>C</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Racket</li>
            <li>Haskell</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="w-1/3 md:text-base lg:text-lg">
          <div className="font-bold">Frameworks</div>
          <ul className="mt-6">
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>React Native</li>
            <li>PostgreSQL</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>JUnit</li>
            <li>JavaFX</li>
          </ul>
        </div>
        <div className="w-1/3 md:text-base lg:text-lg">
          <div className="font-bold">Developer Tools</div>
          <ul className="mt-6">
            <li>Git</li>
            <li>Docker</li>
            <li>Android</li>
            <li>Bash</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

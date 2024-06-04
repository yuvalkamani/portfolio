"use client";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
  {
    title:
      "iOS & Swift - The Complete iOS App Development Bootcamp (in progress)",
    description:
      "A complete iOS Developer bootcamp consisting of 15 iOS applications.",
    link: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
    tech: "Swift, Xcode, UIKit, SwiftUI, ARKit, CoreML, CoreData",
  },
  {
    title: "nexa. (in progress)",
    description:
      "A complete full stack Notion clone that replicates all core functionalities, including workspace customization, rich text editing, and database management.",
    link: "https://github.com/yuvalkamani/nexa.",
    tech: "Next.js, TypeScript, Convex, Clerk, Tailwind CSS, shadcn",
  },
  {
    title: "StackExchange API in LangChain AI (Merged)",
    description:
      "Integrated the StackExchange API into the LangChain AI open source project, enabling seamless retrieval of question-and-answer data from StackExchange sites.",
    link: "https://github.com/langchain-ai/langchain/pull/14002",
    tech: "Python, StackExchange API",
  },
  {
    title: "RateMy",
    description:
      "A full stack web application for University of Toronto students to share anonymous feedback on university courses and professors. Basically Rate My Professors but for courses.",
    link: "https://github.com/yuvalkamani/ratemy",
    tech: "React, Express, Node.js, MongoDB, Tailwind CSS, OpenAI API, Auth0, Stripe, Chart.js",
  },
  {
    title: "Trade-AI",
    description:
      "An AI system that utilizes real-time news analysis to make informed trading decisions and automatically execute trades on the Alpaca Trading platform.",
    link: "https://github.com/yuvalkamani/Trade-AI",
    tech: "Node.js, OpenAI API, Web Sockets",
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website showcases my skills, projects, and professional experience with a visulaization of my frontend and designing capabilities.",
    link: "https://github.com/yuvalkamani/portfolio",
    tech: "Next.js, TypeScript, Tailwind CSS, shadcn",
  },
  {
    title: "rflect.",
    description:
      "A native journalling application to easily capture and organize your thoughts, emotions, and experiences on your phone.",
    link: "https://github.com/yuvalkamani/rflect-mobile",
    tech: "React Native",
  },
  {
    title: "FitHub",
    description:
      "A full stack social fitness application to promote a healthier and more physical lifestyle through logging and planning with friends anf family.",
    link: "",
    tech: "React, Express, Node,js, MongoDB, Tailwind CSS, Git, Figma",
  },
  {
    title: "Zoomer",
    description:
      "A Java-based Uber Clone designed with extensive functionality, incorporating multiple interconnected databases using microservices.",
    link: "https://github.com/yuvalkamani/zoomer-uber-clone",
    tech: "Java, Docker, PostgreSQL, MongoDB, Neo4j, API Gateway",
  },
  {
    title: "Crypto Tracker",
    description:
      "A cryptocurrency tracker that leverages a public API to showcase real-time prices and trading analysis.",
    link: "https://github.com/yuvalkamani/cryptocurrency-tracker",
    tech: "React, CSS, CoinGecko API",
  },
  {
    title: "Doctor Appointment Application",
    description:
      "An Android application for users and doctors to book, reschedule and modify appointments with doctors.",
    link: "https://github.com/yuvalkamani/B07MedicalApp",
    tech: "Java, Android Studio, XML, Firebase, JUnit, Mockito",
  },
];

const Projects = () => {
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
    <div className="w-full flex flex-col sm:flex-row flex-wrap justify-around pb-12 custom-md:px-36">
      <div className="sm:w-1/3 sm:text-right text-left">
        <motion.div
          className="md:text-[60px] sm:text-[50px] text-[60px] font-bold sm:sticky sm:top-24"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animationVariants}
        >
          Projects
        </motion.div>
      </div>
      <motion.div
        className="sm:w-1/2 text-left mt-3"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <HoverEffect items={projects} project={true} />
      </motion.div>
    </div>
  );
};

export default Projects;

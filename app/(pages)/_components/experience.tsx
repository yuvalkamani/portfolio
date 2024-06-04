"use client";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const experience = [
  {
    title: "Programming Engineer",
    link: "",
    tech: "Siemens | Jan. 2023 - Present",
    description:
      "Developed custom digital forms and workflow automation solutions that streamlined maintenance operations, reducing errors and increasing efficiency. Nominated for the Siemens 2023 Excellence Award.",
  },
  {
    title: "Teaching Assistant",
    link: "",
    tech: "University of Toronto | Jan. 2022 - May. 2024",
    description:
      "Conducted interactive tutorials and review seminars, effectively explaining complex concepts to hundreds of students, significantly improving their performance and preparedness.",
  },
  {
    title: "Web Administrator",
    link: "",
    tech: "University of Toronto Scarborough | May 2022 - Sep. 2022",
    description:
      "Led website migrations and performance upgrades while delivering visually appealing designs and ensuring comprehensive quality through automated testing.",
  },
  {
    title: "Director of Technology",
    link: "",
    tech: "MTA | Sep. 2023 - May 2024",
    description:
      "Managed the technical aspect of webinars and competitions, streamlining operations, enhancing participant experience through innovative solutions, and creating a collaborative team environment to deliver high-quality events.",
  },
  {
    title: "Web Development Specialist",
    link: "",
    tech: "SIG | Sep. 2021 - May 2023",
    description:
      "Designed and developed websites leveraging external resources, including a high-traffic platform for a major case competition, collaborating with associations to improve user experience, drive sales, and achieve a 400% increase in website traffic.",
  },
];

const Experience = () => {
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
          Experience
        </motion.div>
      </div>
      <motion.div
        className="sm:w-1/2 text-left mt-3"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <HoverEffect
          items={experience}
          className="grid grid-cols-1 xl:grid-cols-1"
        />
      </motion.div>
    </div>
  );
};

export default Experience;

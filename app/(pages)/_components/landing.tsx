"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { RiCalendarScheduleFill } from "react-icons/ri";
import DarkModeToggle from "./dark-mode-toggle";

const Landing = () => {
  return (
    <motion.div
      className="h-screen w-screen flex flex-col-reverse sm:flex-row items-center justify-center gap-10 md:justify-center sm:justify-around p-10 no-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center sm:text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="md:text-[60px] sm:text-[50px] text-[60px] font-bold">
            Yuval <span className="hidden sm:inline-block">Kamani</span>
          </div>
          <div className="text-[30px] text-neutral-500">
            Software Engineer
            <span className="text-[17px] text-neutral-400 hidden sm:block">
              {" "}
              (and Mathematician).
            </span>
          </div>
          <div className="text-[17px] text-neutral-400 sm:hidden">
            (and Mathematician).
          </div>
          <div className="text-[15px] text-neutral-400 pt-3">
            I like designing and solving things.
          </div>
          <div className="text-neutral-400 flex gap-5 sm:gap-3 justify-center sm:justify-end items-center text-[12px] py-5 sm:pt-2">
            <DarkModeToggle />
            <div className="w-[1px] h-[25px] bg-neutral-400" />
            <Link
              target="_blank"
              href="https://github.com/yuvalkamani"
              className="hover:text-black dark:hover:text-white"
            >
              <SiGithub size={25} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ykamani/"
              className="hover:text-black dark:hover:text-white"
            >
              <SiLinkedin size={25} />
            </Link>
            <Link
              target="_blank"
              href="mailto:yuvalkamani@gmail.com"
              className="hover:text-black dark:hover:text-white"
            >
              <SiGmail size={25} />
            </Link>
            <Link
              target="_blank"
              href="https://calendly.com/yuvalkamani/meeting"
              className="hover:text-black dark:hover:text-white"
            >
              <RiCalendarScheduleFill size={25} />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-[2px] sm:h-[80px] md:h-[150px] bg-neutral-400 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="w-3/4 h-[2px] bg-neutral-400 sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/2.png"
          alt="memoji"
          width={200}
          height={200}
          className="w-[225px] h-[225px] sm:w-[170px] sm:h-[170px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px] dark:hidden object-contain"
        />
        <Image
          src="/2-dark.png"
          alt="memoji"
          width={200}
          height={200}
          className="w-[225px] h-[225px] sm:w-[170px] sm:h-[170px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px] hidden dark:block object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default Landing;

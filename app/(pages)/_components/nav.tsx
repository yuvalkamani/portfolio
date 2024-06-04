"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import DarkModeToggle from "./dark-mode-toggle";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolledPastThreshold(latest > window.innerHeight - 200);
  });

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: isScrolledPastThreshold ? 0 : -200 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 w-full flex justify-between items-center bg-white dark:bg-black p-4 shadow-lg dark:shadow-neutral-900 z-50"
    >
      <div className="flex gap-2 sm:gap-3 items-center">
        <Image
          src="/1.png"
          alt="memoji"
          width={50}
          height={50}
          className="dark:hidden object-contain"
        />
        <Image
          src="/1-dark.png"
          alt="memoji"
          width={50}
          height={50}
          className="dark:block hidden object-contain"
        />
        <div className="h-[40px] w-[1px] bg-neutral-300" />
        <div>
          <div className="text-base">Yuval Kamani</div>
          <div className="text-xs text-neutral-400">Software Engineer</div>
        </div>
      </div>
      <div className="flex gap-3 items-center text-neutral-400">
        <DarkModeToggle />
        <div className="w-[1px] h-[25px] bg-neutral-400 hidden sm:block" />
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
    </motion.div>
  );
};

export default Navbar;

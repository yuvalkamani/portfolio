"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolledPastThreshold(latest > window.innerHeight);
  });

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: isScrolledPastThreshold ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 flex justify-between items-center w-full p-4 bg-white shadow-lg z-50"
    >
      <div className="flex gap-2 items-center">
        <Image
          src="/2.png"
          alt="memoji"
          width={50}
          height={50}
          objectFit="contain"
        />
        <div>
          <div className="text-base">Yuval Kamani</div>
          <div className="text-xs text-neutral-500">Software Engineer</div>
        </div>
      </div>
      <div className="flex gap-2 items-center text-neutral-500">
        <Link
          target="_blank"
          href="https://github.com/yuvalkamani"
          className="hover:text-black"
        >
          <SiGithub size={20} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/ykamani/"
          className="hover:text-black"
        >
          <SiLinkedin size={20} />
        </Link>
        <Link
          target="_blank"
          href="mailto:yuvalkamani@gmail.com"
          className="hover:text-black"
        >
          <SiGmail size={20} />
        </Link>
        <Link
          target="_blank"
          href="https://calendly.com/yuvalkamani/meeting"
          className="hover:text-black"
        >
          <RiCalendarScheduleFill size={20} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;

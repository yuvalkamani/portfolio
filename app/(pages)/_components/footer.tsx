import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiSwift,
  SiAmazonaws,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Link from "next/link";

const ICON_SIZE = 25;

const learning = [
  { icon: <SiSwift size={ICON_SIZE} />, language: "Swift" },
  { icon: <SiAmazonaws size={ICON_SIZE} />, language: "AWS" },
];

const Footer = () => {
  return (
    <div className="w-full h-fit rounded-xl bg-neutral-100 dark:bg-[#0b0b0b] text-neutral-400">
      <div className="flex flex-col w-full p-4 sm:p-12 gap-12">
        <div className="flex justify-between sm:flex-row flex-col gap-5">
          <div className="flex flex-col gap-3 items-start">
            <div>Get in touch</div>
            <div className="flex gap-3 items-center">
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
          <div className="flex flex-col gap-3 sm:items-end items-start">
            <div>Currently learning</div>
            <div className="flex gap-3 items-center">
              {learning.map((lang) => (
                <TooltipProvider key={lang.language}>
                  <Tooltip>
                    <TooltipTrigger className="hover:text-black dark:hover:text-white">
                      {lang.icon}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{lang.language}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div>Version</div>
            <div className="font-normal">2024</div>
          </div>
          <div className="flex flex-col items-end">
            <div>
              Made with love
              <span className="sm:hidden">,</span>
              <span className="sm:inline-block hidden">
                &nbsp;(and my insane frontend skills),
              </span>
            </div>
            <div className="font-normal">Yuval Kamani</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

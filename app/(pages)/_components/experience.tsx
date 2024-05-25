import { StickyScroll } from "@/components/ui/stick-scroll-reveal";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

const CONTENT = [
  {
    title: "Programming Engineer - Siemens",
    description: "January 2023 - Present",
    content: (
      <div className="h-full w-full">
        <Image
          src="/siemens.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Web Administrator - UTSC",
    description: "May 2022 - September 2022",
    content: (
      <div className="h-full w-full">
        <Image
          src="/utsc.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Teaching Assistant - UofT",
    description: "January 2022 - May 2024",
    content: (
      <div className="h-full w-full">
        <Image
          src="/uoft.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Director of Technology - MTA",
    description: "September 2023 - May 2024",
    content: (
      <div className="h-full w-full">
        <Image
          src="/mta.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Web Dev Specialist - SIG",
    description: "September 2021 - May 2023",
    content: (
      <div className="h-full w-full">
        <Image
          src="/sig.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full">
        <Image
          src="/sig.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full">
        <Image
          src="/sig.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full">
        <Image
          src="/sig.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const Experience = () => {
  return (
    <div className="sm:h-screen w-screen sm:overflow-auto snap-start text-left py-10 sm:py-[80px] custom-md:py-16 no-scrollbar relative">
      <div className="flex flex-col justify-between items-center z-10 relative">
        <BackgroundBeams className="absolute -z-40" />
        <h1 className="text-3xl sm:text-4xl custom-md:text-5xl font-bold">
          Experience
        </h1>
        <div className="sm:pt-20">
          <StickyScroll content={CONTENT} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

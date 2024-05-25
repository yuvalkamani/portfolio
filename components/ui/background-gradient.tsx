import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  evenIndex,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  evenIndex?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-[18px] z-[1] opacity-20 group-hover:opacity-100 blur-2xl transition duration-500 will-change-transform",
          evenIndex && "bg-gradient-to-r from-[#439cfb] to-[#f187fb]",
          !evenIndex && "bg-gradient-to-r from-[#ff0f7b] to-[#f89b29]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-[18px] opacity-80 z-[1] will-change-transform",
          evenIndex && "bg-gradient-to-r from-[#439cfb] to-[#f187fb]",
          !evenIndex && "bg-gradient-to-r from-[#ff0f7b] to-[#f89b29]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

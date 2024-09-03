"use client";

import { motion, SVGMotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";

interface LogoProps extends SVGMotionProps<SVGSVGElement> {}

export const LogoAnimated: React.FC<LogoProps> = (props: LogoProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <motion.svg
      width={200}
      height={100}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100%" height="100%" fill="#000" />
      <motion.text
        x={10}
        y={60}
        fontFamily="Inter, sans-serif"
        fontSize={24}
        fill="#00FF00"
        initial={{ x: -200, opacity: 1 }}
        animate={{ x: 10 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <tspan fontWeight="bold" fill="#00FF00">
          {"<Algorithms/>"}
        </tspan>
      </motion.text>
    </motion.svg>
  );
};

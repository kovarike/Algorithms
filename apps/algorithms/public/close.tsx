import { motion } from "framer-motion";
import React from "react";

export const Close: React.FC = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      initial={{ rotate: 0, scale: 1 }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </motion.svg>
  );
};

"use client";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingProps {
  layoutId: string;
  messagem: string;
}

export const Loading = ({ layoutId, messagem }: LoadingProps) => {
  return (
    <div className="flex items-center justify-center bg-transparant fixed inset-0 z-10 pointer-events-none">
      <AnimatePresence>
        <motion.div
          layoutId={layoutId}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="p-6 bg-blue-500 rounded-lg shadow-lg"
        >
          <motion.h2 className="text-white text-lg">{messagem}</motion.h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

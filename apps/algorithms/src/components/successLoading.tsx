"use client";
import { motion, AnimatePresence } from "framer-motion";

interface SuccessLoadingProps {
  layoutId: string;
  messagem: string;
}

export const SuccessLoading = ({ layoutId, messagem }: SuccessLoadingProps) => {
  return (
    <div className="flex items-center justify-center bg-transparant fixed inset-0 z-10 pointer-events-none">
      <AnimatePresence>
        <motion.div
          layoutId={layoutId}
          className="p-6 bg-algorithms-color rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <motion.h2 className="text-white text-lg">{messagem}</motion.h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

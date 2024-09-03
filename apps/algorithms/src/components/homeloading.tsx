"use client";
import { AnimatePresence } from "framer-motion";
import { LogoAnimated } from "../../public/logoanimated";

export function HomeLoading() {
  return (
    <div className="flex items-center justify-center fixed inset-0 z-10 bg-black pointer-events-none">
      <AnimatePresence>
        <LogoAnimated />
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function ArrowButton({ children, addClass, onClick }) {
  return (
    <motion.button
      animate={{
        rotate: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeInOut" }, // Return timing
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.7, bounce: 0.3 },
      }}
      whileTap={{
        scale: 0.97,
        transition: { duration: 0.3 },
      }}
      className={`bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md ${addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

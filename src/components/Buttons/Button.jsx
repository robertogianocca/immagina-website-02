"use client";

import { motion } from "framer-motion";

export default function Button({ children, addClass, onClick }) {
  return (
    <motion.button
      animate={{
        rotate: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeInOut" }, // Return timing
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.7, bounce: 0.3 },
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.3 },
      }}
      className={`bg-stone-50  text-slate-400 hover:text-slate-500 shadow-button rounded-md flex items-center justify-center hover:shadow-buttonTwo transition-shadow active:text-slate-500 active:shadow-buttonTwo ${addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

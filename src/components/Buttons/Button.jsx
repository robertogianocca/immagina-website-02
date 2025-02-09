"use client";

import { motion } from "framer-motion";

export default function Button({ children, addClass, onClick = () => {} }) {
  return (
    <motion.button
      animate={{
        rotate: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeInOut" }, // Return timing
      }}
      whileHover={{
        scale: 1.07,
        transition: { duration: 0.4, bounce: 0.3 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      className={`h-full bg-stone-50 text-slate-400 transition-shadow duration-4000 shadow-button rounded-md flex items-center justify-center hover:shadow-buttonHover active:shadow-buttonActive  ${addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

"use client";
import Link from "next/link";
import Triangle from "@/components/Icons/Triangle";
import { motion } from "framer-motion";

export default function Path({ pathTree, categoriesFromPath }) {
  //   --------------------------------- PATHS ---------------------------------

  const mappedPath = pathTree.map((item, index) => (
    <motion.div
      key={index}
      className="opacity-85 hover:opacity-100"
      animate={{
        rotate: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeInOut" }, // Return timing
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.4, bounce: 0.3 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      <Link
        href={`/cultura/${categoriesFromPath.slice(0, index + 1).join("/")}`}
        className="flex items-center"
      >
        <Triangle
          color={
            index == 0
              ? "border-l-customRed border-l-[13px] border-b-[13px]"
              : "border-l-customGreen border-l-[13px] border-b-[13px]"
          }
        />
        <p className="pl-[1.5px] pr-3">{item}</p>
      </Link>
    </motion.div>
  ));
  return <div className="flex items-center font-courier font-semibold pb-1">{mappedPath}</div>;
}

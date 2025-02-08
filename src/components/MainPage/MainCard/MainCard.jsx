// MAIN CARD

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MainCard({
  title = "",
  description = "",
  cover = "/",
  logo = "",
  titleColor = "",
}) {
  return (
    <Link href={`/${title}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        className="w-full relative flex flex-col bg-zinc-50 p-2 sm:p-4 lg:p-3 xl:p-6 shadow-xl shadow-slate-400 hover:shadow-slate-500 transition-shadow"
      >
        <div className="flex flex-row xl:flex-col gap-x-3 lg:gap-x-0 justify-between lg:justify-normal">
          {/* ---------- TESTI ---------- */}
          <div className="flex flex-wrap w-[900px] xl:w-full">
            {/* ---------- LOGO, TITOLO ---------- */}
            <div className="flex flex-col xl:flex-row xl:flex-wrap xl:mb-6 xl:mt-[-10px] xl:gap-x-3">
              <Image src={logo} width={210} height={210} alt="Logo IMMAGINA" />
              <h3
                className={`font-courier text-lg sm:text-xl xl:text-2xl mt-2 lg:mt-3 mb-6 lg:mb-0   ${titleColor}`}
              >
                {title}
              </h3>
            </div>
            {/* ---------- DESCRIZIONE ---------- */}
            <p className={`text-xs sm:text-base lg:text-sm lg:mb-3 ${titleColor}`}>{description}</p>
          </div>
          {/* ---------- IMMAGINE ---------- */}
          <div>
            <Image src={cover} width={600} height={600} alt="Category Cover" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

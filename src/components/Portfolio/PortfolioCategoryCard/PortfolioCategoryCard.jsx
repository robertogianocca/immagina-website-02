// CATEGORY CARD

"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, easeIn } from "framer-motion";

export default function PortfolioCategoryCard({
  title = "No title available",
  shortDescription = "No short description available",
  cover = "/images/samples/01.jpg",
  coverAlt = "Image",
  labelColor = "border-l-customRed",
  hrefLink = "",
}) {
  return (
    <motion.li
      className="origin-top-left list-none"
      initial={{ rotate: 3 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 2, delay: 0, type: "spring", bounce: 0.2 }}
    >
      <motion.div
        animate={{
          rotate: 0,
          scale: 1,
          transition: { duration: 0.7, ease: "easeInOut" }, // Return timing
        }}
        whileHover={{
          rotate: 0.9,
          scale: 1.02,
          transition: { duration: 0.7, bounce: 0.3 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 2 },
        }}
      >
        <Link href={hrefLink}>
          <div className="group w-full h-full relative flex flex-col gap-2 lg:gap-y-4 p-5 xl:p-6 bg-zinc-50 shadow-xl transition-all duration-1000 hover:shadow-slate-600 shadow-slate-400">
            <div
              className={`absolute left-0 top-0 pr-1 w-0 h-0 border-l-[28px] border-b-[28px] border-b-transparent border-t-transparent ${labelColor}`}
            ></div>
            <h2 className="font-courier font-bold text-lg xl:text-xl">{title}</h2>
            {/* ---------- SHORT DESCRIPTION DESKTOP  ----------  */}
            <div className="hidden md:block md:min-h-[7rem] lg:min-h-[7rem] xl:min-h-[7rem] text-xs xl:text-xs pb-4 font-semibold opacity-85">
              {shortDescription}
            </div>
            <div className="group-hover:saturate-[1.1] flex flex-col gap-2 lg:gap-4">
              <Image src={cover} width={600} height={600} quality={50} alt={coverAlt} />
            </div>
            {/* ---------- SHORT DESCRIPTION MOBILE  ----------  */}
            <div className="md:hidden min-h-[7rem] text-2xs pb-2 pt-2 font-semibold opacity-85">
              {shortDescription}
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  );
}

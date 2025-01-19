"use client";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import ArrowButton from "@/components/Buttons/ArrowButton";
import Thumbnails from "./Thumbnails/Thumbnails";
import { FaArrowLeft } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { MdOutlineFullscreen } from "react-icons/md";
import { motion } from "framer-motion";

export default function PortfolioGallerySideBar({
  title,
  shortDescription,
  picturesList,
  mappedPath,
  setIndex,
  currentIndex,
  back,
}) {
  //   --------------------------------- ARROWS FUNCTION ---------------------------------
  function nextImage() {
    currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
  }
  function previousImage() {
    currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
  }

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.4, type: "spring", bounce: 0.2 }}
      className="fixed h-full w-[300px] flex flex-col justify-between overflow-auto p-5 pb-[70px]bg-stone-100 text-customBrown"
    >
      {/* ------ HOME, BACK BUTTONS, LOGO ------ */}
      <div className="flex flex-row gap-3 pb-4">
        <Link href={`/cultura/${back.join("/")}`}>
          <Button addClass="p-2 text-slate-400">
            <FaArrowLeft size={25} />
          </Button>
        </Link>
        <Link href="/cultura">
          <Button addClass="p-2 text-slate-400">
            <TiHome size={25} />
          </Button>
        </Link>
      </div>
      {/* ------ PATH, TITLE, DESCRIPTION ------ */}
      <div className="pb-6">
        <div className="flex items-center font-courier font-semibold">{mappedPath}</div>
        <div className="border-t-4 border-red-600">
          <h1 className="text-lg font-bold font-courier mb-5">{title}</h1>
          <div className="text-xs">{shortDescription}</div>
          <Button addClass="p-1 px-2 text-stone-600 text-xs">{"Read more >"}</Button>
        </div>
      </div>
      {/* ------ ARROW, INDEX, CAPTION ------ */}
      <div>
        <div className="grid grid-cols-2 gap-4 font-courier font-bold">
          {/* Left Arrow */}
          <ArrowButton className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center h-[65px] rounded-md">
            <p className="font-courier font-bold text-4xl ">{"<"}</p>
          </ArrowButton>
          {/* Right Arrow */}
          <ArrowButton
            onClick={nextImage}
            className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md"
          >
            <p className="text-4xl">{">"}</p>
          </ArrowButton>
          {/* Index */}
          <h1 className="bg-zinc-150 text-stone-600 h-[65px] flex items-center justify-center rounded-xl">{`${
            currentIndex + 1
          } / ${picturesList.length}`}</h1>
          {/* Full Screen */}
          <ArrowButton
            // onClick={handleFullscreen}
            className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md"
          >
            <MdOutlineFullscreen size={40} />
          </ArrowButton>
        </div>
        <div className="h-[40px] my-6 bg-customGrey p-2 rounded-md  flex">
          <p className="text-xs italic font-semibold">
            {picturesList[currentIndex].shortDescription}
          </p>
        </div>
      </div>
      <Thumbnails picturesList={picturesList} setIndex={setIndex} currentIndex={currentIndex} />
    </motion.aside>
  );
}

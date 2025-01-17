"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import { FaArrowLeft } from "react-icons/fa";

export default function PortfolioGallery({
  currentCategoryPortfolio,
  title,
  shortDescription,
  longDescription,
  mappedPath,
}) {
  const [currentIndex, setIndex] = useState(1);
  const [imageQuality, setImageQuality] = useState(2);

  const picturesList = currentCategoryPortfolio.images.pictures;

  // Image quality setting
  const handleImageLoad = () => {
    setImageQuality(70);
  };

  return (
    <div className="flex h-screen w-full">
      {/* -------------------- SIDEBAR -------------------- */}
      <aside className="fixed h-full w-[300px] p-5 bg-stone-100 text-customBrown">
        {/* ------ HOME, BACK BUTTONS, LOGO ------ */}
        <div>
          <Button addClass="p-2 text-slate-400">
            <FaArrowLeft size={25} />
          </Button>
        </div>
        <div className="flex items-center font-courier font-semibold">{mappedPath}</div>
        <div className="border-t-4 border-red-600">
          <h1 className="text-lg font-bold font-courier mb-5">{title}</h1>
          <div className="text-xs">{shortDescription}</div>
        </div>
      </aside>
      {/* ---------- IMAGE CONTAINER ---------- */}
      <div className="ml-[300px] p-4 pl-10 pb-10 bg-customWhite">
        <div className="flex items-center w-full h-full">
          <Image
            priority={true}
            src={picturesList[currentIndex].url}
            alt={picturesList[currentIndex].alt || { title }}
            width={picturesList[currentIndex].width}
            height={picturesList[currentIndex].height}
            className="object-contain max-w-full max-h-full "
            onLoad={handleImageLoad}
            quality={imageQuality}
            sizes="(max-width: 1200px) 100vw, 70vw"
          />
        </div>
      </div>
    </div>
  );
}

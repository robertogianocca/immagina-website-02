"use client";
import { useState } from "react";
import Image from "next/image";
import PortfolioGallerySideBar from "./PortfolioGallerySideBar/PortfolioGallerySideBar";

export default function PortfolioGallery({
  currentCategoryPortfolio,
  title,
  shortDescription,
  longDescription,
  pathTree,
  categoriesFromPath,
}) {
  const picturesList = currentCategoryPortfolio.images.pictures;
  const [currentIndex, setIndex] = useState(0);
  const [imageQuality, setImageQuality] = useState(1);

  //   --------------------------------- THUMBNAILS ---------------------------------
  function selectThumbnail(index) {
    setIndex(index);
  }
  // Image quality setting
  const handleImageLoad = () => {
    setImageQuality(70);
  };
  const mappedImagestwo = picturesList.map((item, index) => {
    return (
      <div className="relative aspect-square bg-blue-200" key={index}>
        <button onClick={() => selectThumbnail(index)}>
          <Image src={item.url} alt="" quality={1} fill className="object-cover" />
        </button>
      </div>
    );
  });
  return (
    <div className="flex h-screen w-full bg-customWhite">
      {/* -------------------- SIDEBAR -------------------- */}
      <PortfolioGallerySideBar
        title={title}
        shortDescription={shortDescription}
        picturesList={picturesList}
        setIndex={setIndex}
        currentIndex={currentIndex}
        pathTree={pathTree}
        categoriesFromPath={categoriesFromPath}
      />

      {/* ---------- IMAGE CONTAINER ---------- */}
      <div className="ml-[300px] p-4 pl-10 pb-10">
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

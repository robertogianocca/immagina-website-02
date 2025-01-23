"use client";
import { useState } from "react";
import Image from "next/image";
import PortfolioGallerySideBar from "./PortfolioGallerySideBar/PortfolioGallerySideBar";
import PortfolioGalleryMobileHeader from "./PortfolioGalleryMobileHeader/PortfolioGalleryMobileHeader";

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
  const mobileGallery = picturesList.map((item, index) => {
    return (
      <Image
        key={index}
        className="pb-10"
        src={picturesList[index].url}
        alt={picturesList[index].alt}
        width={picturesList[index].width}
        height={picturesList[index].height}
        sizes="(max-width: 1200px) 100vw, 70vw"
        priority={true}
        quality={imageQuality}
        onLoad={handleImageLoad}
      />
    );
  });
  return (
    <div className="flex h-screen w-full bg-customWhite">
      {/* -------------------- SIDEBAR -------------------- */}
      <div className="hidden md:block">
        <PortfolioGallerySideBar
          title={title}
          shortDescription={shortDescription}
          longDescription={longDescription}
          picturesList={picturesList}
          setIndex={setIndex}
          currentIndex={currentIndex}
          pathTree={pathTree}
          categoriesFromPath={categoriesFromPath}
        />
      </div>
      {/* -------------------- MOBILE HEADER -------------------- */}
      <div className="md:hidden text-customBrown">
        <PortfolioGalleryMobileHeader
          title={title}
          shortDescription={shortDescription}
          longDescription={longDescription}
          pathTree={pathTree}
        />
      </div>
      {/* ---------- IMAGE CONTAINER DESKTOP---------- */}
      <div className="hidden md:block ml-[300px] p-4 pl-10 pb-10">
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
      {/* ---------- IMAGE LIST MOBILE ---------- */}
      <div className="flex flex-col md:hidden mt-[100px] p-3">
        <div className="text-2xs font-semibold text-customBrown">{shortDescription}</div>
        <div>{mobileGallery}</div>
      </div>
    </div>
  );
}

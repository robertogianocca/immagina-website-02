"use client";
import { useState } from "react";
import Image from "next/image";
import PortfolioGallerySideBar from "./PortfolioGallerySideBar/PortfolioGallerySideBar";
import PortfolioGalleryMobileHeader from "@/components/Portfolio/PortfolioGallery/PortfolioGalleryMobileHeader/PortfolioGalleryMobileHeader";

export default function PortfolioGallery({
  currentCategoryPortfolio,
  title,
  shortDescription,
  longDescription,
  pathTree,
  categoriesFromPath = null,
}) {
  const picturesList = currentCategoryPortfolio.images.pictures;
  const [currentIndex, setIndex] = useState(0);
  const [imageQuality, setImageQuality] = useState(1);

  // Image quality setting
  const handleImageLoad = () => {
    setImageQuality(70);
  };

  const mobileGallery = picturesList.map((item, index) => {
    return (
      <div key={index}>
        <Image
          src={picturesList[index].url}
          alt={picturesList[index].alt}
          width={picturesList[index].width}
          height={picturesList[index].height}
          sizes="(max-width: 1200px) 100vw, 70vw"
          priority={true}
          quality={imageQuality}
          onLoad={handleImageLoad}
        />
        {/* ------ Caption ------ */}
        <div
          className={`h-[40px] bg-customGrey px-2 flex items-center ${
            !picturesList[index].shortDescription && "hidden"
          }`}
        >
          <p className="text-xs italic font-semibold">{picturesList[index].shortDescription}</p>
        </div>
      </div>
    );
  });

  const coverTitle =
    currentIndex === 0 ? (
      <div className="lg:absolute lg:left-0 lg:right-0 lg:top-0 mb-2 lg:m-auto lg:p-2 lg:aspect-cover lg:h-full">
        <h1 className="font-courier font-bold text-2xl lg:text-4xl text-red-600">{title}</h1>
      </div>
    ) : (
      ""
    );

  return (
    <div className="flex h-screen w-full bg-customWhite">
      {/* -------------------- SIDEBAR -------------------- */}
      <div className="hidden lg:block">
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
      <div className="lg:hidden text-customBrown">
        <PortfolioGalleryMobileHeader
          title={title}
          shortDescription={shortDescription}
          longDescription={longDescription}
          pathTree={pathTree}
        />
      </div>
      {/* ---------- IMAGE CONTAINER DESKTOP---------- */}
      <div className="hidden lg:block ml-[300px] p-4 pl-10 pb-10 z-10">
        <div className="relative w-full h-full">
          {coverTitle}
          <div className={`flex items-center w-full h-full ${currentIndex === 0 && "pt-[6rem]"}`}>
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
      {/* ---------- MOBILE GALLERY ---------- */}
      <div className="flex flex-col lg:hidden mt-[60px] p-3 pb-[100px]">
        <h1 className="text-xl sm:text-3xl font-bold font-courier text-customRed pb-2">{title}</h1>
        <div className="text-2xs sm:text-base font-semibold text-customBrown">
          {shortDescription}
        </div>
        <div className="flex flex-col gap-y-8">{mobileGallery}</div>
      </div>
    </div>
  );
}

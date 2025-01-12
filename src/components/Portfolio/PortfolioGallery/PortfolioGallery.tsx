"use client";
import Link from "next/link";
import Image from "next/image";
import PortfolioGallerySideBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/PortfolioGallerySideBar";
import MenuMobile from "../../MenuMobile/MenuMobile";
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon";
import Button from "@/components/Buttons/Button";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PortfolioGallery({
  currentCategory,
  transformedCategoriesFromPath,
  picturesList,
  categoryDescription,
  shortCategoryDescription = "no short category description",
}: any) {
  const usePathName = usePathname();
  const path = usePathName.split("/").slice(1).slice(0, -1).join("/");
  const [currentIndex, setIndex] = useState(0);

  const [isVisible, setIsVisible] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const [imageQuality, setImageQuality] = useState(2);

  // Text box open and close
  function openTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  function closeTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  // Mobile Menu Open and Close Toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Portfolio", "Principi", "Prodotti", "Chi siamo", "Contatto"];

  // Image quality setting
  const handleImageLoad = () => {
    setImageQuality(70);
  };

  // Category Before
  const paramsObject = useParams();
  const params = paramsObject.categories || ""; // Ensure params is at least an empty string
  const paramsArray = Array.isArray(params) ? params : params.split("/");
  const categoryBefore = paramsArray.slice(0, -1);

  // Sort pictures by file name
  function sortByFileNamePrefix(array: any) {
    return array.sort((a: any, b: any) => {
      const numA = parseInt(a.fileName.substring(0, 2), 10);
      const numB = parseInt(b.fileName.substring(0, 2), 10);
      return numA - numB;
    });
  }

  picturesList = sortByFileNamePrefix(picturesList);

  // Title class
  const hideTitle = currentIndex == 0 ? " " : "hidden";

  // Mobile Gallery Images
  const mobileGallery = picturesList.map((item: any, index: string) => {
    return (
      <Image
        key={index}
        className="pb-10"
        src={picturesList[index].url}
        alt={picturesList[index].description}
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
    <div className="flex flex-col lg:flex-row lg:h-screen w-full">
      <div className="hidden lg:flex flex-col justify-between w-[300px] fixed h-screen overflow-auto p-5 bg-stone-200 bg-opacity-35 text-base inner-shadow ">
        <PortfolioGallerySideBar
          title={currentCategory}
          shortCategoryDescription={shortCategoryDescription}
          categoryDescription={categoryDescription}
          picturesList={picturesList}
          transformedCategoriesFromPath={transformedCategoriesFromPath}
          currentIndex={currentIndex}
          setIndex={setIndex}
          setIsVisible={setIsVisible}
        />
      </div>
      {/*  ------------ TEXT BOX DESCRIPTION ------------ */}
      <div
        className={`flex items-center justify-center fixed top-[60px] lg:top-0 lg:left-[300px] right-0 bottom-0 p-0 lg:p-10 z-50 bg-opacity-100 bg-white ${
          isVisible ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col items-center w-full max-w-[screen] h-full">
          <div className="w-full xl:w-[70%] flex-grow px-6 overflow-auto ">
            {/* Bottone Chiusura X */}
            <div className="w-full lg:mb-3">
              <Button
                addClass="p-2 mt-4 mb-4 shadow-stone-300 text-slate-400"
                onClick={closeTextBox}
              >
                <IoMdCloseCircle size={30} />
              </Button>
            </div>
            {/* Testo */}
            <p
              className="link text-sm lg:text-base text-sky-800 lg:font-semibold"
              dangerouslySetInnerHTML={{ __html: categoryDescription }}
            />
          </div>
        </div>
      </div>

      {/* ------------ IMAGE CONTAINER ------------ */}
      <div className="mt-[60px] lg:mt-0 lg:ml-[300px] flex-grow p-4 lg:pl-10 pb-10 bg-customWhite">
        <div className="relative w-full h-full">
          {/* Gallery title */}
          <div
            className={` lg:absolute lg:left-0 lg:right-0 lg:top-0 mb-2 lg:m-auto lg:p-2 lg:aspect-cover lg:h-full ${hideTitle}`}
          >
            <h1 className="font-courier font-bold text-2xl lg:text-4xl text-red-600">
              {currentCategory}
            </h1>
          </div>
          {/* Gallery image */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center w-full h-full"
            >
              <Image
                priority={true}
                src={picturesList[currentIndex].url}
                alt={picturesList[currentIndex].description || ""}
                width={picturesList[currentIndex].width}
                height={picturesList[currentIndex].height}
                className="object-contain max-w-full max-h-full"
                quality={imageQuality}
                onLoad={handleImageLoad}
                sizes="(max-width: 1200px) 100vw, 70vw"
              />
            </motion.div>
          </AnimatePresence>
          {/* ------------ MOBILE GALLERY ------------ */}
          {/* Mobile Menu */}
          <nav className="lg:hidden w-full h-[60px] fixed left-0 top-0 z-50 px-4 lg:pl-14 lg:pr-24 flex lg:main-grid md:shadow-xl bg-stone-200">
            <div className="flex flex-row items-center justify-between w-full">
              <h1 className="font-courier font-bold text-sm lg:text-4xl text-customRed">
                {currentCategory}
              </h1>
              <div className="flex gap-6">
                <Link href={`/${path}`}>
                  <Button addClass="p-2 text-slate-400">
                    <FaArrowLeft size={20} />
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button addClass="p-2 text-slate-400">
                    <TiHome size={20} />
                  </Button>
                </Link>
                <Link href={""}>
                  <Button onClick={openTextBox} addClass="p-[5.9px] text-slate-400">
                    <p className="font-bold">Read</p>
                  </Button>
                </Link>
                {/* <div onClick={toggleMenu}>
                  <HamburgerIcon color="text-customRed" />
                </div> */}
                <div
                  className={`absolute top-[60px] left-0 w-full h-space bg-customWhite opacity-98 px-4 py-10 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <MenuMobile menuItems={menuItems} toggleMenu={toggleMenu} />
                </div>
              </div>
            </div>
          </nav>
          {/* Mobile Gallery */}
          <div className="flex flex-col lg:hidden">
            <p
              className="z-10 link text-xs font-semibold text-sky-800"
              dangerouslySetInnerHTML={{ __html: shortCategoryDescription }}
            />
            <div className="mt-[-12px]">{mobileGallery}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

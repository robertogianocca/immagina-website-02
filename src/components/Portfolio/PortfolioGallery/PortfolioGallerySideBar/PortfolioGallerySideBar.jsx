"use client";
import { useState } from "react";
import BackBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/BackBar";
import Path from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/Path";
import Head from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/Head";
import TextBox from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/TextBox";
import Navigation from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/Navigation";
import Thumbnails from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/Thumbnails";
import { motion } from "framer-motion";

export default function PortfolioGallerySideBar({
  title,
  shortDescription,
  longDescription,
  picturesList,
  pathTree,
  setIndex,
  currentIndex,
  categoriesFromPath,
}) {
  //   --------------------------------- READ MORE ---------------------------------
  const [isVisible, setIsVisible] = useState(true);

  function toggleTextBox() {
    setIsVisible((prevState) => !prevState);
    console.log(isVisible);
  }

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.4, type: "spring", bounce: 0.2 }}
      className="fixed h-full w-[300px] flex flex-col justify-between overflow-auto p-5 pb-[70px]bg-stone-100 text-customBrown z-50"
    >
      {/* ------ HOME, BACK BUTTONS, LOGO ------ */}

      <BackBar pathTree={pathTree} categoriesFromPath={categoriesFromPath} />

      {/* ------ PATH, TITLE, DESCRIPTION ------ */}

      <div className="pb-6">
        <Path pathTree={pathTree} categoriesFromPath={categoriesFromPath} />
        <Head title={title} shortDescription={shortDescription} toggleTextBox={toggleTextBox} />
      </div>

      {/* ------ ARROW, INDEX, CAPTION ------ */}

      <Navigation picturesList={picturesList} setIndex={setIndex} currentIndex={currentIndex} />

      {/* ------ THUMBNAILS ------ */}

      <Thumbnails picturesList={picturesList} setIndex={setIndex} currentIndex={currentIndex} />

      {/*  ------------ TEXT BOX DESCRIPTION ------------ */}
      <TextBox
        toggleTextBox={toggleTextBox}
        isVisible={isVisible}
        longDescription={longDescription}
      />
    </motion.aside>
  );
}

"use client";
import { useState } from "react";
import BackBar from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/BackBar";
import Head from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/Head";
import TextBox from "@/components/Portfolio/PortfolioGallery/PortfolioGallerySideBar/TextBox";
import Link from "next/link";
import Header from "../../PortfolioGallery/PortfolioGallerySideBar/Header/Header";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Buttons/Button";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

const logoRed = "/images/logo/logo-immagina.svg";
export default function VideoGallerySideBar({
  title,
  pathTree,
  categoriesFromPath,
  shortDescription,
  longDescription,
}) {
  //   --------------------------------- READ MORE ---------------------------------
  const [isVisible, setIsVisible] = useState(true);

  function toggleTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <>
      <div className="flex flex-col mb-2">
        {/* ------ HOME E BACK BUTTONS ------ */}
        <BackBar pathTree={["video"]} categoriesFromPath={["video"]} />

        {/* ------ PATH, TITLE, DESCRIPTION ------ */}

        <div className="pb-6">
          <Head title={title} shortDescription={shortDescription} toggleTextBox={toggleTextBox} />
        </div>
        {/*  ------------ TEXT BOX DESCRIPTION ------------ */}
        <TextBox
          toggleTextBox={toggleTextBox}
          isVisible={isVisible}
          longDescription={longDescription}
        />
        {/* ------ HEADER: PATH, TITLE AND DESCRIPTION ------ */}
        {/* <Header
          title={title}
          path={["Video"]}
          shortDescription={shortDescription}
          longDescription={longDescription}
          setIsVisible={setIsVisible}
        /> */}
      </div>
    </>
  );
}

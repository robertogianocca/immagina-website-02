"use client";
import Image from "next/image";
import VideoGallerySideBar from "./VideoGallerySideBar/VideoGallerySideBar";
import { useState } from "react";
import Button from "@/components/Buttons/Button";
import { IoMdCloseCircle } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";

export default function VideoGallery({
  videoLink,
  title,
  path,
  shortDescription,
  longDescription,
  categoriesFromPath,
}: any) {
  const [isVisible, setIsVisible] = useState(true);

  function closeTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div className="flex flex-row h-screen w-full">
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
              dangerouslySetInnerHTML={{ __html: longDescription }}
            />
          </div>
        </div>
      </div>
      <div className="w-[300px] fixed h-screen overflow-auto flex flex-col justify-between p-5 bg-stone-100 text-base inner-shadow ">
        <VideoGallerySideBar
          title={title}
          path={path}
          shortDescription={shortDescription}
          longDescription={longDescription}
          setIsVisible={setIsVisible}
        />
      </div>
      <div className="ml-[300px] flex-grow p-4 pl-10 pb-10 bg-white">
        <div className="relative w-full h-full">
          <iframe
            src={videoLink}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            width="100%"
            height="100%"
            title="CARIE"
            className=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

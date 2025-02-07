import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import { FaArrowLeft } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

export default function PortfolioGalleryMobileHeader({ title, longDescription, pathTree }) {
  //   --------------------------------- READ MORE ---------------------------------
  const [isVisible, setIsVisible] = useState(true);

  function openTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  function closeTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <nav className="w-full fixed left-0 top-0 z-50 p-4 pt-3 bg-customGrey">
      {/* ------ BACK BUTTONS, HOME ------ */}
      <div className="flex flex-row justify-between gap-5">
        <div className="flex gap-5">
          <Link href={`/cultura/${pathTree.join("/")}`}>
            <Button addClass="w-8">
              <FaArrowLeft size={20} />
            </Button>
          </Link>
          <Link href="/cultura">
            <Button addClass="w-8">
              <TiHome size={20} />
            </Button>
          </Link>
          <Button onClick={openTextBox} addClass="h-full p-1 text-xs font-bold">
            {"Read"}
          </Button>
        </div>
        <div className="flex gap-10">
          <h1 className="text-sm font-bold font-courier pt-3">{title}</h1>
        </div>
      </div>
      {/*  ------------ TEXT BOX DESCRIPTION ------------ */}
      <div
        className={`flex items-center justify-center fixed top-[60px] lg:top-0 lg:left-[300px] right-0 bottom-0 p-0 pt-4 lg:p-10 z-50 bg-opacity-100 bg-white ${
          isVisible ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col items-center w-full max-w-[screen] h-full">
          <div className="w-full xl:w-[70%] flex-grow px-6 overflow-auto ">
            {/* Testo */}
            <div className="link text-sm lg:text-base  text-customBrown font-semibold">
              {longDescription}
            </div>
            {/* Bottone Chiusura X */}
            <div className="w-fulllg:mb-3">
              <Button
                addClass="p-2 mt-4 mb-4 shadow-stone-300 text-slate-400"
                onClick={closeTextBox}
              >
                <IoMdCloseCircle size={30} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

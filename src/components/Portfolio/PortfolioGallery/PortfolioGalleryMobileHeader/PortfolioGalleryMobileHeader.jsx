import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import ArrowButton from "@/components/Buttons/ArrowButton";
import { FaArrowLeft } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

export default function PortfolioGalleryMobileHeader({
  title,
  shortDescription,
  longDescription,
  pathTree,
}) {
  //   --------------------------------- READ MORE ---------------------------------
  const [isVisible, setIsVisible] = useState(true);

  function openTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  function closeTextBox() {
    setIsVisible((prevState) => !prevState);
  }
  return (
    <>
      <nav className="md:hidden w-full h-[90px] fixed left-0 top-0 z-50 p-4 pt-3 bg-customGrey">
        {/* ------ HOME, BACK BUTTONS, LOGO ------ */}
        <div className="flex flex-row gap-5">
          <Link href={`/cultura/${pathTree.join("/")}`}>
            <Button addClass="p-[5px] text-slate-400">
              <FaArrowLeft size={20} />
            </Button>
          </Link>
          <Link href="/cultura">
            <Button addClass="p-[5px] text-slate-400">
              <TiHome size={20} />
            </Button>
          </Link>
        </div>
        <div className="flex flex-ro items-center gap-x-4">
          <h1 className="text-lg font-bold font-courier pt-3">{title}</h1>
          <ArrowButton onClick={openTextBox} addClass="h-6 p-1 text-xs">
            {"Read more"}
          </ArrowButton>
        </div>
      </nav>
    </>
  );
}

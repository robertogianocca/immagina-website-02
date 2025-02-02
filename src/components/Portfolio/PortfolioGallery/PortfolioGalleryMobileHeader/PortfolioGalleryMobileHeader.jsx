import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import { FaArrowLeft } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

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
    <nav className="md:hidden w-full fixed left-0 top-0 z-50 p-4 pt-3 bg-customGrey">
      {/* ------ BACK BUTTONS, HOME ------ */}
      <div className="flex flex-row justify-between gap-5">
        <div className="flex gap-5">
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
          <Button onClick={openTextBox} addClass="h-6 p-1 text-xs">
            {"Read"}
          </Button>
        </div>
        <div className="flex gap-10">
          <h1 className="text-sm font-bold font-courier pt-3">{title}</h1>
        </div>
      </div>
    </nav>
  );
}

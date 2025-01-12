import Link from "next/link";
import Header from "../../PortfolioGallery/PortfolioGallerySideBar/Header/Header";
import Logo from "@/components/Logo/Logo";
import logoRed from "/public/images/logo/logo-immagina.svg";
import Button from "@/components/Buttons/Button";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

export default function VideoGallerySideBar({
  title,
  path,
  shortDescription,
  longDescription,
  setIsVisible,
}: any) {
  return (
    <>
      <div className="flex flex-col mb-2">
        {/* ------ HOME E BACK BUTTONS ------ */}
        <div className="flex gap-2 mb-2">
          <Link href={"/cultura/video"}>
            <Button addClass="p-2 text-slate-400">
              <FaArrowLeft size={25} />
            </Button>
          </Link>
          <Link href={"/cultura"}>
            <Button addClass="p-2 text-slate-400">
              <TiHome size={25} />
            </Button>
          </Link>
          <div className="w-28 h-auto relative left-12">
            <Logo logo={logoRed} />
          </div>
        </div>

        {/* ------ HEADER: PATH, TITLE AND DESCRIPTION ------ */}
        <Header
          title={title}
          path={["Video"]}
          shortDescription={shortDescription}
          longDescription={longDescription}
          setIsVisible={setIsVisible}
        />
      </div>
    </>
  );
}

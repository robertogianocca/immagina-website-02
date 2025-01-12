import Link from "next/link";
import Image from "next/image";
import Header from "./Header/Header";
import Thumbnails from "./Thumbnails/Thumbnails";
import Logo from "@/components/Logo/Logo";
import logoRed from "/public/images/logo/logo-immagina.svg";
import Button from "@/components/Buttons/Button";
import { TiHome } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineFullscreen } from "react-icons/md";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface Picture {
  fileName: string;
  url: string;
  heading: string;
  description: string;
  public_id: string;
}

interface PortfolioGallerySideBarProps {
  title: string;
  shortCategoryDescription: string;
  categoryDescription: string;
  picturesList: Picture[];
  setIndex: (index: number) => void;
  currentIndex: number;
  transformedCategoriesFromPath: any[];
  setIsVisible: any;
}

export default function PortfolioGallerySideBar({
  title,
  shortCategoryDescription,
  categoryDescription,
  picturesList,
  setIndex,
  currentIndex,
  transformedCategoriesFromPath,
  setIsVisible,
}: PortfolioGallerySideBarProps) {
  //   --------------------------------- KEYBOARD NAVIGATION ---------------------------------
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 37:
          currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
          break;
        case 39:
          currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, picturesList.length, setIndex]);

  //   --------------------------------- FULL SCREEN ---------------------------------

  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const fullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", fullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChange);
    };
  }, []);

  //   --------------------------------- ARROWS FUNCTION ---------------------------------
  function nextImage() {
    currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
  }
  function previousImage() {
    currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
  }

  //   --------------------------------- THUMBNAILS ---------------------------------
  function selectThumbnail(index: number) {
    setIndex(index);
  }

  const mappedImagestwo = picturesList.map((item, index) => {
    return (
      <div className="relative aspect-square bg-blue-200" key={index}>
        <button onClick={() => selectThumbnail(index)}>
          <Image src={item.url} alt="" quality={1} fill className="object-cover" />
        </button>
      </div>
    );
  });

  const usePathName = usePathname();
  const path = usePathName.split("/").slice(1).slice(0, -1).join("/");

  // const paramsObject = useParams();
  // const params = paramsObject.categories || ""; // Ensure params is at least an empty string
  // const paramsArray = Array.isArray(params) ? params : params.split("/");
  // const categoryBefore = paramsArray.slice(0, -1);

  //   First letter upper case
  transformedCategoriesFromPath = transformedCategoriesFromPath.map((item, index) => {
    item = item.split(" ");
    item = item.map((itemTwo: string, index: number) => {
      return itemTwo[0].toUpperCase() + itemTwo.slice(1);
    });

    return item.join(" ");
  });

  console.log(picturesList[currentIndex].heading);

  return (
    <>
      {/* ------ HOME, BACK BUTTONS, LOGO ------ */}
      <div className="flex gap-2 mb-2">
        <Link href={`/${path}`}>
          <Button addClass="p-2 text-slate-400">
            <FaArrowLeft size={25} />
          </Button>
        </Link>
        <Link href={`/${path.split("/")[0]}`}>
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
        pathBack={path.split("/")}
        path={transformedCategoriesFromPath}
        shortDescription={shortCategoryDescription}
        longDescription={categoryDescription}
        setIsVisible={setIsVisible}
      />

      {/* ------ ARROWS AND INDEX ------ */}
      <div className="grid grid-cols-2 gap-4 font-courier font-bold">
        {/* Left Arrow */}
        <button
          onClick={previousImage}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center h-[65px] rounded-md"
        >
          <p className="font-courier font-bold text-4xl ">{"<"}</p>
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md"
        >
          <p className="text-4xl">{">"}</p>
        </button>
        {/* Index */}
        <h1 className="bg-zinc-150 text-stone-600 h-[65px] flex items-center justify-center rounded-xl">{`${
          currentIndex + 1
        } / ${picturesList.length}`}</h1>
        {/* Full Screen */}
        <button
          onClick={handleFullscreen}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md"
        >
          <MdOutlineFullscreen size={40} />
        </button>
      </div>

      {/* ------ IMAGE HEADING ------ */}
      <div className="h-[40px] my-6">
        <p className="text-xs">{picturesList[currentIndex].heading}</p>
      </div>

      {/* ------ THUMBNAIL ------ */}
      <Thumbnails picturesList={picturesList} setIndex={setIndex} currentIndex={currentIndex} />

      {/* ------ LOGO ------ */}
      {/* <div className="relative h-8 mt-8">
        <div className="absolute bottom-0 left-0">
          <div className="h-4 w-28 relative">
            <Logo />
          </div>
        </div>
      </div> */}
    </>
  );
}

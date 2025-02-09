import ArrowButton from "@/components/Buttons/ArrowButton";

export default function Navigation({ picturesList, setIndex, currentIndex }) {
  //   --------------------------------- ARROWS FUNCTION ---------------------------------
  function nextImage() {
    currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
  }
  function previousImage() {
    currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 font-courier font-bold">
        {/* ------ Left Arrow ------ */}
        <ArrowButton
          onClick={previousImage}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center h-[65px] rounded-md"
        >
          <p className="font-courier font-bold text-4xl ">{"<"}</p>
        </ArrowButton>
        {/* ------ Right Arrow ------ */}
        <ArrowButton
          onClick={nextImage}
          className="bg-zinc-150 text-stone-600 shadow-button flex items-center justify-center rounded-md"
        >
          <p className="text-4xl">{">"}</p>
        </ArrowButton>
        {/* ------ Index ------ */}

        <h1 className="my-6 text-stone-600 col-span-2 flex items-center justify-center text-base">{`${
          currentIndex + 1
        } / ${picturesList.length}`}</h1>
      </div>
      {/* ------ Caption ------ */}
      <div className="h-[40px] mb-6 bg-customGrey px-2 rounded-md flex items-center">
        <p className="text-xs italic font-semibold">
          {picturesList[currentIndex].shortDescription}
        </p>
      </div>
    </div>
  );
}

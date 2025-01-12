// THUMBNAILS

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Thumbnails({ picturesList, setIndex, currentIndex }) {
  const [currentThumbPage, setCurrentThumbPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(picturesList.length / itemsPerPage);

  const currentData = picturesList.slice(
    (currentThumbPage - 1) * itemsPerPage,
    currentThumbPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentThumbPage(pageNumber);
  };

  // Adjust the current page when currentIndex changes
  useEffect(() => {
    const newPage = Math.floor(currentIndex / itemsPerPage) + 1;
    setCurrentThumbPage(newPage);
  }, [currentIndex]);

  function selectThumbnail(index) {
    setIndex(index);
  }

  // Mapped thumbnails
  const mappedThumbnails = currentData.map((item, index) => {
    const globalIndex = (currentThumbPage - 1) * itemsPerPage + index;
    return (
      <div
        className={`${currentIndex === globalIndex ? "aspect-square" : "aspect-square opacity-60"}`}
        key={globalIndex}
      >
        <button onClick={() => selectThumbnail(globalIndex)} className="w-full h-full">
          <Image
            className="object-cover object-bottom h-full w-full"
            src={item.url}
            alt="gallery thumbnail"
            loading="eager"
            width={30}
            height={30}
            quality={2}
          />
        </button>
      </div>
    );
  });

  // Mapped dots for page navigation
  const mappedDots = [...Array(totalPages)].map((_, pageIndex) => (
    <button
      key={pageIndex}
      onClick={() => handlePageChange(pageIndex + 1)}
      className={`mx-1 w-3 h-3 rounded-full ${
        currentThumbPage === pageIndex + 1 ? "bg-stone-600" : "bg-stone-300"
      }`}
    />
  ));

  return (
    <div className="mb-3">
      <div className="w-full grid grid-cols-5 gap-2">{mappedThumbnails}</div>
      {totalPages > 1 && <div className="flex justify-center mt-2">{mappedDots}</div>}
    </div>
  );
}

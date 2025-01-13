import Image from "next/image";

export default function PortfolioGallery({
  currentCategoryPortfolio,
  title,
  // shortDescription,
  // longDescription,
  mappedPath,
}) {
  return (
    <div>
      <aside className="hidden lg:flex flex-col justify-between w-[300px] fixed h-screen overflow-auto p-5 bg-stone-200 bg-opacity-35 text-base inner-shadow">
        {/* <aside className="hidden lg:flex flex-col justify-between w-[300px] fixed h-screen overflow-auto p-5 bg-stone-200 bg-opacity-35 text-base inner-shadow"> */}
        <h1 className="text-4xl mb-5">{title}</h1>
        {mappedPath}
      </aside>
      {currentCategoryPortfolio.images.pictures.map((item) => (
        <div className="mt-[60px] lg:mt-0 lg:ml-[300px] flex-grow p-4 lg:pl-10 pb-10 bg-customWhite">
          <Image src={item.url} width={100} height={100} alt="" />
          <p>{item.shortDescription}</p>
        </div>
      ))}
    </div>
  );
}

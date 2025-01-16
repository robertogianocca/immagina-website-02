// CATEGORY CARD

import Link from "next/link";
import Image from "next/image";

export default function PortfolioCategoryCard({
  title = "No title available",
  shortDescription = "No short description available",
  cover = "/images/samples/01.jpg",
  coverAlt = "Image",
  labelColor = "border-l-customRed",
  hrefLink = "",
}) {
  return (
    <Link href={hrefLink}>
      <div className="group w-full h-full relative flex flex-col gap-2 lg:gap-y-4 p-5 xl:p-6 bg-zinc-50  shadow-xl shadow-slate-400">
        <div
          className={`absolute left-0 top-0 pr-1 w-0 h-0 border-l-[28px] border-b-[28px] border-b-transparent border-t-transparent ${labelColor}`}
        ></div>
        <h2 className="font-courier font-bold text-lg xl:text-xl">{title}</h2>
        {/* ---------- SHORT DESCRIPTION DESKTOP  ----------  */}
        <div className="hidden md:block md:min-h-[7rem] lg:min-h-[10rem] xl:min-h-[6rem] text-xs xl:text-xs pb-4 font-semibold opacity-85">
          {shortDescription}
        </div>
        <div className="group-hover:saturate-[1.1] flex flex-col gap-2 lg:gap-4">
          <Image src={cover} width={600} height={600} quality={50} alt={coverAlt} />
        </div>
        {/* ---------- SHORT DESCRIPTION MOBILE  ----------  */}
        <div className="md:hidden text-2xs md:text-xs pb-4 pt-2 font-semibold opacity-85">
          {shortDescription}
        </div>
      </div>
    </Link>
  );
}

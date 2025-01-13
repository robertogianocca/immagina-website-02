import Triangle from "@/components/Icons/Triangle";
import Link from "next/link";

export default function PortfolioNavigation({ title, path, longDescription, labelColor }) {
  return (
    <div className="main-grid pb-8">
      <div className="font-courier font-semibold text-base">
        <div className="flex flex-row">
          <p className="pr-2">
            <Link href={`/cultura/#portfolio`}>portfolio</Link>
          </p>
          {path}
        </div>
        <div className="flex">
          <div className="pt-[9px] pr-[5.5px]">
            <Triangle color={labelColor} />
          </div>
          <h1 className="font-courier font-bold text-2xl md:text-3xl xl:text-4xl">{title}</h1>
        </div>
      </div>
      <div className="hidden xl:block text-base font-semibold col-span-2">{longDescription}</div>
    </div>
  );
}

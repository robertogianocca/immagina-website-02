"use client";
import Link from "next/link";
import Image from "next/image";
import RedButton from "@/components/Buttons/RedButton";
import Triangle from "@/components/Icons/Triangle";

export default function IntroSection({ text }) {
  return (
    <div className="h-full sm:h-auto flex flex-col justify-between sm:justify-no sm:grid sm:grid-cols-3 sm:gap-4 lg:gap-x-8 pb-6 lg:pb-[30px] font-bold">
      <div className="flex flex-col gap-[3vh] lg:gap-x-10 xl:gap-y-[2vh] sm:col-span-2 lg:col-span-1 text-sm xl:text-base">
        {text}
        <Link href="#portfolio" className="">
          <RedButton addClass="p-2 px-3 text-base xl:text-xl font-courier mb-6 lg:font-light">
            Portfolio
          </RedButton>
        </Link>
        {/* ---------- PORTFOLIO LIST ---------- */}
        {/* <ul className="grid grid-cols-2 sm:flex lg:grid gap-x-6 gap-y-4 2xl:gap-x-[min(1rem)] 2xl:w-[max(400px)] xs:pr-4 xl:pr-0 text-center lg:mb-0 font-courier text-base xl:text-lg mb-4">
          <li className="flex">
            <Triangle addClass="border-l-red-600" />
            <Link href="/cultura/photography" className="hover:text-customRed">
              Photography
            </Link>
          </li>
          <Link href="/cultura/video" className="hover:text-customRed">
            <li className="flex items-center">
              <Triangle addClass="border-l-customRed" />
              Video
            </li>
          </Link> */}
        {/* <Link href="/grafica" className="hover:text-customRed">
            <li className="flex items-centers">
              <Triangle addClass="border-l-customRed" />
              Graphic
            </li>
          </Link>
          <Link href="/video" className="hover:text-customRed">
            <li className="flex items-center">
              <Triangle addClass="border-l-customRed" />
              Bookdesign
            </li>
          </Link> */}
        {/* </ul> */}
        {/* ---------- IF YOU LIKE IT ---------- */}
        {/* <p className="mb-4 font-semibold">If you like it, scrivici. Why not.</p> */}
      </div>

      {/*  ------------ VIDEO ------------ */}
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="sm:col-span-3 lg:col-span-2 object-cover lg:object-contain object-bottom sm:object-top w-full h-[50vh] xs:h-[70vh] md:max-h-[calc(100vh-478px)] lg:h-full lg:max-h-[calc(100vh-135px)] 2xl:w-full 2xl:h-auto 2xl:max-h-auto 2xl:object-cover 2xl:object-top"
      >
        <source src="/video/animazione-bosco-01.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

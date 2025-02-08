import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainCard from "@/components/MainPage/MainCard/MainCard";
import Triangle from "@/components/Icons/Triangle";

const logoWhite = "/images/logo/logo-immagina-white.svg";
const logoRed = "/images/logo/logo-immagina.svg";
const logoBlue = "/images/logo/logo-immagina-blue.svg";

export default function Main() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 min-h-screen lg:h-auto p-4 sm:px-8 lg:px-20 lg:pt-16 lg:pb-20 bg-customGrey font-bold text-sm sm:text-base lg:text-sm">
      {/* -------------------- LOGO AND TEXT -------------------- */}
      <div className="lg:col-span-1 text-customBrown">
        {/* ---------- LOGO BIANCO ---------- */}
        <Image
          className="w-full lg:ml-[-5px] mb-4 lg:mb-10 xl:mb-[50px]"
          src={logoWhite}
          width={500}
          height={500}
          alt="Logo IMMAGINA"
        />
        {/* ---------- DESCRIZIONE DESKTOP ---------- */}
        <p className="hidden lg:block mb-5">
          {`IMMAGINA ti dice ciao e si presenta.`}
          <br />
          <br />
          {`Come il sarto confeziona l'abito, IMMAGINA confeziona la tua immagine, la tua
          comunicazione.`}
          <br />
          <br />
          {`Se per ragioni aziendali, o culturali o private vuoi far conoscere al mondo la tua
          attività, personalità, le tue idee, i tuoi progetti, potresti essere interessato ad
          affidarti al collettivo creativo IMMAGINA.`}
          <br />
          <br />
          {`IMMAGINA ha un cuore e un’anima. `}
          <br />
          {`Il cuore batte per la cultura. L’anima governa il business.`}
        </p>
        {/* ---------- DESCRIZIONE MOBILE ---------- */}
        <p className="lg:hidden mt-8 mb-4">
          {`IMMAGINA ti dice ciao e si presenta.`}
          <br />
          <br />
          {`Come il sarto confeziona l'abito, IMMAGINA confeziona la tua immagine, la tua
          comunicazione.`}
          <br />
          <br />
          {`Se ti vuoi profilare potresti essere interessato ad affidarti al collettivo IMMAGINA.`}
        </p>
        {/* ---------- CULTURA BUSINESS ---------- */}
        <div className="hidden lg:flex flex-row">
          {/* <div className="flex flex-row opacity-30">
            <Triangle addClass="border-l-customBlue" />
            <Link href="/business">
              <p className="font-courier text-lg text-customBlue hover:border-b-[3px] hover:border-customBlue">
                business
              </p>
            </Link>
            <p className="font-courier text-lg text-customBlue hover:border-b-[3px] hover:border-customBlue">
              business
            </p>
            <div className="flex flex-col">
              <p className="font-courier text-lg text-customBlue line-through">business</p>
              <p className="">UNDER CONSTRUCTION</p>
            </div>
          </div> */}
        </div>
      </div>
      {/* Cards Container */}
      <div className="flex flex-col gap-4 xl:grid xl:col-span-2 xl:grid-cols-2 xl:gap-12">
        {/* MainCard for "cultura" */}
        <MainCard
          title="cultura"
          description="Dedicato ad artisti e operatori culturali."
          cover="https://res.cloudinary.com/immagina/image/upload/v1728637625/IMMAGINA/Home%20Page/immagina-cultura_uqdajd.jpg"
          logo={logoRed}
          titleColor="text-customRed"
        />
        {/* MainCard "business" */}
        <div className="opacity-30 pointer-events-none">
          <MainCard
            title="business"
            // description="Dedicato ad aziende, imprenditori e manager."
            description="PAGE UNDER CONSTRUCTION"
            cover="https://res.cloudinary.com/immagina/image/upload/v1729761866/IMMAGINA/Home%20Page/immagina-azienda_fndvpj.jpg"
            logo={logoBlue}
            titleColor="text-customBlue"
          />
        </div>
      </div>
    </div>
  );
}

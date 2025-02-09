// VIDEO PAGE

"use client";
import Link from "next/link";
import { videoDatabaseCultura } from "@/app/cultura/video/video-database-cultura";
import Wrapper from "@/components/Wrapper/Wrapper";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PortfolioTitleNavigation from "@/components/Portfolio/PortfolioTitleNavigation/PortfolioTitleNavigation";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";

const portfolioCultura = {
  Video: {
    CARIE: {
      pictures: [
        {
          url: "https://res.cloudinary.com/immagina/image/upload/v1732543369/IMMAGINA/Video/thumb-carie_dbccnk.jpg",
          public_id: "IMMAGINA/Cultura/Portfolio/Photography/Fotografia_-_Cover_igvggl",
          longDescription:
            "CHo pensato che l’arrampicata potesse ridare dignità a queste montagne ferite”. Con queste parole Marzio introduce il progetto Carie. Carie è un progetto crossmediale indipendente a cura di Achille Mauri, Marzio Nardi e Federico Ravassard. Narra di Carrara e delle sue cave. Il film scava nel passato,  presente e futuro di Carrara. Protagonisti gli arrampicatori, minatori, geologi, ambientalisti di tutta Italia. Tuono Blu, (nickname di Roberto Gianocca/IMMAGINA) è stato integrato del team quale cameraman/dronista, collaborato nella postproduzione e nell’animazione 3D del logo.",
          shortDescription:
            "Film sulle cave di Carrara. Un film realizzato con un gruppo di appassionati (della vita: cavisti, geologi, ambientalisti, scalatori, cineasti) hanno dialogato con la cava del Michelangelo, interrogandosi su passato presente e futuro del celebre marmo.",
          width: 800,
          height: 640,
          alt: "Image",
        },
      ],
    },
    pictures: [[Object]],
    "Memorie Future Laveggio": {
      pictures: [
        {
          url: "https://res.cloudinary.com/immagina/image/upload/v1724931246/IMMAGINA/Video/thumb-memorie-future_a1w2in.jpg",
          public_id: "IMMAGINA/Cultura/Portfolio/Photography/Fotografia_-_Cover_igvggl",
          longDescription:
            "In passato il Laveggio scorreva indisturbato da Stabio a Capolago dove versava le sue acque. Anni ’60: boom economico. Il Laveggio diventa una cloaca. Si edifica il Parco industriale Laveggio. Arrivano il traffico, strade, ferrovie, gas-dotti, elettrodotti,  parcheggi, spedizionieri, doganieri eccetera eccetera. Anno 2023: si inaugura il neo-Parco ecologico. Forse sarebbe più appropriato parlare di Riserva del Laveggio, luogo riservato ai superstiti, flora e fauna, nativi. Un po’ come le celebri riserve dell’America del Nord…  Nel suo splendore un sentiero, discontinuo in vero, costeggia autostrada, treno, attraversa le zone industriali, le zone agricole e s’arrende a Riva San Vitale dove il fiume sfocia, in gran fretta, nel Ceresio.",
          shortDescription:
            "In passato il Laveggio scorreva indisturbato da Stabio a Capolago dove versava le sue limpide acque. Anni ’60: boom economico. Il Laveggio diventa una cloaca. Si edifica il Parco industriale Laveggio. Anno 2023: si inaugura il parco del Laveggio…",
          width: 800,
          height: 640,
          alt: "Image",
        },
      ],
    },
    "Met Parachute MCR": {
      pictures: [
        {
          url: "https://res.cloudinary.com/immagina/image/upload/v1724931249/IMMAGINA/Video/thumb-met-parachute_zigmgf.jpg",
          public_id: "IMMAGINA/Cultura/Portfolio/Photography/Fotografia_-_Cover_igvggl",
          longDescription:
            "Sport pubblicitario di Achille Mauri per i caschi Parachute della ditta MET di Lecco. Location:  Scozia Ligura e Lecco. Riprese con il drone, correzione cromatica e postproduzione di Roberto Gianocca/IMMAGINA.",
          shortDescription:
            "Sport pubblicitario di Achille Mauri per i caschi Parachute della ditta MET di Lecco. Location:  Scozia Ligura e Lecco. Riprese con il drone, correzione cromatica e postproduzione di Roberto Gianocca/IMMAGINA.",
          width: 800,
          height: 640,
          alt: "Image",
        },
      ],
    },
  },
};

export default function VideoPage() {
  return (
    <>
      <PortfolioContainer portfolioCultura={portfolioCultura} categoriesFromPath={["video"]} />
    </>
  );
}

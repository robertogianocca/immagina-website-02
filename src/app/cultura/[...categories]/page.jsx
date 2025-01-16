import { getDataStructure } from "@/utils/portfolio-data-structure";
import { Texts } from "./texts";
import { Captions } from "./captions";
import { renameCategory } from "./renameCategory";
import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";

export default async function CulturaCategories({ params }) {
  let portfolioData = null;

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/?max_results=500&metadata=true&context=true&prefix=IMMAGINA/Cultura/&type=upload`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
          ).toString("base64")}`,
        },
      },
      { cache: "force-cache" }
    );
    const cloudinaryResponse = await response.json();
    portfolioData = getDataStructure(cloudinaryResponse);
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }

  if (!portfolioData) {
    return (
      <div>
        <p>Errore nel caricamento dei dati. Riprova più tardi.</p>
      </div>
    );
  }
  const portfolioCultura = portfolioData["IMMAGINA"]["Cultura"]["Portfolio"];

  /* ---------- TEXT CAPTIONS AND RENAME ---------- */

  Texts(portfolioCultura);
  Captions(portfolioCultura);
  renameCategory(portfolioData, "Gotthardbahn", "Gotthardbahn 2016");

  const path = await params;
  const categoriesFromPath = path.categories;

  return (
    <PortfolioContainer
      portfolioCultura={portfolioCultura}
      categoriesFromPath={categoriesFromPath}
    />
  );
}

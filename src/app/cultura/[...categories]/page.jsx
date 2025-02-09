// ID CATEGORIES PAGE

import fetchPortfolioData from "@/utils/fetchPortfolioData";
import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";
import { Texts } from "@/texts/texts";
import { Captions } from "@/texts/captions";
import { renameCategory } from "@/texts/renameCategory";

// Generate static paths for all categories
export async function generateStaticParams() {
  const portfolioData = await fetchPortfolioData("Cultura");

  if (!portfolioData) {
    return [];
  }

  const categories = Object.keys(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]);

  return categories.map((category) => ({
    categories: [category.toLowerCase().replace(/\s+/g, "-")], // Format for URL
  }));
}

// Main component
export default async function CulturaCategories({ params }) {
  const portfolioData = await fetchPortfolioData("Cultura");

  if (!portfolioData) {
    return (
      <div>
        <p>Errore nel caricamento dei dati. Riprova più tardi.</p>
      </div>
    );
  }

  const portfolioCultura = portfolioData["IMMAGINA"]["Cultura"]["Portfolio"];

  const par = await params;
  const categoriesFromPath = await par.categories;

  // Apply transformations
  Texts(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]);
  Captions(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]);
  renameCategory(portfolioData, "Gotthardbahn", "Gotthardbahn 2016");

  console.log(portfolioCultura["Photography"].pictures);

  return (
    <PortfolioContainer
      portfolioCultura={portfolioCultura}
      categoriesFromPath={categoriesFromPath}
    />
  );
}

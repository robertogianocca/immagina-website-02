import fetchPortfolioData from "@/utils/fetchPortfolioData";
import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";

// fetchPortfolioData("Cultura");

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

  return (
    <PortfolioContainer
      portfolioCultura={portfolioCultura}
      categoriesFromPath={categoriesFromPath}
    />
  );
}

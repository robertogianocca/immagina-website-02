import { getDataStructure } from "@/utils/portfolio-data-structure";

import PortfolioContainer from "@/components/Portfolio/PortfolioContainer/PortfolioContainer";
import PortfolioGallery from "@/components/Portfolio/PortfolioGallery/PortfolioGallery";

// Fetch data for the portfolio
async function fetchPortfolioData() {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/?max_results=500&metadata=true&context=true&prefix=IMMAGINA/Gallerie%20Private/&type=upload`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
          ).toString("base64")}`,
        },
        // cache: "force-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch portfolio data");
    }

    const cloudinaryResponse = await response.json();
    const portfolioData = getDataStructure(cloudinaryResponse);

    return portfolioData;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return null;
  }
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const portfolioData = await fetchPortfolioData();

  if (!portfolioData) {
    return [];
  }

  const categories = Object.keys(portfolioData["IMMAGINA"]["Gallerie Private"]);

  return categories.map((category) => ({
    categories: [category.toLowerCase().replace(/\s+/g, "-")], // Format for URL
  }));
}

// Main component
export default async function CulturaCategories({ params }) {
  const portfolioData = await fetchPortfolioData();

  if (!portfolioData) {
    return (
      <div>
        <p>Errore nel caricamento dei dati. Riprova più tardi.</p>
      </div>
    );
  }

  const portfolioCultura = portfolioData["IMMAGINA"]["Gallerie Private"];

  console.log(portfolioCultura["Test"]);

  return (
    <div>
      <PortfolioGallery
        currentCategoryPortfolio={portfolioCultura["Test"]}
        title={"test"}
        shortDescription={"test"}
        longDescription={"test"}
        pathTree={["uno"]}
      />
    </div>
  );
}

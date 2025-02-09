// FETCH PORTFOLIO DATA FUNCTION

import { getDataStructure } from "@/utils/portfolio-data-structure";
// import { Texts } from "@/texts/texts";
// import { Captions } from "@/texts/captions";
// import { renameCategory } from "@/texts/renameCategory";

export default async function fetchPortfolioData(path) {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/resources/image/?max_results=500&metadata=true&context=true&prefix=IMMAGINA/${path}/&type=upload`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
          ).toString("base64")}`,
        },
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch portfolio data");
    }

    const cloudinaryResponse = await response.json();
    const portfolioData = getDataStructure(cloudinaryResponse);

    // Apply transformations
    // Texts(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]);
    // Captions(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]);
    // renameCategory(portfolioData, "Gotthardbahn", "Gotthardbahn 2016");

    return portfolioData;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return null;
  }
}

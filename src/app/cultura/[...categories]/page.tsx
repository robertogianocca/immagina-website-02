import { getDataStructure } from "@/utils/portfolio-data-structure";

export default async function CulturaCategories() {
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
      }
    );
    const cloudinaryResponse = await response.json();
    portfolioData = getDataStructure(cloudinaryResponse);
    // console.log(cloudinaryResponse);
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

  //   console.log(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]["Photography"]);

  return (
    <div>
      <h1>Portfolio Cultura</h1>
    </div>
  );
}

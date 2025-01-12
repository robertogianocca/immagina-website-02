import { getDataStructure } from "@/utils/portfolio-data-structure";
import Link from "next/link";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";

export default async function Cultura() {
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

  const portfolioCultura = portfolioData["IMMAGINA"]["Cultura"]["Portfolio"];

  const categoryList = Object.keys(portfolioCultura);

  const mappedCategoryList = categoryList.map((item, index) => {
    return (
      <li key={index}>
        <PortfolioCategoryCard
          title={item}
          shortDescription={portfolioCultura[item].pictures[0].shortDescription}
          cover={portfolioCultura[item].pictures[0].url}
          hrefLink={`/cultura/${item}`}
        />
      </li>
    );
  });

  return (
    <div>
      <h1 className="text-4xl mb-20">HomePage Cultura</h1>
      <h1 className="text-3xl mb-10">Portfolio</h1>
      <ul className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 pb-20 text-customBrown">
        {mappedCategoryList}
      </ul>
    </div>
  );
}

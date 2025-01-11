import { getDataStructure } from "@/utils/portfolio-data-structure";
import Link from "next/link";

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

  //   console.log(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]);

  const categoryList = Object.keys(portfolioData["IMMAGINA"]["Cultura"]["Portfolio"]);

  //   console.log(categoryList);

  const mappedCategoryList = categoryList.map((item, index) => {
    return (
      <li key={index}>
        <Link href={`/cultura/${item}`}>
          <div className="w-[200px] h-[200px] bg-blue-600">
            <p className="">{item}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h1 className="text-4xl mb-20">HomePage Cultura</h1>
      <h1 className="text-3xl mb-10">Portfolio</h1>
      <ul className="bg-slate-500">{mappedCategoryList}</ul>
    </div>
  );
}

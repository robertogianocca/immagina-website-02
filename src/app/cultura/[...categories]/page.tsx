import { getDataStructure } from "@/utils/portfolio-data-structure";
import Link from "next/link";
import Image from "next/image";

export default async function CulturaCategories({ params }: any) {
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

  let currentCategoryPortfolio = portfolioCultura;

  const categoriesFromPath = await params.categories;

  // Traverse the portfolio object to find the current category
  categoriesFromPath.forEach((item: string) => {
    currentCategoryPortfolio =
      currentCategoryPortfolio[item.charAt(0).toUpperCase() + item.slice(1)];
  });

  const currentCategoryName =
    categoriesFromPath[categoriesFromPath.length - 1].charAt(0).toUpperCase() +
    categoriesFromPath[categoriesFromPath.length - 1].slice(1).toLowerCase();

  // Filter out the "pictures" key
  const subCategories = Object.keys(currentCategoryPortfolio).filter(
    (item) => item.toLowerCase() !== "pictures"
  );

  const mappedSubCategories = subCategories.map((item, index) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
    const formattedPath = categoriesFromPath
      .map((category: string) => category.toLowerCase().replace(/\s+/g, "-"))
      .join("/");

    return (
      <li key={index}>
        <Link href={`/cultura/${formattedPath}/${formattedItem}`}>
          <div className="w-[200px] h-[200px] bg-blue-600">
            <h1 className="text-lg">{item}</h1>
            <Image
              src={currentCategoryPortfolio[item].pictures[0].url}
              width={50}
              height={50}
              alt={item}
            />
            <p>{currentCategoryPortfolio[item].pictures[0].shortDescription}</p>
            <p>{item}</p>
          </div>
        </Link>
      </li>
    );
  });

  const mappedPath = categoriesFromPath.slice(0, -1).map((item, index) => (
    <p key={index}>
      <Link href={`/cultura/${categoriesFromPath.slice(0, index + 1).join("/")}`}>{item}</Link>
    </p>
  ));

  return (
    <div>
      <h1 className="text-4xl mb-20">Portfolio Cultura</h1>
      <p>portfolio</p>
      {mappedPath}
      <h1 className="text-4xl mb-5">{currentCategoryName}</h1>
      <ul className="bg-slate-500 flex flex-row gap-4">{mappedSubCategories}</ul>
    </div>
  );
}

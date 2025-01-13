import { getDataStructure } from "@/utils/portfolio-data-structure";
import { renameCategory } from "./renameCategory";
import { Texts } from "./texts";
import { Captions } from "./captions";
import Link from "next/link";
import Wrapper from "@/components/Wrapper/Wrapper";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import PortfolioGallery from "@/components/Portfolio/PortfolioGallery/PortfolioGallery";

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

  /* ---------- TEXT CAPTIONS AND RENAME ---------- */

  Texts(portfolioCultura);
  Captions(portfolioCultura);
  renameCategory(portfolioData, "Gotthardbahn", "Gotthardbahn 2016");

  const path = await params;
  const categoriesFromPath = path.categories;

  /* ---------- CURRENT CATEGORY NAME ---------- */
  const currentCategoryName =
    categoriesFromPath[categoriesFromPath.length - 1].charAt(0).toUpperCase() +
    categoriesFromPath[categoriesFromPath.length - 1].slice(1).toLowerCase();

  /* ---------- CURRENT CATEGORY PORTFOLIO TREE ---------- */

  let currentCategoryPortfolio = portfolioCultura;
  // Traverse the portfolio object to find the current category
  categoriesFromPath.forEach((item) => {
    const formattedItem = item
      .replace("a-s", "a's-s")
      .split("-") // Split the string into an array of words using "-" as the delimiter
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join the array back into a string with spaces

    currentCategoryPortfolio = currentCategoryPortfolio[formattedItem];
  });

  /* ---------- PATH TREE ---------- */

  const mappedPath = categoriesFromPath.slice(0, -1).map((item, index) => (
    <p key={index}>
      <Link href={`/cultura/${categoriesFromPath.slice(0, index + 1).join("/")}`}>{item}</Link>
    </p>
  ));

  /* ---------- SUBCATEGORIES - (All the subcategories inside the current)  ---------- */

  // Filter out the "pictures" key
  const subCategories = Object.keys(currentCategoryPortfolio).filter(
    (item) => item.toLowerCase() !== "pictures"
  );

  const mappedSubCategories = subCategories.map((item, index) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-").replace("a's-s", "a-s");
    const formattedPath = categoriesFromPath
      .map((category) => category.toLowerCase().replace(/\s+/g, "-"))
      .join("/");

    return (
      <li key={index}>
        <PortfolioCategoryCard
          title={item}
          shortDescription={currentCategoryPortfolio[item].pictures[0].shortDescription}
          cover={currentCategoryPortfolio[item].pictures[0].url}
          coverAlt={currentCategoryPortfolio[item].pictures[0].alt}
          hrefLink={`/cultura/${formattedPath}/${formattedItem}`}
        />
      </li>
    );
  });

  /* ---------- GALLERY ---------- */

  if (currentCategoryPortfolio.images) {
    return (
      <PortfolioGallery
        currentCategoryPortfolio={currentCategoryPortfolio}
        title={currentCategoryName}
        // shortDescription={currentCategoryPortfolio[item].pictures[0].shortDescription}
        // cover={currentCategoryPortfolio[item].pictures[0].url}
        // coverAlt={currentCategoryPortfolio[item].pictures[0].alt}
        // hrefLink={`/cultura/${formattedPath}/${formattedItem}`}
        mappedPath={mappedPath}
      />
    );
  } else {
    /* ---------- LIST OF CARDS ---------- */

    return (
      <Wrapper>
        <div className="text-customBrown">
          {/* <h1 className="text-4xl mb-20">Portfolio Cultura</h1> */}
          {/* <p>portfolio</p> */}
          {/* {mappedPath} */}
          {/* <h1 className="text-4xl mb-5">{currentCategoryName}</h1> */}
          <ul className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 xl:gap-8 pb-20">
            {mappedSubCategories}
          </ul>
        </div>
      </Wrapper>
    );
  }
}

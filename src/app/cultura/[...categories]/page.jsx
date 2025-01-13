import { getDataStructure } from "@/utils/portfolio-data-structure";
import { renameCategory } from "./renameCategory";
import { Texts } from "./texts";
import { Captions } from "./captions";
import Link from "next/link";
import Wrapper from "@/components/Wrapper/Wrapper";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import PortfolioGallery from "@/components/Portfolio/PortfolioGallery/PortfolioGallery";
import PortfolioNavigation from "@/components/Portfolio/PortfolioNavigation/PortfolioNavigation";
import Triangle from "@/components/Icons/Triangle";

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
  const pathTree = categoriesFromPath.slice(0, -1);

  const mappedPath = pathTree.map((item, index) => (
    <div key={index}>
      <Link
        href={`/cultura/${categoriesFromPath.slice(0, index + 1).join("/")}`}
        className="flex items-center"
      >
        <Triangle color={index == 0 ? "border-l-customRed" : "border-l-customGreen"} />
        <p className="pl-1 pr-2">{item}</p>
      </Link>
    </div>
  ));

  /* ---------- SUBCATEGORIES CARDS - (All the subcategories inside the current)  ---------- */

  // Filter out the "pictures" key
  const subCategories = Object.keys(currentCategoryPortfolio).filter(
    (item) => item.toLowerCase() !== "pictures"
  );

  const mappedSubCategories = subCategories.map((item, index) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, "-").replace("a's-s", "a-s");
    const formattedPath = categoriesFromPath
      .map((category) => category.toLowerCase().replace(/\s+/g, "-"))
      .join("/");

    /* ---------- LABELS  ---------- */
    let labelColor = "";
    if (categoriesFromPath.length == 1) {
      labelColor = "border-l-customGreen";
    }
    if (categoriesFromPath.length == 2) {
      labelColor = "border-l-customYellow";
    }

    /* ---------- CARDS  ---------- */

    return (
      <li key={index}>
        <PortfolioCategoryCard
          title={item}
          shortDescription={currentCategoryPortfolio[item].pictures[0].shortDescription}
          cover={currentCategoryPortfolio[item].pictures[0].url}
          coverAlt={currentCategoryPortfolio[item].pictures[0].alt}
          labelColor={labelColor}
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
    /* ---------- PORTFOLIO ---------- */
    return (
      <Wrapper>
        <div className="text-customBrown">
          {/* ---------- Portfolio Navigation ---------- */}
          <PortfolioNavigation
            title={currentCategoryName}
            longDescription={currentCategoryPortfolio.pictures[0].longDescription}
            path={mappedPath}
          />

          {/* ---------- Card List ---------- */}

          <ul className="main-grid">{mappedSubCategories}</ul>
        </div>
      </Wrapper>
    );
  }
}

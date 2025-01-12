// PORTFOLIO CONTAINER

"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import PortfolioTitleNavigation from "../PortfolioTitleNavigation/PortfolioTitleNavigation";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import PortfolioGallery from "../PortfolioGallery/PortfolioGallery";
import Triangle from "@/components/Icons/Triangle";
import logoBlue from "/public/images/logo/logo-immagina-blue.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, usePathname } from "next/navigation";

export default function PortfolioContainer({ portfolioData, categoriesFromPath }: any) {
  // Transform categoriesFromPath as the objects name, remove "-" (uppercasing after)
  const transformedCategoriesFromPath = categoriesFromPath.map((item: string) => {
    // Exception of "Slava's Snowshow"
    item = item.replace("a-s", "a's-s");
    item = item.replace("-", " ");
    item = item.replace("-", " ");
    item = item.replace("autostrada ", "autostrada - ");
    return item;
  });

  // Go through the portfolio object
  transformedCategoriesFromPath.forEach((element: string) => {
    portfolioData = element === undefined ? portfolioData : portfolioData[element];
  });

  // Current Category formatted with space and uppercase
  let currentCategory = transformedCategoriesFromPath[transformedCategoriesFromPath.length - 1];
  currentCategory = currentCategory.split(" ");
  currentCategory = currentCategory.map((item: string, index: number) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  currentCategory = currentCategory.join(" ");

  // Current Catregory description
  const currentCategoryDescription =
    portfolioData?.pictures?.[0]?.description || "No description available";

  // Not Found Page
  if (!portfolioData) {
    notFound();
  }

  // Set subCategories and remove "pictures"
  const subCategoryList = Object.keys(portfolioData);
  if (subCategoryList.includes("pictures") && subCategoryList.length !== 1) {
    let index = subCategoryList.indexOf("pictures");
    if (index !== -1) {
      subCategoryList.splice(index, 1);
    }
  }

  const categoryColors =
    portfolioData[subCategoryList[0]].images === undefined
      ? "border-l-red-600"
      : "border-l-green-600";

  const subCategoryColors =
    portfolioData[subCategoryList[0]].images === undefined
      ? "border-l-green-600"
      : "border-l-amber-400";

  const hamburgerColors =
    portfolioData[subCategoryList[0]].images === undefined ? "text-green-600" : "text-amber-400";
  // --------------------------------- PATHS ---------------------------------
  const mainCategory = usePathname().split("/")[1];

  const pathList = categoriesFromPath.slice(0, -1).map((item: string, index: number) => {
    return (
      <div key={index} className="flex flex-row">
        <Triangle addClass="md:border-l-[13px] xl:border-l-[19px] xl:border-b-[19px] md:border-b-[13px] border-l-red-600" />
        <Link href={`/${mainCategory}/${categoriesFromPath.slice(0, 1 + index).join("/")}`}>
          <h3 className=" hover:text-customRed">
            {categoriesFromPath.slice(0, -1).length - 1 == index ? item + "" : item + " /"}
          </h3>
        </Link>
      </div>
    );
  });

  const paramsObject = useParams();
  const params = paramsObject.categories || ""; // Ensure params is at least an empty string
  const paramsArray = Array.isArray(params) ? params : params.split("/");
  const categoryBefore = paramsArray.slice(0, -1);

  const sortedSubCategoryList = subCategoryList.slice().sort((a, b) => {
    const indexA = portfolioData[a]?.pictures?.[0]?.indexNumber ?? Infinity; // Fallback to Infinity for undefined
    const indexB = portfolioData[b]?.pictures?.[0]?.indexNumber ?? Infinity;
    return indexA - indexB;
  });

  const mappedSubCategory = sortedSubCategoryList.map((item, index) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, delay: 1 }}
      key={index}
    >
      <PortfolioCategoryCard
        title={item}
        shortDescription={
          portfolioData[item]?.pictures?.[0]?.heading || "No short description available"
        }
        cover={portfolioData[item]?.pictures?.[0]?.url || "/images/samples/01.jpg"}
        transformedCategoriesFromPath={transformedCategoriesFromPath}
        addClass={subCategoryColors}
      />
    </motion.div>
  ));

  return (
    <>
      {subCategoryList[0] === "images" && subCategoryList.length === 1 ? (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <PortfolioGallery
            currentCategory={currentCategory}
            transformedCategoriesFromPath={transformedCategoriesFromPath}
            shortCategoryDescription={portfolioData.pictures[0].heading}
            categoryDescription={portfolioData.pictures[0].description}
            picturesList={portfolioData.images.pictures}
          />
        </motion.div>
      ) : (
        <>
          <NavigationBar
            color="text-customRed"
            menuColor="text-customRed hover:border-b-2 hover:border-customRed"
            bgColor="bg-customWhite lg:shadow-xl lg:shadow-slate-200"
          />
          <Wrapper>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 pb-20 text-customBrown">
              {/* ---------- TITLE NAVIGATION  ---------- */}
              <PortfolioTitleNavigation
                categoriesFromPath={categoriesFromPath}
                transformedCategoriesFromPath={transformedCategoriesFromPath}
                categoryBefore={categoryBefore}
                currentCategory={currentCategory}
                currentCategoryDescription={currentCategoryDescription}
                pathList={pathList}
                subCategoryList={subCategoryList}
                categoryColors={categoryColors}
                subCategoryColors={subCategoryColors}
                hamburgerColors={hamburgerColors}
              />
              {/* ---------- DESCRIPTION DESKTOP  ---------- */}
              <div className="xl:block col-span-2">
                <p
                  className="hidden xl:block text-base font-semibold col-span-2"
                  dangerouslySetInnerHTML={{ __html: currentCategoryDescription }}
                />
              </div>
              {mappedSubCategory}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
}

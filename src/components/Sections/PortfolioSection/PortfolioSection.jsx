"use client";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection({ categoryList, portfolioData }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Stagger animation delay
        duration: 0.4,
      },
    }),
  };

  const renderCategoryCard = (item, index) => {
    const isVideo = item === "video"; // Check if the item is "Video"
    const shortDescription = isVideo
      ? "IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica only."
      : portfolioData[item]?.pictures?.[0]?.heading;

    const cover = isVideo
      ? "https://res.cloudinary.com/immagina/image/upload/v1733128441/IMMAGINA/Video/Video_-_Cover_kvdqep.jpg"
      : portfolioData[item]?.pictures?.[0]?.url;

    return (
      <motion.div
        key={item}
        variants={cardVariants}
        initial="hidden"
        custom={index}
        whileInView="visible"
        viewport={{ once: true, amount: 0.04 }}
      >
        <PortfolioCategoryCard
          title={item}
          shortDescription={shortDescription}
          cover={cover}
          coverAlt={`${item} Category Cover`}
          transformedCategoriesFromPath={item}
          addClass="border-l-red-600"
        />
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10">
      <AnimatePresence>
        {categoryList.map(renderCategoryCard)}
        {renderCategoryCard("video", categoryList.length)}
      </AnimatePresence>
    </div>
  );
}

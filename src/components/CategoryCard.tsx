import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: { name: string };
  imageSrc: string;
  description?: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  imageSrc,
  description,
  className,
}) => {
  // Helper to convert category name to URL-friendly format
  const getCategoryParam = (categoryName: string): string => {
    const categoryMap: { [key: string]: string } = {
      "Garden Tools": "garden-tools",
      "Animal Feed": "animal-feed",
      Fertilizers: "fertilizers",
      "Pest Control": "pest-control",
      Seeds: "seeds",
    };

    return categoryMap[categoryName] || "all";
  };

  return (
    <motion.div
      className={`relative h-60 lg:h-full bg-white shadow-md rounded-xl overflow-hidden group ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={imageSrc}
        loading="lazy"
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-textColors-light text-center transform transition-transform duration-300 translate-y-0 group-hover:translate-y-[-4px]">
        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
        {description && (
          <p className="text-sm text-textColors-light/90 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
            {description}
          </p>
        )}
        <Link to={`/gallery?category=${getCategoryParam(category.name)}`}>
          <motion.button
            className="mt-3 px-4 py-2 bg-app-secondary/80 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Products
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;

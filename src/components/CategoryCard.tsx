import React from "react";

interface CategoryCardProps {
  category: { name: string };
  imageSrc: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, imageSrc, className }) => {
  return (
    <div
      className={`relative h-60 lg:h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <img
        src={imageSrc}
        loading="lazy"
        alt={category.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-to-transparent text-textColors-light text-center backdrop:backdrop-blur-3xl">
        <h3 className="text-xl">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;

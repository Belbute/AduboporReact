import React from "react";

interface CategoryCardProps {
  category: { name: string };
  imageSrc: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, imageSrc, className }) => {
  return (
    <div
      className={`relative h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <img
        src={imageSrc}
        loading="lazy"
        alt={category.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-black-1000 text-white text-center">
        <h3 className="text-xl font-semibold">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;

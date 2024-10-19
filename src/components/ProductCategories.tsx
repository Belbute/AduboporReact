import React from "react";

// Dummy data for categories, replace these with your actual categories
const categories = [
  { name: "Garden Tools", image: "src/assets/AduboporBackground2.3.png" },
  { name: "Animal Feed", image: "src/assets/AduboporBackground2.2.png" },
  { name: "Fertilizers", image: "src/assets/AduboporBackground2.1.png" },
  { name: "Pest Control", image: "src/assets/AduboporBackground2.png" },
  { name: "Seeds", image: "src/assets/AduboporBackground.png" },
  { name: "Pet Supplies", image: "src/assets/AduboporBackground2.4.png" },
];

const ProductCategories = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl text-center font-bold mb-8">Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;

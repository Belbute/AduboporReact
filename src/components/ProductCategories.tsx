const categories = [
  { name: "Garden Tools", image: "src/assets/AduboporBackground2.4.png" },
  { name: "Animal Feed", image: "src/assets/AduboporBackground2.3.png" },
  { name: "Fertilizers", image: "src/assets/AduboporBackground2.3.png" },
  { name: "Pest Control", image: "src/assets/AduboporBackground2.3.png" },
  { name: "Seeds", image: "src/assets/AduboporBackground2.3.png" },
];

const ProductCategories = () => {
  return (
    <div className="container mx-auto py-10 flex flex-col lg:flex-row gap-10" id="Products">
      {/* Text Section (Left Side) */}
      <div className="lg:w-1/3 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-7">Explore Our Products</h2>
        <p className="text-lg mb-4">
          At Adubopor, we offer a wide range of products tailored for your garden, pets, and home.
          Whether you’re a seasoned gardener or a pet enthusiast, our products ensure quality and
          satisfaction. Since 1986, we've been committed to helping you achieve the best results.
        </p>
        <p className="text-lg">
          Browse our product categories to find everything you need, from garden tools to animal
          feed. Whatever you’re looking for, we’ve got it covered!
        </p>
      </div>

      {/* Categories Section (Right Side) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3 lg:grid-rows-[100px_25px_100px_100px_100px_100px_100px_100px_50px]  lg:gap-y-3 lg:gap-x-3 lg:grid-flow-col">
        {/* Col 1 - Top blank space */}
        <div className="hidden lg:lg:block bg-app-2 rounded-lg lg:row-span-1"></div>
        {/* Col 1 - 1ª Image */}
        <div className="bg-white rounded-lg lg:row-span-6">
          <div className="relative h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={categories[0].image}
              loading="lazy"
              alt={categories[0].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-black-1000 text-white text-center">
              <h3 className="text-xl font-semibold">{categories[0].name}</h3>
            </div>
          </div>
        </div>

        {/* Col 2 - 1ª Image */}
        <div className="bg-green-200 rounded-lg lg:row-span-4">
          <div className="relative h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={categories[1].image}
              loading="lazy"
              alt={categories[1].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-black-1000 text-white text-center">
              <h3 className="text-xl font-semibold">{categories[1].name}</h3>
            </div>
          </div>
        </div>
        {/* Col 2 - 2ª Image */}
        <div className="bg-red-200 rounded-lg lg:row-span-5">
          <div className="relative h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={categories[2].image}
              loading="lazy"
              alt={categories[2].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-black-1000 text-white text-center">
              <h3 className="text-xl font-semibold">{categories[2].name}</h3>
            </div>
          </div>
        </div>
        {/* Col 3 - Top blank space */}
        <div className="bg-app-2 hidden lg:lg:block rounded-lg lg:row-span-2"></div>
        {/* Col 3 - 1ª Image */}
        <div className="bg-teal-200 rounded-lg lg:row-span-4">
          <div className="relative h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={categories[3].image}
              loading="lazy"
              alt={categories[3].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-black-1000 text-white text-center">
              <h3 className="text-xl font-semibold">{categories[3].name}</h3>
            </div>
          </div>
        </div>
        {/* Col 3 - 2ª Image */}
        <div className="bg-yellow-200 rounded-lg lg:row-span-2">
          <div className="relative h-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={categories[4].image}
              loading="lazy"
              alt={categories[4].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-black-1000 text-white text-center">
              <h3 className="text-xl font-semibold">{categories[4].name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;

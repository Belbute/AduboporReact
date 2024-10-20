import CategoryCard from "./CategoryCard";

const categories = [
  { name: "Garden Tools", image: "src/assets/AduboporBackground2.4.png" },
  { name: "Animal Feed", image: "src/assets/AduboporBackground2.3.png" },
  { name: "Fertilizers", image: "src/assets/AduboporBackground2.3.png" },
  { name: "Pest Control", image: "src/assets/AduboporBackground2.3.png" },
  { name: "Seeds", image: "src/assets/AduboporBackground2.3.png" },
];
const Spacer: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`hidden bg-app-2 rounded-lg lg:block ${className}`} />
);

const ProductCategories = () => {
  return (
    <div
      className="container mx-auto py-10 px-4 sm:px-6 flex flex-col lg:flex-row gap-10"
      id="Products"
    >
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
        <Spacer className="lg:row-span-1" />
        {/* Col 1 - 1ª Image */}
        <CategoryCard
          category={categories[0]}
          imageSrc={categories[0].image}
          className="lg:row-span-6"
        />

        {/* Col 2 - 1ª Image */}
        <CategoryCard
          category={categories[1]}
          imageSrc={categories[1].image}
          className="lg:row-span-3"
        />
        {/* Col 2 - 2ª Image */}
        <CategoryCard
          category={categories[2]}
          imageSrc={categories[2].image}
          className="lg:row-span-6"
        />
        {/* Col 3 - Top blank space */}
        <Spacer className="lg:row-span-2" />
        {/* Col 3 - 1ª Image */}
        <CategoryCard
          category={categories[3]}
          imageSrc={categories[3].image}
          className="lg:row-span-4"
        />
        {/* Col 3 - 2ª Image */}
        <CategoryCard
          category={categories[4]}
          imageSrc={categories[4].image}
          className="sm:col-span-2 sm:h-60 md:row-span-1 lg:col-span-1 lg:row-span-2"
        />
      </div>
    </div>
  );
};

export default ProductCategories;

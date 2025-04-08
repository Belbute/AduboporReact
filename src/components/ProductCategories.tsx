import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Garden Tools",
    image: "src/assets/AduboporBackground2.4.png",
    description: "Premium quality tools for all your gardening needs",
  },
  {
    name: "Animal Feed",
    image: "src/assets/AduboporBackground2.3.png",
    description: "Nutritious feed for pets and livestock",
  },
  {
    name: "Fertilizers",
    image: "src/assets/AduboporBackground2.3.png",
    description: "Organic and synthetic options for optimal growth",
  },
  {
    name: "Pest Control",
    image: "src/assets/AduboporBackground2.3.png",
    description: "Safe and effective solutions for garden pests",
  },
  {
    name: "Seeds",
    image: "src/assets/AduboporBackground2.3.png",
    description: "High-quality seeds for vegetables, flowers, and herbs",
  },
];

const Spacer: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`hidden bg-app-main rounded-lg lg:block ${className}`} />
);

const ProductCategories = () => {
  return (
    <section className="bg-app-main py-24" id="Products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Side */}
          <motion.div
            className="flex flex-col justify-center text-textColors-light"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Section Heading */}
            <div className="space-y-6 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-textColors-light">
                Our <span className="text-app-secondary">Products</span>
              </h2>
              <div className="w-24 h-1 bg-app-secondary rounded-full"></div>
              <p className="text-lg text-textColors-light/90 max-w-xl">
                Explore our curated selection of premium products for your garden, pets, and home.
                Quality and satisfaction guaranteed since 1986.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold">Find Everything You Need</h3>
              <p className="text-lg text-textColors-light/90">
                At Adubopor, we offer a wide range of products tailored for your garden, pets, and
                home. Whether you're a seasoned gardener or a pet enthusiast, our products ensure
                quality and satisfaction.
              </p>
              <p className="text-lg text-textColors-light/90">
                Browse our product categories to find everything you need, from garden tools to
                animal feed. Whatever you're looking for, we've got it covered!
              </p>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-app-secondary text-textColors-light rounded-lg hover:bg-app-secondary/80 transition-colors w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us For More Information
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Column - Categories Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 lg:grid-rows-[100px_25px_100px_100px_100px_100px_100px_100px_50px] lg:gap-y-4 lg:gap-x-4 lg:grid-flow-col">
              {/* Col 1 - Top blank space */}
              <Spacer className="lg:row-span-1" />
              {/* Col 1 - 1ª Image */}
              <CategoryCard
                category={categories[0]}
                imageSrc={categories[0].image}
                description={categories[0].description}
                className="lg:row-span-6"
              />

              {/* Col 2 - 1ª Image */}
              <CategoryCard
                category={categories[1]}
                imageSrc={categories[1].image}
                description={categories[1].description}
                className="lg:row-span-3"
              />
              {/* Col 2 - 2ª Image */}
              <CategoryCard
                category={categories[2]}
                imageSrc={categories[2].image}
                description={categories[2].description}
                className="lg:row-span-6"
              />
              {/* Col 3 - Top blank space */}
              <Spacer className="lg:row-span-2" />
              {/* Col 3 - 1ª Image */}
              <CategoryCard
                category={categories[3]}
                imageSrc={categories[3].image}
                description={categories[3].description}
                className="lg:row-span-4"
              />
              {/* Col 3 - 2ª Image */}
              <CategoryCard
                category={categories[4]}
                imageSrc={categories[4].image}
                description={categories[4].description}
                className="sm:col-span-2 sm:h-60 md:row-span-1 lg:col-span-1 lg:row-span-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample gallery data - you can move this to data/lists.ts later
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2670&auto=format&fit=crop",
    alt: "Verdant crop field with fertilizer application",
    category: "fields",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1622383563227-04401ab4e5b4?q=80&w=2574&auto=format&fit=crop",
    alt: "Close-up of fertilizer pellets",
    category: "products",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop",
    alt: "Farm machinery applying fertilizer",
    category: "equipment",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2670&auto=format&fit=crop",
    alt: "Worker handling agricultural products",
    category: "people",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1592982537447-53ac1f7284ca?q=80&w=2574&auto=format&fit=crop",
    alt: "Sustainable farming practices",
    category: "fields",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1599033065339-c3f8cc0caf3f?q=80&w=2574&auto=format&fit=crop",
    alt: "Product packaging and display",
    category: "products",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1624806992066-5ffaee197463?q=80&w=2574&auto=format&fit=crop",
    alt: "Specialized fertilizer application",
    category: "equipment",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1620277489602-d935500dc5de?q=80&w=2574&auto=format&fit=crop",
    alt: "Team meeting at production facility",
    category: "people",
  },
];

// Available filter categories
const categories = ["all", "fields", "products", "equipment", "people"];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = galleryImages.filter(
    (image) => activeCategory === "all" || image.category === activeCategory
  );

  return (
    <section className="bg-app-main py-24" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textColors-light">
            Our <span className="text-app-secondary">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-app-secondary rounded-full mx-auto"></div>
          <p className="text-lg text-textColors-light/90 max-w-2xl mx-auto">
            Explore our collection of images showcasing our products, fields, equipment, and the
            dedicated people behind our success.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-app-secondary text-textColors-light"
                  : "bg-app-secondary/10 text-textColors-light hover:bg-app-secondary/20"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md"
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-textColors-light text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 bg-app-secondary/80 rounded-full p-2 text-white hover:bg-app-secondary transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {galleryImages.find((img) => img.id === selectedImage) && (
                  <>
                    <img
                      src={galleryImages.find((img) => img.id === selectedImage)?.src}
                      alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white text-center rounded-b-lg">
                      <p>{galleryImages.find((img) => img.id === selectedImage)?.alt}</p>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

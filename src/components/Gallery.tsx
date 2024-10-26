import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, src: "src/assets/gallery/image1.jpg", alt: "Image 1" },
  { id: 2, src: "src/assets/gallery/image2.jpg", alt: "Image 2" },
  { id: 3, src: "src/assets/gallery/image3.jpg", alt: "Image 3" },
  // Add more images as needed...
];

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-app-main mb-10 text-center">Our Gallery</h2>
      <p className="text-lg text-textColors-light mb-12 text-center">
        Explore some highlights from our collections, gardens, and customer projects.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-72 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

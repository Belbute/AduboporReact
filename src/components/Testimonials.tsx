import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Relva from "../assets/SVG/Relva.svg";
import Fertelizante from "../assets/SVG/Fertelizante.svg";
import Passear from "../assets/SVG/Passear.png";
import { TestimonialsData } from "../data/lists";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Relva, Fertelizante, Passear];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TestimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 lg:pl-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#122234]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            What People Say About Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-[#122234]/90 mb-4 leading-relaxed">
              Our clients have always been at the heart of our business. Here's what some of them
              have to say about our products and services.
            </p>
            <p className="text-lg text-[#122234]/90 leading-relaxed">
              We take pride in serving clients with exceptional quality. Their testimonials reflect
              our dedication to customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Image Carousel */}
        <div className="lg:w-1/2 w-full h-[500px] relative pr-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative h-full w-[70%] flex items-end justify-start">
                <motion.img
                  src={images[currentIndex % images.length]}
                  alt={TestimonialsData[currentIndex].name}
                  className="max-h-[500px] w-auto object-contain"
                  style={{ minHeight: "300px" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="absolute left-[50%] top-[20%] w-[50%] bg-[#f5f5dc] p-6 rounded-2xl shadow-md before:content-[''] before:absolute before:right-full before:top-[30%] before:w-0 before:h-0 before:border-t-[20px] before:border-t-transparent before:border-r-[30px] before:border-r-[#f5f5dc] before:border-b-[20px] before:border-b-transparent">
                <blockquote className="text-[#122234] italic text-lg md:text-xl">
                  "{TestimonialsData[currentIndex].content}"
                </blockquote>
                <p className="mt-4 font-semibold text-[#AB7F6E] text-lg">
                  — {TestimonialsData[currentIndex].name}
                </p>
                {TestimonialsData[currentIndex].clovers && (
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${
                          i < TestimonialsData[currentIndex].clovers!
                            ? "text-[#AB7F6E]"
                            : "text-[#AB7F6E]/30"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3.56L7.695 8.2 2.8 9.12l3.6 3.517-.85 4.963 4.45-2.337 4.45 2.337-.85-4.963 3.6-3.518-4.895-.918L10 3.56z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

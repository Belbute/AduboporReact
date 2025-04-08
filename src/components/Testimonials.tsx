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
                <img
                  src={images[currentIndex % images.length]}
                  alt={TestimonialsData[currentIndex].name}
                  className="max-h-[500px] w-auto object-contain"
                  style={{ minHeight: "300px" }}
                />
              </div>

              <div className="absolute left-[50%] top-[20%] w-[50%] bg-[#f5f5dc] p-6 rounded-2xl shadow-md before:content-[''] before:absolute before:right-full before:top-[30%] before:w-0 before:h-0 before:border-t-[20px] before:border-t-transparent before:border-r-[30px] before:border-r-[#f5f5dc] before:border-b-[20px] before:border-b-transparent">
                <blockquote className="text-[#122234] italic text-lg md:text-xl">
                  "{TestimonialsData[currentIndex].content}"
                </blockquote>
                <p className="mt-4 font-semibold text-[#AB7F6E] text-lg">
                  — {TestimonialsData[currentIndex].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {TestimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-secondary" : "bg-[#91B1C4]/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

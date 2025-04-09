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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TestimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TestimonialsData.length) % TestimonialsData.length);
  };

  return (
    <section className="bg-app-main py-24" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full flex items-end justify-start">
                  <motion.img
                    src={images[currentIndex % images.length]}
                    alt={TestimonialsData[currentIndex].name}
                    className="max-h-[450px] w-auto object-contain"
                    style={{ minHeight: "300px" }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-textColors-light">
                What People <span className="text-app-secondary">Say</span> About Us
              </h2>
              <div className="w-24 h-1 bg-app-secondary rounded-full"></div>
              <p className="text-lg text-textColors-light/90 max-w-xl">
                Our clients have always been at the heart of our business. Here's what some of them
                have to say about our products and services.
              </p>
            </div>

            {/* Fixed Testimonial Card */}
            <div className="p-6 rounded-lg bg-app-secondary/10 border border-app-secondary/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-app-secondary/20 rounded-lg text-app-secondary">
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
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>

                {/* Animated Content */}
                <div className="space-y-4 min-h-[220px] relative flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="space-y-4">
                        <div className="flex">
                          {TestimonialsData[currentIndex].clovers &&
                            [...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ${
                                  i < TestimonialsData[currentIndex].clovers!
                                    ? "text-textColors-light"
                                    : "text-textColors-light/30"
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
                        <h3 className="text-lg font-semibold text-textColors-light">
                          {TestimonialsData[currentIndex].title}
                        </h3>
                        <p className="text-textColors-light/80 italic">
                          "{TestimonialsData[currentIndex].content}"
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <div className="w-8 h-8 rounded-full bg-app-secondary/20 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-app-secondary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-textColors-light font-medium">
                              {TestimonialsData[currentIndex].name}
                            </p>
                            <p className="text-textColors-light/60 text-sm">Happy Customer</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-2 px-4 py-2 bg-app-secondary/20 text-textColors-light rounded-lg hover:bg-app-secondary/40 transition-colors"
                aria-label="Previous testimonial"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-4 py-2 bg-app-secondary text-textColors-light rounded-lg hover:bg-app-secondary/80 transition-colors"
                aria-label="Next testimonial"
              >
                Next
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

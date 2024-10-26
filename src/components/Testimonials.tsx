import React, { useState, useEffect } from "react";
import Relva from "../assets/SVG/Relva.svg";
import Fertelizante from "../assets/SVG/Fertelizante.svg";
import Passear from "../assets/SVG/Passear.png";
import { TestimonialsData } from "../data/lists";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Relva, Fertelizante, Passear];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="container mx-auto py-20 pt-30 px-4 sm:px-6 flex flex-col gap-10 lg:flex-row-reverse"
      id="testimonials"
    >
      <div className="mx-auto lg:w-1/3 flex flex-col justify-center text-textColors-light">
        <h2 className="text-4xl font-bold mb-7">What People Say About Us</h2>
        <p className="text-lg mb-4">
          Our clients have always been at the heart of our business. Here's what some of them have
          to say about our products and services.
        </p>
        <p className="text-lg">
          We are proud to have served and continue to serve clients with exceptional quality. Their
          testimonials highlight our dedication to customer satisfaction.
        </p>
      </div>
      {/* Testimonials Section (Left Side) */}
      <div className="mx-auto lg:w-2/3 w-full h-[400px] lg:h-[600px] flex justify-center items-center relative overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`absolute transition-opacity duration-1000 ease-in-out lg:w-[70%] h-auto object-contain -translate-x-[50%] lg:-translate-x-[75%] ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ top: 0, left: "50%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

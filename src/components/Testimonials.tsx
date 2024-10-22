import React from "react";
import { TestimonialsData } from "../data/lists";

const Testimonials: React.FC = () => {
  return (
    <div
      className="container mx-auto py-20 pt-30 px-4 sm:px-6 flex flex-col lg:flex-row gap-10 lg:flex-row-reverse"
      id="testimonials"
    >
            <div className=" mx-auto lg:w-1/3 flex flex-col justify-center text-textColors-light">
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
      <div className="w-full grid mx-auto grid-cols-1 gap-4 sm:grid-rows-4 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-6 lg:grid-rows-[100px_100px_100px_100px_100px_100px] lg:gap-y-3 lg:gap-x-3 lg:grid-flow-row">
        <div className="min-h-60 bg-white p-8 rounded-xl items-center text-center lg:col-span-2 lg:row-span-3"></div>
        <div className=" min-h-60 bg-yellow-500 p-8 col-span-1 rounded-xl items-center text-center lg:row-span-3 lg:col-span-3"></div>
        <div className="min-h-60 bg-red-500 p-8 rounded-xl items-center text-center lg:row-span-3 lg:col-span-3"></div>
        <div className="min-h-60 bg-blue-500 p-8 rounded-xl items-center text-center lg:row-span-3 lg:col-span-2"></div>
      </div>
      {/* Text Section (Right Side) */}
    </div>
  );
};

export default Testimonials;

import React from "react";
import { TestimonialsData } from "../data/lists";

const Testimonials: React.FC = () => {
  return (
    <div
      className=" mx-auto py-40 px-4 sm:px-6 flex flex-col lg:flex-row gap-10 bg-app-secondary"
      id="testimonials"
    >
      {/* Testimonials Section (Left Side) */}
      <div className="grid mx-auto grid-cols-1 gap-4 grid-rows-4 sm:grid-cols-2 lg:w-1/2 lg:grid-cols-6 lg:grid-rows-[100px_100px_100px_100px_100px_100px] lg:gap-y-3 lg:gap-x-3 lg:grid-flow-row">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center lg:col-span-2 lg:row-span-3"></div>
        <div className="bg-yellow-500 p-8 rounded-xl shadow-lg flex flex-col items-center text-center lg:row-span-3 lg:col-span-3"></div>
        <div className="bg-red-500 p-8 rounded-xl shadow-lg flex flex-col items-center text-center lg:row-span-3 lg:col-span-3"></div>
        <div className="bg-blue-500 p-8 rounded-xl shadow-lg flex flex-col items-center text-center lg:row-span-3 lg:col-span-2"></div>
      </div>
      <div className="hidden lg:block lg:w-5px"></div>
      <div className="lg:w-[5px]"></div>
      {/* Text Section (Right Side) */}
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
    </div>
  );
};

export default Testimonials;

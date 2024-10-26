import React from "react";
import { TestimonialsData } from "../data/lists";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <div
      className="container mx-auto py-20 pt-30 px-4 sm:px-6 flex flex-col lg:flex-row gap-10 lg:flex-row-reverse"
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
      <div className="w-full grid mx-auto grid-cols-1 gap-4 sm:grid-rows-4 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-6 lg:grid-rows-[100px_100px_100px_100px_100px_100px] lg:gap-y-3 lg:gap-x-3 lg:grid-flow-row">
        <TestimonialCard
          content="This is a wonderful service that I highly recommend!"
          className="lg:col-span-2 lg:row-span-3"
          imageUrl="src/assets/AduboporBackground2.3.png"
          clovers={5}
        />
        <TestimonialCard
          content="Exceptional quality and support from this company!"
          className="lg:row-span-3 lg:col-span-3"
          imageUrl="src/assets/AduboporBackground2.3.png"
          clovers={4}
        />
        <TestimonialCard
          content="We are absolutely thrilled with our experience."
          className="lg:row-span-3 lg:col-span-3"
          imageUrl="src/assets/AduboporBackground2.3.png"
          clovers={5}
        />
        <TestimonialCard
          content="Great products and an even better team behind them."
          className="lg:row-span-3 lg:col-span-2"
          imageUrl="src/assets/AduboporBackground2.3.png"
          clovers={3}
        />
      </div>
    </div>
  );
};

export default Testimonials;

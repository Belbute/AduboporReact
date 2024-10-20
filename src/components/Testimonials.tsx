import React from "react";
import { TestimonialsData } from "../data/lists";

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-textColors-light">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TestimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                className="w-24 h-24 rounded-full mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-md text-black">{testimonial.title}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.98a1 1 0 00.95.69h4.209c.969 0 1.371 1.24.588 1.81l-3.405 2.484a1 1 0 00-.364 1.118l1.286 3.98c.3.921-.755 1.688-1.538 1.118l-3.405-2.484a1 1 0 00-1.175 0l-3.405 2.484c-.783.57-1.838-.197-1.538-1.118l1.286-3.98a1 1 0 00-.364-1.118L2.23 9.407c-.783-.57-.38-1.81.588-1.81h4.209a1 1 0 00.95-.69l1.286-3.98z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-bl">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import ProductCategories from "./ProductCategories";
import VisitUs from "./VisitUs";
import ContactUs from "./ContactUs";

const HomePage: React.FC = () => {
  return (
    <div className="bg-app-main">
      <div className="LandingBackground">
        <Header />
        <Hero />
      </div>

      <ProductCategories />
      <div className="py-16 bg-app-main">
        <Testimonials />
      </div>

      <VisitUs />

      <ContactUs />
    </div>
  );
};

export default HomePage;

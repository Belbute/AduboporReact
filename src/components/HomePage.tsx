import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import ProductCategories from "./ProductCategories";
import VisitUs from "./VisitUs";
import ContactUs from "./ContactUs";

const HomePage: React.FC = () => {
  const location = useLocation();

  // Handle scrolling based on URL hash
  useEffect(() => {
    if (location.hash) {
      // Get the element ID from the hash (removing the # character)
      const id = location.hash.substring(1);

      // Use setTimeout to ensure components are mounted
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          console.log(`Scrolled to element: #${id}`);
        } else {
          console.warn(`Element not found: #${id}`);
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

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

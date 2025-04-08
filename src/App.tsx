import MenuContext from "./MenuContext"; // Make sure to create this context file
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import ProductCategories from "./components/ProductCategories";
import { useState } from "react";
import VisitUs from "./components/VisitUs";
import ContactUs from "./components/ContactUs";
import Timeline from "./components/Timeline";

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      <div className="bg-app-main">
        <div className="LandingBackground">
          <Header />
          <Hero />
        </div>

        <ProductCategories />
        <div className="py-16 bg-app-main">
          <Testimonials />
        </div>
        <Timeline />

        <VisitUs />

        <ContactUs />
      </div>
    </MenuContext.Provider>
  );
}

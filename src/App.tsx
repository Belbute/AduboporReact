import MenuContext from "./MenuContext"; // Make sure to create this context file
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import ProductCategories from "./components/ProductCategories";
import { useState } from "react";

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
        <Testimonials />
        <div className="relative bg-gradient-to-b from-app-1 to-app-2" style={{ height: "500px" }}>
          <h2 className="text-center pt-20">Scroll Down to See the Button</h2>
        </div>
        <div id="visit" className="relative p-10 bg-app-main">
          <h2>Welcome to the Visit Section!</h2>
          <p>This is the content of the visit section.</p>
        </div>
      </div>
    </MenuContext.Provider>
  );
}

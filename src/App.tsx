import MenuContext from "./MenuContext"; // Make sure to create this context file
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import ProductCategories from "./components/ProductCategories";
import { useState } from "react";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="text-app-secondary"
        >
          <path
            className="fill-current"
            fill-opacity="1"
            d="M0,96L60,101.3C120,107,240,117,360,133.3C480,149,600,171,720,165.3C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-app-secondary">
          <Testimonials />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="text-app-main">
            <path
              className="fill-current bg-app-secondary"
              fill-opacity="1"
              d="M0,96L60,101.3C120,107,240,117,360,133.3C480,149,600,171,720,165.3C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>

        <Timeline />

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

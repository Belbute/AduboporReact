// Header.tsx
import { useEffect, useState } from "react";
import LogoImage from "../assets/AduboporLogo.png"; // Adjust the import path as necessary
import Logo from "./HeaderComponents/Logo";
import MobileMenu from "./HeaderComponents/MobileMenu.tsx"; // Adjust the import path as necessary
import HamburgerMenu from "./HeaderComponents/HamburgerMenu"; // Adjust the import path as necessary
import ExpandableButton from "./ExpandableButton"; // Adjust the import path as necessary
import { NavBarItems } from "../data/lists"; // Adjust the import path to go up two levels if necessary
import mapSVG from "../assets/SVG/Map.svg";
import { enablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  // Toggle the navigation menu and scroll behavior
  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
  };

  useEffect(() => {
    // Cleanup scroll behavior when component unmounts
    return () => enablePageScroll();
  }, []);

  return (
    <nav className="z-20 top-0 left-0 right-0 p-3 bg-gradient-to-b from-black to-black/">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Logo src={LogoImage} alt="Adubopor Logo" /> {/* Use the imported image here */}
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden text-white z-40">
          <HamburgerMenu
            opened={openNavigation}
            onClick={toggleNavigation}
            aria-label="Open Navigation Menu"
            aria-expanded={openNavigation}
          />
        </div>
        {/* Nav Links for larger screens */}
        <ul className="hidden ml-8 lg:flex space-x-8 text-white text-lg ">
          {NavBarItems.map((link, index) => (
            <li
              key={index}
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <a
                href={link.href}
                className="rounded-2xl hover:bg-app-3 hover:text-white transform pl-3 pr-3 pt-1 pb-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Auth buttons */}
        <div className="hidden lg:flex space-x-4 w-40 justify-end">
          <ExpandableButton
            href="#visit"
            className="bg-app-3 text-white px-2 rounded-3xl"
            ImgSrc={mapSVG}
          >
            Visite-nos
          </ExpandableButton>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      <MobileMenu isOpen={openNavigation} />
    </nav>
  );
};

export default Header;

// Header.tsx
import { useEffect, useContext } from "react";
import MenuContext from "../MenuContext"; // Adjust the import path as necessary
import LogoImage from "../assets/AduboporLogo.png";
import Logo from "./HeaderComponents/Logo";
import MobileMenu from "./HeaderComponents/MobileMenu";
import HamburgerMenu from "./HeaderComponents/HamburgerMenu";
import ExpandableButton from "./ExpandableButton";
import { NavBarItems } from "../data/lists";
import mapSVG from "../assets/SVG/Map.svg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  // Toggle the navigation menu and scroll behavior
  useEffect(() => {
    if (isMenuOpen) {
      disablePageScroll(); // Disable scroll if the menu is open
    } else {
      enablePageScroll(); // Enable scroll if the menu is closed
    }

    // Cleanup scroll behavior when component unmounts
    return () => enablePageScroll(); // Ensure scroll is enabled when the component unmounts
  }, [isMenuOpen]);

  return (
    <nav className=" z-40 top-0 left-0 right-0 p-3 bg-gradient-to-b from-black to-transparent">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Logo src={LogoImage} alt="Adubopor Logo" />
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden text-textColors-light z-40">
          <HamburgerMenu
            opened={isMenuOpen}
            onClick={toggleMenu}
            aria-label="Open Navigation Menu"
            aria-expanded={isMenuOpen}
          />
        </div>
        {/* Nav Links for larger screens */}
        <ul className="hidden ml-8 lg:flex space-x-8 text-textColors-light text-lg z-30">
          {NavBarItems.map((link, index) => (
            <li
              key={index}
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <a
                href={link.href}
                className="rounded-2xl hover:bg-app-3 hover:text-textColors-light hover:border-2 transform pl-3 pr-3 pt-1 pb-1"
                onClick={() => isMenuOpen && toggleMenu()} // Close mobile menu when clicking links, if open
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
            className="bg-app-3 text-textColors-light px-3 rounded-3xl z-30 border-2"
            ImgSrc={mapSVG}
          >
            Visite-nos
          </ExpandableButton>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      <MobileMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </nav>
  );
};

export default Header;

// Header.tsx
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    isMenuOpen ? disablePageScroll() : enablePageScroll();
    return () => enablePageScroll();
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-40 top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link to="/">
            <Logo src={LogoImage} alt="Adubopor Logo" />
          </Link>
        </motion.div>
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
        <ul className="hidden lg:flex items-center space-x-8 text-textColors-light text-lg z-30">
          {NavBarItems.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {link.href.startsWith("/") ? (
                <Link
                  to={link.href}
                  className="relative px-4 py-2 rounded-lg hover:bg-app-secondary/20 transition-colors duration-300"
                  onClick={() => isMenuOpen && toggleMenu()}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-app-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="relative px-4 py-2 rounded-lg hover:bg-app-secondary/20 transition-colors duration-300"
                  onClick={() => isMenuOpen && toggleMenu()}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-app-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              )}
            </motion.li>
          ))}
        </ul>
        {/* Auth buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ExpandableButton
              href="#visit"
              className="bg-app-secondary text-textColors-light px-6 py-2 rounded-lg hover:bg-app-secondary/80 transition-colors duration-300 shadow-lg"
              ImgSrc={mapSVG}
            >
              Visite-nos
            </ExpandableButton>
          </motion.div>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      <MobileMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </motion.nav>
  );
};

export default Header;

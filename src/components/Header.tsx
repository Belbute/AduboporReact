import Logo from "../assets/AduboporLogo.png";
import { NavBarItems } from "../data/lists.ts";
import mapSVG from "../assets/SVG/Map.svg";
import ExpandableButton from "./ExpandableButton.tsx";
import HamburgerMenu from "./HamburgerMenu"; // Import the HamburgerMenu component
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  // Toggle the navigation menu and scroll behavior
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  useEffect(() => {
    // Cleanup scroll behavior when component unmounts
    return () => enablePageScroll();
  }, []);

  return (
    <nav className="fixed z-20 top-0 left-0 right-0 p-3 bg-gradient-to-b from-black to-black/">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="left-0 w-[8rem] text-2xl font-bold z-20">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden text-white z-40">
          <HamburgerMenu opened={openNavigation} onClick={toggleNavigation} />
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
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black z-30 flex justify-center items-center
          transition-opacity duration-700 ease-in-out transform ${
            openNavigation
              ? "opacity-90 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        <ul
          className={`flex flex-col items-center justify-center w-6/12 space-y-5 text-white text-xl transition-transform duration-1000 ease-in-out sm:text-3xl ${
            openNavigation ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {NavBarItems.map((link, index) => (
            <li key={index} className="w-full">
              <a
                href={link.href}
                className="bg-black opacity-100 border-4 block text-center rounded-2xl p-4 transition-transform duration-200 ease-in-out w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

// MobileMenu.tsx
import React from "react";
import { Link } from "react-router-dom";
import { NavBarItems } from "../../data/lists"; // Adjust the import path as necessary

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void; // Function to close the menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-gray-900/95 z-20 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-hidden={!isOpen}
    >
      <ul className="flex flex-col items-center justify-center py-12 space-y-8">
        {NavBarItems.map((link, index) => (
          <li key={index} className="text-textColors-light text-lg font-medium">
            {link.href.startsWith("/") ? (
              <Link
                to={link.href}
                className="px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors duration-300"
                onClick={closeMenu} // Close menu on link click
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors duration-300"
                onClick={closeMenu} // Close menu on link click
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

// MobileMenu.tsx
import React from "react";
import { NavBarItems } from "../../data/lists"; // Adjust the import path as necessary

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void; // Function to close the menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900/95 z-20 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <ul className="flex flex-col items-center justify-center h-full space-y-8">
        {NavBarItems.map((link, index) => (
          <li key={index} className="text-textColors-light text-lg font-medium">
            <a
              href={link.href}
              className="px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors duration-300"
              onClick={closeMenu} // Close menu on link click
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

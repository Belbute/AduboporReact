// MobileMenu.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NavBarItems } from "../../data/lists"; // Adjust the import path as necessary

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void; // Function to close the menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at calc(100% - 40px) 40px)",
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 bg-gradient-to-b from-black to-app-main/95 backdrop-blur-sm z-20 flex items-center justify-center"
          aria-hidden={!isOpen}
        >
          <motion.div
            className="absolute top-4 right-4 md:top-6 md:right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={closeMenu}
              className="p-2 text-textColors-light hover:text-app-secondary transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
          <div className="w-full max-w-md">
            <motion.ul className="flex flex-col items-center justify-center space-y-8">
              {NavBarItems.map((link, index) => (
                <motion.li key={index} variants={itemVariants} className="w-full text-center">
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="block w-full px-6 py-4 text-2xl font-medium text-textColors-light hover:text-app-secondary transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block w-full px-6 py-4 text-2xl font-medium text-textColors-light hover:text-app-secondary transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  )}
                  <motion.div
                    className="h-px w-0 bg-app-secondary mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  />
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-textColors-light/60 text-sm mb-4">
                © 2023 Adubopor - All rights reserved
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

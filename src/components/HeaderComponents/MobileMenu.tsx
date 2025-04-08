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
  // Simpler animation for reliability
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
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
          className="fixed inset-0 w-screen h-screen bg-app-main z-[999]"
          aria-hidden={!isOpen}
        >
          {/* Background overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-app-main/95 w-full h-full" />

          {/* Content container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="w-full max-w-md px-4">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

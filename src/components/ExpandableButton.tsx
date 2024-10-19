import React, { useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick?: () => void; // Make onClick optional
  children: React.ReactNode;
  className?: string;
  ImgSrc: string;
  href?: string;
}

const ExpandableButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  ImgSrc,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const svgAnimation = {
    initial: { opacity: 0, width: 0 }, // SVG initial state
    animate: isHovered
      ? { opacity: 1, width: "25px", transition: { duration: 0.1 } } // Show almost instantaneously
      : { opacity: 0, width: 0, transition: { duration: 0.05 } }, // Disappear quickly
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetElement = document.querySelector(href); // Select the target element
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target element
      }
    } else if (onClick) {
      onClick(); // Call the provided onClick function if href is not provided
    }
  };

  // Render the button as an anchor tag if href is provided
  const buttonContent = (
    <motion.button
      onClick={handleClick} // Use handleClick for both href and onClick
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-left py-2 px-4 max-h-10 focus:outline-none relative flex items-center ${className}`}
      transition={{ duration: 0.2 }}
      whileHover={{ width: "130px" }} // Expand width on hover
    >
      {children}
      {/* Expanding map SVG */}
      <motion.div
        className={`absolute right-2 overflow-hidden transition-all duration-200`}
        {...svgAnimation} // Expand width when hovered
      >
        <img src={ImgSrc} alt="Map" className="w-full" /> {/* Adjust size as needed */}
      </motion.div>
    </motion.button>
  );

  return href ? (
    <a href={href} className="no-underline" onClick={handleClick}>
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default ExpandableButton;

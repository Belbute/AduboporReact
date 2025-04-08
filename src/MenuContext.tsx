// Create a new file called MenuContext.js
import React from "react";

// Define the interface for context value
interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

// Create context with type
const MenuContext = React.createContext<MenuContextType>({
  isMenuOpen: false,
  toggleMenu: () => {},
});

export default MenuContext;

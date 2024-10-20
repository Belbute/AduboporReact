// Create a new file called MenuContext.js
import React from "react";

const MenuContext = React.createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
});

export default MenuContext;

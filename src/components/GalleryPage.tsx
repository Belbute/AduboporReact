import React, { useEffect } from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const GalleryPage: React.FC = () => {
  const location = useLocation();

  // Scroll to top when component mounts or when URL changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.search]); // Re-run when search params change

  return (
    <div className="bg-app-main min-h-screen">
      <Header />
      <Gallery />
    </div>
  );
};

export default GalleryPage;

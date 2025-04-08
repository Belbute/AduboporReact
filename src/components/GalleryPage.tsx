import React from "react";
import Gallery from "./Gallery";
import Header from "./Header";

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-app-main min-h-screen">
      <Header />
      <div className="pt-24">
        {" "}
        {/* Extra padding to account for fixed header */}
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;

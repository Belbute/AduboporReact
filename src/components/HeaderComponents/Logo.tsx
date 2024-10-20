// HeaderComponents/Logo.tsx
import React from "react";

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <div className="left-0 w-[8rem] text-2xl font-bold z-40">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Logo;

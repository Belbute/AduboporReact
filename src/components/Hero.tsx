// Hero.tsx
import React, { useContext } from "react";
import { ScrollParallax } from "react-just-parallax";
import MenuContext from "../MenuContext";
import birdsImage from "../assets/Birds.png";

const Hero = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      id="Hero"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay with Combined Parallax */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent">
        {!isMenuOpen && (
          <div className="h-[40%] flex items-center justify-center">
            <ScrollParallax isAbsolutelyPositioned={false} strength={0.1}>
              <div className="combined-parallax-container">
                <img
                  src={birdsImage}
                  alt="Flying birds"
                  className="z-0 birds-image object-contain h-full translate-y-[22vh] -translate-x-2 sm:translate-y-[24vh] lg:translate-y-[26vh]"
                />
                <div className="hero-content text-center text-textColors-Dark px-5">
                  <div className="mb-10 z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo à Adubopor</h1>
                    <p className="mt-5 text-sm md:text-lg max-w-xl mx-auto text-textColors-Dark">
                      Descubra de tudo para os seus animais e jardins <br /> com uma qualidade que
                      vem desde 1986.
                    </p>
                  </div>
                  <a
                    href="#Products"
                    className="inline-block text-sm px-6 py-2 md:text-lg bg-app-3 hover:scale-[115%] text-textColors-light font-semibold rounded-full transition duration-300 ease-in-"
                  >
                    Produtos
                  </a>
                </div>
              </div>
            </ScrollParallax>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

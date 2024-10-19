import { ScrollParallax } from "react-just-parallax";
import birdsImage from "../assets/Birds.png"; // Adjust the path to your bird PNG

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      id="Hero"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden", // Prevents content overflow
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent">
        <div className="translate-y-[11rem] md:translate-y-[17rem] lg:translate-y-[7rem] xl:-translate-y-[2rem]">
          {/* Birds with Parallax Effect */}
          <ScrollParallax isAbsolutelyPositioned strength={0.1}>
            <img
              src={birdsImage}
              alt="Flying Birds"
              className=" absolute scale-[130%] -translate-y-[2rem] translate-x-[7rem] md:scale-110 md:translate-x-[14rem] md:-translate-y-[2rem] lg:scale-100 lg:translate-y-[10rem] xl:w-[80%] xl:translate-x-[30rem] xl:translate-y-[7rem]" // Position the birds
            />
          </ScrollParallax>

          {/* Hero Content */}
          <ScrollParallax strength={0.1}>
            {" "}
            {/* Remove isAbsolutelyPositioned */}
            <div className="relative z-0 text-center text-black px-5 lg:translate-y-[15rem]">
              <div className="mb-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">Bem-vindo à Adubopor</h1>
                <p className="mt-10 text-sm md:text-xl max-w-xl mx-auto text-black">
                  Descubra de tudo para os seus animais e jardins
                  <br /> com uma qualidade que vem desde 1986.
                </p>
              </div>
              <a
                href="#visit"
                className="z-10 inline-block text-sm px-6 py-2 md:text-lg bg-app-3 hover:scale-[115%] text-white font-semibold rounded-full transition duration-300 ease-in-"
              >
                Produtos
              </a>
            </div>
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;

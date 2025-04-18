import { motion } from "framer-motion";
import React, { useState } from "react";
import { timelineEvents } from "../data/lists";
import wave from "../assets/SVG/wave.svg";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-[130vh] lg:h-[100vh] relative">
      {/* Background and Timeline Events */}
      <div className="h-[100%] w-full relative">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 h-full w-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${event.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Gradient Layer - Positioned above the image, but below text */}
      <div className="absolute top-[0%] right-0 h-[100%] w-full bg-gradient-to-l from-black to-black/40 z-10 pointer-events-none"></div>

      {/* Text Layer styled like the provided image */}
      <motion.div
        className="absolute top-[30%] h-[60%] overflow-hidden  bg-black bg-opacity-30 p-6 rounded-lg max-w-[280px] lg:top-[30vh] lg:left-[10%] lg:max-w-lg text-white z-20"
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        {/* Year - Styled as smaller and italic */}
        <p className="text-2xl italic text-yellow-500 text-left">
          {timelineEvents[activeIndex].date}
        </p>

        {/* Event Title - Bold and large */}
        <h2 className="text-4xl font-extrabold mt-2">{timelineEvents[activeIndex].event}</h2>

        {/* Event Description - Smaller text below the title */}
        <p className="text-lg mt-4">{timelineEvents[activeIndex].text}</p>
      </motion.div>

      {/* Dates List and Custom Gradient */}
      <div className="absolute top-0 right-0 h-full w-full flex items-center justify-center z-30 mt-16">
        {/* Dates List */}
        <div className="absolute right-[5%] h-full flex flex-col justify-center z-30 gap-y-16 text-gray-400 italic">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`cursor-pointer text-2xl transition-colors duration-300 ${
                activeIndex === index ? "text-yellow-500 font-bold scale-110" : ""
              } hover:scale-105`}
              onClick={() => setActiveIndex(index)}
            >
              {event.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

import React from "react";
import Clover from "../assets/SVG/Clover.svg";

interface TestimonialCardProps {
  content: string;
  className?: string;
  imageUrl?: string;
  clovers?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  className = "",
  imageUrl,
  clovers = 0,
}) => {
  return (
    <div
      className={`min-h-60 p-8 rounded-2xl shadow-md flex flex-col items-center justify-center text-center bg-[#f5f5dc] ${className} transform transition-transform hover:scale-105 hover:shadow-lg`}
    >
      {imageUrl && (
        <div className="relative w-24 h-24 mb-4">
          <img
            src={imageUrl}
            alt="User"
            className="absolute inset-0 w-full h-full rounded-full object-cover border-4 border-blue-500"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}
      <div className="flex mb-4 justify-center space-x-1">
        {Array.from({ length: clovers }).map((_, index) => (
          <img
            key={index}
            src={Clover}
            alt="Clover"
            className="h-5 w-5 min-w-[20px] text-green-600"
          />
        ))}
      </div>
      <p className="italic text-lg font-light">{content}</p>
    </div>
  );
};

export default TestimonialCard;

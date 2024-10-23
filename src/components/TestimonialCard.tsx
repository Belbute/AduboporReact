import React from "react";

interface TestimonialCardProps {
  content: string;
  className?: string;
  imageUrl?: string;
  stars?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  className = "",
  imageUrl,
  stars = 0,
}) => {
  return (
    <div
      className={`min-h-60 p-8 rounded-2xl shadow-md flex flex-col items-center justify-center text-center bg-cream ${className} transform transition-transform hover:scale-105 hover:shadow-lg`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="User"
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
        />
      )}
      <div className="flex mb-4 justify-center space-x-1">
        {Array.from({ length: stars }, (_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .587l3.668 7.429 8.167 1.191-5.897 5.747 1.392 8.107L12 18.896l-7.33 3.855 1.392-8.107-5.897-5.747 8.167-1.191z" />
          </svg>
        ))}
      </div>
      <p className="italic text-lg font-light">{content}</p>
    </div>
  );
};

export default TestimonialCard;

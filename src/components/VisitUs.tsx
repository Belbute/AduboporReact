import React from "react";

const VisitUs: React.FC = () => {
  return (
    <div
      className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10"
      id="visit"
    >
      <div className="lg:w-1/3 flex flex-col justify-center text-textColors-light">
        <h2 className="text-4xl font-bold mb-7 text-white">Visit Us</h2>
        <p className="text-lg leading-relaxed text-white mb-4">
          Come visit us at our location. We are always happy to meet our customers in person and
          discuss how we can help you achieve your goals.
        </p>
        <p className="text-lg leading-relaxed text-white">
          Our friendly team is here to assist you with any questions you might have. Feel free to
          drop by during our working hours.
        </p>
      </div>

      <div className="lg:w-2/3">
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.9556513153184!3d-37.81731397975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b61ffb%3A0x2f9b81fbd5b8a5d6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1638192700888!5m2!1sen!2sau"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;

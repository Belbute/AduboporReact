import React from "react";
import { motion } from "framer-motion";

const VisitUs: React.FC = () => {
  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Location",
      content: "123 Garden Street, Algarve, Portugal",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Opening Hours",
      content: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM",
    },
  ];

  return (
    <section className="bg-app-main py-24" id="visit">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-app-secondary/20 border-4 border-app-secondary/40 group">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.039384586647!2d-8.5445373!3d37.147067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b28f3b9c5d5b5%3A0x9c9e9c9e9c9e9c9e!2sAdubopor!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-[500px] border-0 scale-100 group-hover:scale-105 transition-transform duration-700"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-app-main/90 to-app-main/10 opacity-40 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-app-secondary/80 backdrop-blur-sm p-4 rounded-lg z-20 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-textColors-light text-center font-medium">
                  123 Garden Street, Algarve, Portugal — Find us easily with Google Maps!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-textColors-light">
                Come Visit <span className="text-app-secondary">Us</span>
              </h2>
              <div className="w-24 h-1 bg-app-secondary rounded-full"></div>
              <p className="text-lg text-textColors-light/90 max-w-xl">
                Experience our space firsthand. We've designed our environment to inspire creativity
                and foster meaningful conversations about your gardening vision.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-app-secondary/10 border border-app-secondary/20"
                >
                  <div className="p-2 bg-app-secondary/20 rounded-lg text-app-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textColors-light">{item.title}</h3>
                    <p className="text-textColors-light/80 whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-app-secondary text-textColors-light rounded-lg hover:bg-app-secondary/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;

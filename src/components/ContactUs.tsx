import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8" id="contact">
      {/* Contact Us Section */}
      <div className="bg-app-secondary rounded-2xl shadow-md p-8 lg:p-16">
        <h2 className="text-4xl font-bold text-app-main mb-8">Get in Touch With Us</h2>
        <p className="text-lg text-white mb-8">
          We'd love to hear from you! Whether you have questions about our products, need
          assistance, or want to learn more about what we do, feel free to reach out to us.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg text-app-secondary mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-4 rounded-lg border-2 border-app-secondary focus:outline-none focus:ring-2 focus:ring-app-main"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-app-secondary mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 rounded-lg border-2 border-app-secondary focus:outline-none focus:ring-2 focus:ring-app-main"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-app-secondary mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-4 rounded-lg border-2 border-app-secondary focus:outline-none focus:ring-2 focus:ring-app-main"
              placeholder="Enter your message here"
            />
          </div>

          <button
            type="submit"
            className="bg-app-main text-white font-bold py-4 px-8 rounded-lg shadow-md hover:bg-app-secondary hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const AboutPage: React.FC = () => {
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="bg-app-main min-h-screen">
      <Header />

      <section className="pt-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-textColors-light">
              About <span className="text-app-secondary">Us</span>
            </h2>
            <div className="w-24 h-1 bg-app-secondary rounded-full mx-auto"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column - 2/3 width */}
            <motion.div
              className="lg:col-span-2 space-y-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Introduction */}
              <div className="bg-app-secondary/10 p-6 rounded-lg border border-app-secondary/20">
                <p className="text-lg text-textColors-light/90 leading-relaxed">
                  Welcome to Adubopor, Lda., a cornerstone in the agricultural and hardware supply
                  industry located in Portimão, Portugal. Since our establishment, we have been
                  dedicated to providing an extensive range of products and services to meet the
                  diverse needs of our customers.
                </p>
              </div>

              {/* Our Mission */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-textColors-light">Our Mission</h3>
                <p className="text-lg text-textColors-light/90 leading-relaxed">
                  At Adubopor, our mission is to support and enhance the agricultural community by
                  offering high-quality products and expert advice. We aim to be a one-stop solution
                  for farmers, gardeners, and hardware enthusiasts, ensuring they have access to the
                  best tools and materials for their projects.
                </p>
              </div>

              {/* Products and Services */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-textColors-light">
                  Our Products and Services
                </h3>
                <p className="text-lg text-textColors-light/90 leading-relaxed">
                  We pride ourselves on our vast selection of products that cater to various
                  sectors, including agriculture, gardening, and general hardware. Our offerings
                  include:
                </p>

                <ul className="space-y-4 text-lg text-textColors-light/90">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className="inline-block w-2 h-2 bg-app-secondary rounded-full"></span>
                    </div>
                    <p>
                      <span className="font-semibold text-app-secondary">
                        Agricultural Supplies:
                      </span>{" "}
                      A comprehensive range of fertilizers such as complex, compound, slow-release,
                      foliar, phosphated, liquid, and organic options.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className="inline-block w-2 h-2 bg-app-secondary rounded-full"></span>
                    </div>
                    <p>
                      <span className="font-semibold text-app-secondary">
                        Plant Protection Products:
                      </span>{" "}
                      A variety of fungicides, herbicides, insecticides, and rodenticides to
                      safeguard crops and storage facilities.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className="inline-block w-2 h-2 bg-app-secondary rounded-full"></span>
                    </div>
                    <p>
                      <span className="font-semibold text-app-secondary">
                        Seeds and Propagation Materials:
                      </span>{" "}
                      High-quality seeds and propagules to ensure successful cultivation.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className="inline-block w-2 h-2 bg-app-secondary rounded-full"></span>
                    </div>
                    <p>
                      <span className="font-semibold text-app-secondary">Irrigation Systems:</span>{" "}
                      Solutions for sprinkler and drip irrigation, including plastic and metal pipes
                      and accessories.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className="inline-block w-2 h-2 bg-app-secondary rounded-full"></span>
                    </div>
                    <p>
                      <span className="font-semibold text-app-secondary">
                        Animal Husbandry Products:
                      </span>{" "}
                      Feeds for poultry and livestock, as well as beekeeping supplies.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className="inline-block w-2 h-2 bg-app-secondary rounded-full"></span>
                    </div>
                    <p>
                      <span className="font-semibold text-app-secondary">Equipment and Tools:</span>{" "}
                      Lawnmowers, brush cutters, motor cultivators, sprayers, atomizers, and
                      weighing scales.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className="inline-block w-2 h-2 bg-app-secondary rounded-full"></span>
                    </div>
                    <p>
                      <span className="font-semibold text-app-secondary">
                        Construction and Hardware Materials:
                      </span>{" "}
                      A wide array of hardware items, including gas connectors and regulators,
                      catering to both professionals and DIY enthusiasts.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Customer Commitment */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-textColors-light">
                  Customer Commitment
                </h3>
                <p className="text-lg text-textColors-light/90 leading-relaxed">
                  Our knowledgeable and friendly staff are always ready to assist customers in
                  finding the right products and providing valuable advice. We strive to maintain a
                  well-organized store environment, ensuring a pleasant shopping experience.
                </p>
              </div>
            </motion.div>

            {/* Sidebar Column - 1/3 width */}
            <motion.div
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Location and Contact Card */}
              <div className="bg-app-secondary/10 p-6 rounded-lg border border-app-secondary/20">
                <h3 className="text-xl font-semibold text-textColors-light mb-4">
                  Location and Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-app-secondary flex-shrink-0 mt-1">
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
                    </div>
                    <div>
                      <h4 className="font-medium text-textColors-light">Address:</h4>
                      <p className="text-textColors-light/80">
                        Boavista, Antigos Celeiros da EPAC, 8500-300 Portimão
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-app-secondary flex-shrink-0 mt-1">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-textColors-light">Phone:</h4>
                      <p className="text-textColors-light/80">282 415 900</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="bg-app-secondary p-6 rounded-lg text-textColors-light">
                <h3 className="text-xl font-semibold mb-4">Visit Our Store</h3>
                <p className="mb-6">
                  Experience our wide range of products in person. Our team is ready to assist you
                  with any questions.
                </p>
                <motion.a
                  href="#visit"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-app-main/20 backdrop-blur-sm text-textColors-light rounded-lg hover:bg-app-main/30 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Directions
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Commitment Statement */}
              <div className="p-6 border-l-4 border-app-secondary bg-gradient-to-r from-app-secondary/20 to-transparent rounded-r-lg">
                <p className="text-lg text-textColors-light italic">
                  "At Adubopor, Lda., we are committed to being your trusted partner in agriculture
                  and hardware supplies, dedicated to supporting your endeavors with quality
                  products and exceptional service."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

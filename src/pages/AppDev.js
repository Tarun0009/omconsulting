import React from "react";
import { FaAndroid, FaApple, FaReact, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const AppDev = () => {
  return (
    <section
      id="app-development"
      className="py-16 bg-gray-50 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Mobile <span className="text-blue-600">App Development</span>
        </h1>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We specialize in crafting **high-performance mobile applications**. Whether it’s 
          **Android, iOS, or cross-platform**, we bring your ideas to life.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Cards */}
          {[
            {
              icon: <FaAndroid className="text-green-500 text-5xl mx-auto mb-4" />,
              title: "Android Development",
              desc: "Build scalable and feature-rich Android apps with modern frameworks.",
            },
            {
              icon: <FaApple className="text-gray-800 text-5xl mx-auto mb-4" />,
              title: "iOS Development",
              desc: "Develop high-end iOS apps optimized for Apple devices and user experience.",
            },
            {
              icon: <FaReact className="text-blue-500 text-5xl mx-auto mb-4" />,
              title: "Cross-Platform Apps",
              desc: "Create apps that run seamlessly on both **Android & iOS** platforms.",
            },
            {
              icon: <FaMobileAlt className="text-purple-500 text-5xl mx-auto mb-4" />,
              title: "Custom App Solutions",
              desc: "Get tailored mobile app solutions for your business-specific needs.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-xl text-center"
            >
              {service.icon}
              <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
                 <Link
                       to="/contact"
                       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 md:px-4 md:py-2 text-sm rounded-md font-medium 
                       hover:scale-105 transition-transform duration-200 shadow-md block w-fit mx-auto"
                       aria-label="Get Started with Web Development Services"
                     >
                       Get Started
                     </Link>
               </div>
      </div>
    </section>
  );
};

export default AppDev;

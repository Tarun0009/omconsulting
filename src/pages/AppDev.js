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
        <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
  At <strong className="text-blue-600">OM Tech Solutions</strong>, we specialize in crafting 
  <strong> high-performance mobile applications</strong> tailored to your business needs. Whether it’s 
  <strong> Android, iOS, or cross-platform development</strong>, our team delivers intuitive, scalable, and user-centric solutions. 
  We focus on <strong>custom mobile app development</strong> that enhances user engagement and drives digital growth. 
  From idea to launch, <strong>OM Tech Solutions</strong> turns your vision into a powerful, functional mobile experience.
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

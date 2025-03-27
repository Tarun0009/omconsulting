import React from "react";
import { FaAndroid, FaApple, FaReact, FaMobileAlt } from "react-icons/fa";

const AppDev = () => {
  return (
    <section id="app-development" className="py-16 bg-gray-100 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Mobile <span className="text-blue-500">App Development</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We craft high-performance mobile applications tailored to your business needs.
          Whether it’s **Android, iOS, or cross-platform**, we’ve got you covered.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Android Development */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaAndroid className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Android Development</h3>
            <p className="text-gray-600 mt-2">
              Build robust and scalable Android apps with cutting-edge technologies.
            </p>
          </div>

          {/* iOS Development */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaApple className="text-gray-800 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">iOS Development</h3>
            <p className="text-gray-600 mt-2">
              Create sleek and user-friendly iOS apps optimized for Apple devices.
            </p>
          </div>

          {/* Cross-Platform Development */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaReact className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Cross-Platform</h3>
            <p className="text-gray-600 mt-2">
              Develop apps that work seamlessly on both Android and iOS.
            </p>
          </div>

          {/* Custom App Solutions */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaMobileAlt className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Custom Solutions</h3>
            <p className="text-gray-600 mt-2">
              Tailored app development solutions to match your unique business needs.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDev;

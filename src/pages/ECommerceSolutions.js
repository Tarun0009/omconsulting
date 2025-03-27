import React from "react";
import { FaShoppingCart, FaMobileAlt, FaShieldAlt, FaBoxOpen } from "react-icons/fa";

const ECommerceSolutions = () => {
  return (
    <section id="e-commerce-solution" className="py-16 bg-gray-100 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          E-Commerce <span className="text-blue-500">Solutions</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Launch your online store with our **custom e-commerce solutions** tailored for growth.
          We provide **secure, scalable, and high-performing** online shopping platforms.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Custom Store Development */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaShoppingCart className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Custom Store Development</h3>
            <p className="text-gray-600 mt-2">
              Get a tailor-made e-commerce store designed to fit your brand and business needs.
            </p>
          </div>

          {/* Mobile Optimization */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaMobileAlt className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Mobile Optimization</h3>
            <p className="text-gray-600 mt-2">
              Ensure seamless shopping experiences across **all mobile devices**.
            </p>
          </div>

          {/* Secure Payment Integration */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaShieldAlt className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Secure Payment Integration</h3>
            <p className="text-gray-600 mt-2">
              We integrate **secure and reliable payment gateways** to protect customer transactions.
            </p>
          </div>

          {/* Inventory & Order Management */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaBoxOpen className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Inventory & Order Management</h3>
            <p className="text-gray-600 mt-2">
              Track and manage orders effortlessly with **automated inventory systems**.
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

export default ECommerceSolutions;

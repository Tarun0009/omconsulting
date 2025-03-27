import React from "react";
import { FaPalette, FaMagic, FaPenNib } from "react-icons/fa";

const Logo = () => {
  return (
    <section id="logo-designing" className="py-16 bg-white-400 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Creative <span className="text-gray-900">Logo Designing</span>
        </h2>
        <p className="text-lg text-gray-100 mb-12">
          Get a unique and **professional logo** that represents your brand identity with a lasting impression.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Custom Logo Design */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaPalette className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Custom Logo Design</h3>
            <p className="text-gray-600 mt-2">
              We create **unique, custom logos** tailored to your brand’s vision.
            </p>
          </div>

          {/* Branding & Identity */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaMagic className="text-white-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Branding & Identity</h3>
            <p className="text-gray-600 mt-2">
              A strong logo that builds **brand recognition and trust**.
            </p>
          </div>

          {/* Modern & Timeless */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaPenNib className="text-black-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Modern & Timeless</h3>
            <p className="text-gray-600 mt-2">
              Our designs are **modern, professional, and adaptable** for all platforms.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-gray-900 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Get a Logo Designed
          </a>
        </div>
      </div>
    </section>
  );
};

export default Logo;

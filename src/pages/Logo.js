import React from "react";
import logo from "../assets/design/logo.jpg"; // Custom Logo Design image
import brand from "../assets/design/brand.jpg"; // Branding & Identity image
import time from "../assets/design/time.jpg"; // Modern & Timeless image
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <section
      id="logo-designing"
      className="py-16 bg-gray-50 px-6 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Creative Logo Designing
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We specialize in designing unique and professional logos that reflect your brand's identity, leaving a lasting impression on your audience.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Custom Logo Design */}
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-xl text-center">
            <img
              src={logo}
              alt="Custom Logo Design"
              className="mx-auto mb-6 w-full h-56 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Logo Design</h3>
            <p className="text-gray-600">
              We create unique logos tailored to reflect your brand’s personality, goals, and vision. Stand out with a design that speaks volumes.
            </p>
          </div>

          {/* Branding & Identity */}
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-xl text-center">
            <img
              src={brand}
              alt="Branding & Identity"
              className="mx-auto mb-6 w-full h-56 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Branding & Identity</h3>
            <p className="text-gray-600">
              A strong logo forms the foundation of brand recognition. We help establish a cohesive brand identity that resonates with your audience.
            </p>
          </div>

          {/* Modern & Timeless */}
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-xl text-center">
            <img
              src={time}
              alt="Modern & Timeless Logo"
              className="mx-auto mb-6 w-full h-56 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Modern & Timeless</h3>
            <p className="text-gray-600">
              Our designs are crafted to be modern yet timeless, ensuring they remain relevant across all platforms and devices for years to come.
            </p>
          </div>
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

export default Logo;

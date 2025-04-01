import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router

const Development = () => {
  return (
    <section id="development-services" className="py-12 bg-gray-100">
    <div  className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Development Services</h1>
      <p className="mb-8">
        We provide top-notch development services to help businesses grow. Explore our various development offerings below:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Web Development Section Link */}
        <Link to="/web-development" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Web Development</h3>
          <p className="text-gray-600">Build responsive and scalable websites tailored to your business needs.</p>
        </Link>

        {/* App Development Section Link */}
        <Link to="/app-development" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-700">App Development</h3>
          <p className="text-gray-600">Create high-performing mobile applications for Android and iOS platforms.</p>
        </Link>

        {/* E-Commerce Solutions Section Link */}
        <Link to="/e-commerce-solutions" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-700">E-Commerce Solutions</h3>
          <p className="text-gray-600">Transform your business with feature-rich e-commerce websites and platforms.</p>
        </Link>
      </div>
    </div>
    </section>
  );
};

export default Development;

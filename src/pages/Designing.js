import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router

const Designing = () => {
  return (
    <section id="designing-services" className="py-12 bg-gray-100">
    <div  className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Designing Services</h1>
      <p className="mb-8">
        We craft stunning UI/UX designs to enhance user experience and ensure that your brand stands out with creative solutions. Explore our various designing offerings below:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Design Section Link */}
        <Link to="/logo-designing" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Logo Design</h3>
          <p className="text-gray-600">Create a unique and memorable logo for your brand.</p>
        </Link>

        {/* Banner Design Section Link */}
        <Link to="/banner-designing" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Banner Design</h3>
          <p className="text-gray-600">Eye-catching banners that help you promote your business effectively.</p>
        </Link>

        {/* Social Media Design Section Link */}
        <Link to="/social-media-designing" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Social Media Design</h3>
          <p className="text-gray-600">Creative designs to make your social media presence stand out.</p>
        </Link>
      </div>
    </div>
    </section>
  );
};

export default Designing;

import React from "react";
import { FaShoppingCart, FaMobileAlt, FaShieldAlt, FaBoxOpen } from "react-icons/fa";

const ECommerceSolutions = () => {
  return (
    <section
      id="e-commerce-solution"
      className="py-16 bg-gray-50 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* SEO Friendly Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
          <span className="text-blue-600">E-Commerce Solutions</span> for Your Business
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Launch your online store with <strong>custom-built e-commerce solutions</strong>. We offer
          <strong> secure, scalable, and high-performing</strong> platforms tailored for your business growth.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/** Service Card Component */}
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-all duration-300"
            >
              <service.icon className={`${service.color} text-5xl mx-auto mb-4`} />
              <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            aria-label="Get a Free Consultation"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

// Service Data for Better Performance & Readability
const serviceData = [
  {
    title: "Custom Store Development",
    description: "Get a tailor-made e-commerce store designed to fit your brand and business needs.",
    icon: FaShoppingCart,
    color: "text-blue-500",
  },
  {
    title: "Mobile Optimization",
    description: "Ensure seamless shopping experiences across all mobile devices.",
    icon: FaMobileAlt,
    color: "text-green-500",
  },
  {
    title: "Secure Payment Integration",
    description: "We integrate secure and reliable payment gateways to protect customer transactions.",
    icon: FaShieldAlt,
    color: "text-purple-500",
  },
  {
    title: "Inventory & Order Management",
    description: "Track and manage orders effortlessly with automated inventory systems.",
    icon: FaBoxOpen,
    color: "text-orange-500",
  },
];

export default ECommerceSolutions;

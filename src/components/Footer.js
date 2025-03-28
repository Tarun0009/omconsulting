import React from "react";
import logo from "../assets/comlogo.png";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#fdfdfe] text-gray-800 py-6 px-4 sm:px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
        {/* Logo & Company Info */}
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="OM Consultancy Logo"
            className="w-32 h-auto mb-4 mx-auto md:mx-0"
            loading="lazy"
          />
          <h2 className="font-semibold text-xl text-gray-800 text-center md:text-left">OM Consulting</h2>
          <p className="text-sm text-gray-600 text-center md:text-left">Transforming Ideas into Digital Success</p>
        </div>

        {/* Links */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Links</h3>
          <ul className="space-y-1 text-sm text-gray-600 text-center md:text-left">
            {["Home", "About", "Blog", "Testimonial"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:underline hover:text-blue-500 transition-colors"
                  aria-label={`Go to ${item} section`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Digital Marketing Services */}
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Digital Marketing</h3>
          <ul className="space-y-1 text-sm text-gray-600 text-center md:text-left">
            {["SEO Optimization", "Social Media Marketing", "Content Marketing", "Paid Advertising", "Email Marketing", "WhatsApp Marketing", "SMS Marketing"].map((service, index) => (
              <li key={index}>
                <a
                  href={`#${service.toLowerCase().replace(/\s/g, "-")}`}
                  className="hover:underline hover:text-blue-500 transition-colors"
                  aria-label={`Learn more about ${service}`}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Development */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Development</h3>
          <ul className="space-y-1 text-sm text-gray-600 text-center md:text-left">
            {["Web Development", "App Development", "E-Commerce Solution"].map((service, index) => (
              <li key={index}>
                <a
                  href={`#${service.toLowerCase().replace(/\s/g, "-")}`}
                  className="hover:underline hover:text-blue-500 transition-colors"
                  aria-label={`Learn more about ${service}`}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Designing */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Designing</h3>
          <ul className="space-y-1 text-sm text-gray-600 text-center md:text-left">
            {["Logo Designing", "Banner Designing", "Social Media Designing"].map((service, index) => (
              <li key={index}>
                <a
                  href={`#${service.toLowerCase().replace(/\s/g, "-")}`}
                  className="hover:underline hover:text-blue-500 transition-colors"
                  aria-label={`Learn more about ${service}`}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Contact Us</h3>
          <p className="text-sm text-gray-600">📞 +91 9999 999 999</p>
          <p className="text-sm text-gray-600">📧 your@email.com</p>
          <p className="text-sm text-gray-600">📍 123 Business Street, Noida, Uttar Pradesh, India</p>
          <div className="flex space-x-4 mt-3">
            {["facebook", "twitter", "linkedin", "instagram", "youtube"].map((platform, index) => (
              <a
                key={index}
                href={`https://${platform}.com`}
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label={`Visit our ${platform} page`}
              >
                <i className={`fab fa-${platform}${platform === 'linkedin' ? '-in' : ''}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="col-span-2 lg:col-span-6 text-center mt-3 pt-2 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © 2025 OM Consulting | All rights reserved.
            {["Privacy", "Terms", "FAQ"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="ml-4 hover:text-blue-500 transition-colors"
                aria-label={`Read our ${item} policy`}
              >
                {item}
              </a>
            ))}
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Back to top"
      >
        <FiChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../assets/comlogo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f5f5dc] text-gray-800 py-7 px-4 md:px-2">
      <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Logo & Company Info */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/6">
          <img
            src={logo}
            alt="OM Consultancy Logo"
            className="w-32 h-auto mb-4 mx-auto md:mx-0"
          />
          <h2 className="font-semibold text-xl text-gray-800 text-center md:text-left">OM Consulting</h2>
          <p className="text-sm text-gray-600 text-center md:text-left">Transforming Ideas into Digital Success</p>
        </div>

        {/* Company Section (About, Blog, Testimonial) */}
        <section className="flex flex-col items-center md:items-start w-full md:w-1/6 space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {["Home", "About", "Blog", "Testimonial"].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} className="hover:underline hover:text-blue-400 transition">{item}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Digital Marketing Services Links */}
        <nav className="flex flex-col items-center md:items-start w-full md:w-1/6 space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">Digital Marketing Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {["SEO Optimization", "Social Media Marketing", "Content Marketing", "Paid Advertising", "Email Marketing", "WhatsApp Marketing", "SMS Marketing"].map((service, index) => (
              <li key={index}>
                <a href={`#${service.toLowerCase().replace(/\s/g, "-")}`} className="hover:underline hover:text-blue-400 transition">{service}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Development Services */}
        <section className="flex flex-col items-center md:items-start w-full md:w-1/6 space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">Development</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {["Web Development", "App Development", "E-Commerce Solution"].map((service, index) => (
              <li key={index}>
                <a href={`#${service.toLowerCase().replace(/\s/g, "-")}`} className="hover:underline hover:text-blue-400 transition">{service}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Designing Services */}
        <section className="flex flex-col items-center md:items-start w-full md:w-1/6 space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">Designing</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {["Logo Designing", "Banner Designing", "Social Media Designing"].map((service, index) => (
              <li key={index}>
                <a href={`#${service.toLowerCase().replace(/\s/g, "-")}`} className="hover:underline hover:text-blue-400 transition">{service}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Info */}
        <section className="flex flex-col items-center md:items-start w-full md:w-1/6 space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">Contact Us</h3>
          <p className="text-sm text-gray-600">📞 +91 9999 999 999</p>
          <p className="text-sm text-gray-600">📧 your@email.com</p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4">
            <a href="https://facebook.com" className="text-gray-800 hover:text-blue-600 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-800 hover:text-blue-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-gray-800 hover:text-blue-700 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-800 hover:text-pink-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" className="text-gray-800 hover:text-red-600 transition">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </section>
      </div>

      {/* Copyright & Links */}
      <div className="text-center mt-10 border-t pt-4 text-sm text-gray-600">
        <p>© 2025 OM Consulting | All rights reserved.</p>
        <div className="mt-4">
          {["FAQ", "Privacy", "Terms & Conditions"].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="mr-6 hover:underline hover:text-blue-400 transition">{item}</a>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
        aria-label="Back to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;

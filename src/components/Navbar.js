import { useState } from 'react';
import logo from "../assets/comlogo.png";
import { HiMenu, HiX } from 'react-icons/hi'; // Importing menu and close icons

const Navbar = () => {
  const [isDigitalMarketingOpen, setIsDigitalMarketingOpen] = useState(false);
  const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);
  const [isDesigningOpen, setIsDesigningOpen] = useState(false);
  const [isSocialMediaDesigningOpen, setIsSocialMediaDesigningOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="OM Consultancy Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-white-500 hover:text-white-400">
              OM Consulting
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="hover:text-yellow-500 transition-all duration-200 ease-in-out transform hover:scale-105">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-500 transition-all duration-200 ease-in-out transform hover:scale-105">
            About
          </a>

          {/* Digital Marketing Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDigitalMarketingOpen(true)} onMouseLeave={() => setIsDigitalMarketingOpen(false)}>
            <button className="flex items-center hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105">
              Digital Marketing 
            
            </button>
            {isDigitalMarketingOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-md py-3 transition-all duration-300 ease-in-out opacity-100">
                <a href="#seo-optimization" className="block px-4 py-2 hover:bg-gray-700">SEO Optimization</a>
                <a href="#social-media-marketing" className="block px-4 py-2 hover:bg-gray-700">Social Media Marketing</a>
                <a href="#content-marketing" className="block px-4 py-2 hover:bg-gray-700">Content Marketing</a>
                <a href="#paid-advertising" className="block px-4 py-2 hover:bg-gray-700">Paid Advertising</a>
                <a href="#email-marketing" className="block px-4 py-2 hover:bg-gray-700">Email Marketing</a>
                <a href="#whatsapp-marketing" className="block px-4 py-2 hover:bg-gray-700">WhatsApp Advertising</a>
                <a href="#sms-marketing" className="block px-4 py-2 hover:bg-gray-700">SMS Marketing</a>
              </div>
            )}
          </div>

          {/* Development Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDevelopmentOpen(true)} onMouseLeave={() => setIsDevelopmentOpen(false)}>
            <button className="flex items-center hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105">
              Development
            
            </button>
            {isDevelopmentOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-md py-3 transition-all duration-300 ease-in-out opacity-100">
                <a href="#web-development" className="block px-4 py-2 hover:bg-gray-700">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 hover:bg-gray-700">App Development</a>
                <a href="#e-commerce-solution" className="block px-4 py-2 hover:bg-gray-700">E-Commerce Solutions</a>
              </div>
            )}
          </div>

          {/* Designing Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDesigningOpen(true)} onMouseLeave={() => setIsDesigningOpen(false)}>
            <button className="flex items-center hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105">
              Designing
              
            </button>
            {isDesigningOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-md py-3 transition-all duration-300 ease-in-out opacity-100">
                <a href="#logo-designing" className="block px-4 py-2 hover:bg-gray-700">Logo Designing</a>
                <a href="#banner-designing" className="block px-4 py-2 hover:bg-gray-700">Banner Designing</a>

                {/* Social Media Designing Dropdown */}
                <div className="relative" onMouseEnter={() => setIsSocialMediaDesigningOpen(true)} onMouseLeave={() => setIsSocialMediaDesigningOpen(false)}>
                  <button className="flex items-center block px-4 py-2 hover:bg-gray-700">
                    Social Media Designing 
                  </button>
                  {isSocialMediaDesigningOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-md py-3 transition-all duration-300 ease-in-out opacity-100">
                      <a href="#social-media-designing" className="block px-4 py-2 hover:bg-gray-700">Reel Logo</a>
                      <a href="#social-media-designing" className="block px-4 py-2 hover:bg-gray-700">Pamphlet</a>
                      <a href="#social-media-designing" className="block px-4 py-2 hover:bg-gray-700">Newspaper Ad Design</a>
                      <a href="#social-media-designing" className="block px-4 py-2 hover:bg-gray-700">Catalog Design</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Blog Link */}
          <a href="#blog" className="hover:text-yellow-500 transition-all duration-200 ease-in-out transform hover:scale-105">
            Blog
          </a>

          {/* Contact Link */}
          <a href="#contact" className="hover:text-yellow-500 transition-all duration-200 ease-in-out transform hover:scale-105">
            Contact
          </a>

          {/* Book Consulting Button */}
          <button
            onClick={openModal}
            className="bg-blue-200 text-black px-6 py-2 rounded-full hover:bg-white-400 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Book Consulting
          </button>
        </div>
      </div>

      {/* Modal for booking consulting */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/2 shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Book Consulting</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-white-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition-all duration-200 ease-in-out"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-6 py-2 rounded-full hover:bg-gray-300 transition-all duration-200 ease-in-out"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

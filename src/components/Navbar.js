import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/comlogo.png";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import Bookconsulting from "./Bookconsulting";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Navigation data structure
  const services = [
    {
      name: "Digital Marketing",
      path: "/digital-marketing",
      subItems: [
        { name: "SEO Optimization", path: "/seo-optimization" },
        { name: "Social Media Marketing", path: "/social-media-marketing" },
        { name: "Content Marketing", path: "/content-marketing" },
        { name: "Paid Advertising", path: "/paid-advertising" },
        { name: "Email Marketing", path: "/email-marketing" },
        { name: "WhatsApp Marketing", path: "/whatsapp-marketing" },
        { name: "SMS Marketing", path: "/sms-marketing" },
      ]
    },
    {
      name: "Development",
      path: "/development",
      subItems: [
        { name: "Web Development", path: "/web-development" },
        { name: "App Development", path: "/app-development" },
        { name: "E-Commerce Solutions", path: "/e-commerce-solutions" },
      ]
    },
    {
      name: "Designing",
      path: "/designing",
      subItems: [
        { name: "Logo Designing", path: "/logo-designing" },
        { name: "Banner Designing", path: "/banner-designing" },
        { name: "Social Media Designing", path: "/social-media-designing" },
      ]
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={handleMobileLinkClick}>
            <img 
              src={logo} 
              alt="OM Consulting Logo" 
              className="h-8 w-auto" 
              loading="lazy"
              width="32"
              height="32"
            />
            <span className="ml-2 text-xl font-bold">OM Tech Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            
            {services.map((service) => (
              <div 
                key={service.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(service.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center cursor-pointer hover:text-yellow-500">
                  <Link to={service.path} className="mr-1">{service.name}</Link>
                  <HiChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </div>
                {openDropdown === service.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl p-2 space-y-1">
                    {service.subItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                 {/* Invisible spacer to prevent gap */}
                  <div className="absolute inset-x-0 top-full h-2" />
              </div>
            ))}
            
            <Link to="/blog" className="hover:text-yellow-500 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-600 ml-4"
            >
              Book Consultancy
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`absolute right-0 top-0 h-full w-80 bg-gray-900 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <img 
              src={logo} 
              alt="OM Consulting Logo" 
              className="h-8 w-auto"
              loading="lazy"
              width="32"
              height="32"
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded hover:bg-gray-800"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
            <nav className="space-y-4">
              <Link to="/" className="block py-2 hover:text-yellow-500" onClick={handleMobileLinkClick}>Home</Link>
              <Link to="/about" className="block py-2 hover:text-yellow-500" onClick={handleMobileLinkClick}>About</Link>
  
              
              
              {services.map((service) => (
                <div key={service.name} className="space-y-2">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === service.name ? null : service.name)}
                    className="flex items-center justify-between w-full py-2 hover:text-yellow-500"
                  >
                    <span>{service.name}</span>
                    <HiChevronDown className={`w-5 h-5 transition-transform ${openDropdown === service.name ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === service.name && (
                    <div className="ml-4 space-y-2">
                      {service.subItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block py-2 text-gray-300 hover:text-yellow-500"
                          onClick={handleMobileLinkClick}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link to="/blog" className="block py-2 hover:text-yellow-500" onClick={handleMobileLinkClick}>Blog</Link>
              <Link to="/contact" className="block py-2 hover:text-yellow-500" onClick={handleMobileLinkClick}>Contact</Link>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  handleMobileLinkClick();
                }}
                className="w-full mt-4 bg-yellow-500/20 text-yellow-500 py-2 font-bold rounded hover:bg-yellow-500/30"
              >
                Book Consultancy
              </button>
            </nav>
          </div>
        </div>
      </div>

      <Bookconsulting isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
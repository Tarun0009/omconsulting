import { useState, useCallback } from 'react';
import logo from "../assets/comlogo.png";
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import Bookconsulting from "./Bookconsulting";
// Add social links data
const socialLinks = [
  {
    name: 'Facebook',
    link: '#',
    icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
  },
  {
    name: 'Twitter',
    link: '#',
    icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
  },
  {
    name: 'Instagram',
    link: '#',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
  },
  {
    name: 'LinkedIn',
    link: '#',
    icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
  }
];


const services = {
  DigitalMarketing: [
    { name: 'SEO Optimization', link: '#seo-optimization' },
    { name: 'Social Media Marketing', link: '#social-media-marketing' },
    { name: 'Content Marketing', link: '#content-marketing' },
    { name: 'Paid Advertising', link: '#paid-advertising' },
    { name: 'Email Marketing', link: '#email-marketing' },
    { name: 'WhatsApp Advertising', link: '#whatsapp-marketing' },
    { name: 'SMS Marketing', link: '#sms-marketing' }
  ],
  Development: [
    { name: 'Web Development', link: '#web-development' },
    { name: 'App Development', link: '#app-development' },
    { name: 'E-Commerce Solutions', link: '#e-commerce-solution' }
  ],
  Designing: [
    { name: 'Logo Designing', link: '#logo-designing' },
    { name: 'Banner Designing', link: '#banner-designing' },
    { 
      name: 'Social Media Designing', 
      subItems: [
        { name: 'Reel Design', link: '#social-media-designing' },
        { name: 'Pamphlet Design', link: '#social-media-designing' },
        { name: 'Newspaper Ad Design', link: '#social-media-designing' },
        { name: 'Catalog Design', link: '#social-media-designing' }
      ]
    }
  ]
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const toggleDropdown = useCallback((dropdown) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setOpenDropdown(null);
    setMobileSubmenu(null);
  }, []);

  const handleMobileSubmenu = (index) => {
    setMobileSubmenu(prev => prev === index ? null : index);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img src={logo} alt="OM Consulting Logo" className="h-8 w-auto" loading="lazy" />
            <span className="ml-2 text-xl font-bold text-white">OM Consulting</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-yellow-500 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors duration-200">About</a>
            {Object.entries(services).map(([key, items]) => (
              <div key={key} className="relative group"
                onMouseEnter={() => toggleDropdown(key)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button className="flex items-center hover:text-yellow-500 transition-colors duration-200">
                  {key.split(/(?=[A-Z])/).join(' ')}
                  <HiChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl transition-opacity duration-200 ${openDropdown === key ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  {items.map((item, index) => (
                    <div key={index} className="relative group">
                      <a href={item.link} className="block px-4 py-3 hover:bg-gray-700 text-sm"
                        onClick={() => setSelectedService(item.name)}>
                        {item.name}
                        {item.subItems && <HiChevronDown className="float-right h-4 w-4" />}
                      </a>
                      {item.subItems && (
                        <div className="absolute left-full top-0 ml-1 w-48 bg-gray-800 rounded-lg shadow-xl invisible group-hover:visible">
                          {item.subItems.map((subItem, subIndex) => (
                            <a key={subIndex} href={subItem.link} className="block px-4 py-3 hover:bg-gray-700 text-sm"
                              onClick={() => setSelectedService(subItem.name)}>
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <a href="#blog" className="hover:text-yellow-500 transition-colors duration-200">Blog</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors duration-200">Contact</a>
            <button onClick={() => setIsModalOpen(true)} className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200 font-semibold">
              Book Consulting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 text-white hover:text-yellow-500 focus:outline-none">
              {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50" onClick={toggleMobileMenu}>
          <div className="absolute right-0 top-0 h-full w-3/4 bg-gray-900 p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <button onClick={toggleMobileMenu} className="text-white p-2">
                <HiX className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white text-lg hover:text-yellow-500" onClick={toggleMobileMenu}>Home</a>
              <a href="#about" className="text-white text-lg hover:text-yellow-500" onClick={toggleMobileMenu}>About</a>
              
              {Object.entries(services).map(([key, items]) => (
                <div key={key} className="w-full">
                  <button
                    className="flex justify-between items-center w-full text-white text-lg hover:text-yellow-500"
                    onClick={() => handleMobileSubmenu(key)}
                  >
                    {key.split(/(?=[A-Z])/).join(' ')}
                    <HiChevronDown className={`transform transition-transform ${mobileSubmenu === key ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileSubmenu === key && (
                    <div className="ml-4 mt-2">
                      {items.map((item, index) => (
                        <div key={index} className="py-1">
                          {item.subItems ? (
                            <>
                              <button
                                className="flex justify-between items-center w-full text-gray-300 hover:text-white"
                                onClick={() => handleMobileSubmenu(`${key}-${index}`)}
                              >
                                {item.name}
                                <HiChevronDown className={`transform transition-transform ${mobileSubmenu === `${key}-${index}` ? 'rotate-180' : ''}`} />
                              </button>
                              
                              {mobileSubmenu === `${key}-${index}` && (
                                <div className="ml-4">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.link}
                                      className="block py-2 text-gray-300 hover:text-white text-sm"
                                      onClick={toggleMobileMenu}
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <a
                              href={item.link}
                              className="block py-2 text-gray-300 hover:text-white"
                              onClick={toggleMobileMenu}
                            >
                              {item.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a href="#blog" className="text-white text-lg hover:text-yellow-500" onClick={toggleMobileMenu}>Blog</a>
              <a href="#contact" className="text-white text-lg hover:text-yellow-500" onClick={toggleMobileMenu}>Contact</a>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  toggleMobileMenu();
                }}
                className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200 font-semibold mt-4"
              >
                Book Consulting
              </button>
               {/* Add Social Icons Section */}
               <div className="mt-8 border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm mb-4">Follow Us:</p>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Bookconsulting
        selectedService={selectedService}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </nav>
  );
};

export default Navbar;
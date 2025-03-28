import { useState, useCallback } from 'react';
import logo from "../assets/comlogo.png";
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(''); // Store the selected service
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility

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

  const toggleDropdown = useCallback((dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  }, [openDropdown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedService);
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="OM Consulting Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-white">OM Consulting</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-yellow-500 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors duration-200">About</a>

            {/* Services Dropdowns */}
            {Object.entries(services).map(([key, items]) => (
              <div key={key} className="relative group"
                onMouseEnter={() => toggleDropdown(key)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button 
                  className="flex items-center hover:text-yellow-500 transition-colors duration-200"
                  aria-expanded={openDropdown === key}
                >
                  {key.split(/(?=[A-Z])/).join(' ')}
                  <HiChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl 
                  ${openDropdown === key ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200`}>
                  {items.map((item, index) => (
                    <div key={index} className="relative group">
                      <a 
                        href={item.link} 
                        className="block px-4 py-3 hover:bg-gray-700 text-sm"
                        onClick={() => setSelectedService(item.name)} // Update selected service
                      >
                        {item.name}
                        {item.subItems && <HiChevronDown className="float-right h-4 w-4" />}
                      </a>
                      {item.subItems && (
                        <div className="absolute left-full top-0 ml-1 w-48 bg-gray-800 rounded-lg shadow-xl invisible group-hover:visible">
                          {item.subItems.map((subItem, subIndex) => (
                            <a 
                              key={subIndex} 
                              href={subItem.link}
                              className="block px-4 py-3 hover:bg-gray-700 text-sm"
                              onClick={() => setSelectedService(subItem.name)} // Update selected service
                            >
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200 font-semibold"
            >
              Book Consulting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 hover:bg-gray-800">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-gray-800">About</a>

            {Object.entries(services).map(([key, items]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(openDropdown === key ? null : key)}
                  className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-800"
                >
                  {key.split(/(?=[A-Z])/).join(' ')}
                  <HiChevronDown className={`transform transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                <div className={`${openDropdown === key ? 'block' : 'hidden'} pl-4`}>
                  {items.map((item, index) => (
                    <div key={index}>
                      <a
                        href={item.link}
                        className="block px-3 py-2 text-sm hover:bg-gray-700"
                        onClick={() => setSelectedService(item.name)} // Update selected service
                      >
                        {item.name}
                      </a>
                      {item.subItems?.map((subItem, subIndex) => (
                        <a 
                          key={subIndex} 
                          href={subItem.link}
                          className="block px-6 py-2 text-sm hover:bg-gray-700"
                          onClick={() => setSelectedService(subItem.name)} // Update selected service
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <a href="#blog" className="block px-3 py-2 hover:bg-gray-800">Blog</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-gray-800">Contact</a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-2 bg-yellow-500 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200 font-semibold"
            >
              Book Consulting
            </button>
          </div>
        </div>

      </div>

      {/* Modal for Booking */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-96">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-600">×</button>
            <h2 className="text-2xl mb-4">Consulting Appointment</h2>
            <form onSubmit={handleSubmit}>
              <p className="mb-2">You selected: <strong>{selectedService}</strong></p>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Enter your name:</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200 font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

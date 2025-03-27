import React from 'react';

const TopBar = () => {
  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'fab fa-facebook-f',
      color: 'hover:text-[#1877f2]'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'fab fa-twitter',
      color: 'hover:text-[#1da1f2]'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'fab fa-linkedin-in',
      color: 'hover:text-[#0a66c2]'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'fab fa-instagram',
      color: 'hover:text-[#e4405f]'
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-300 py-2 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+1234567890" 
              className="flex items-center hover:text-white transition-colors duration-300"
              aria-label="Call us"
            >
              <i className="fas fa-phone-alt mr-2 text-sm"></i>
              <span className="text-sm">+1 234 567 890</span>
            </a>
            
            <span className="hidden md:inline-block">|</span>
            
            <a 
              href="mailto:info@example.com" 
              className="flex items-center hover:text-white transition-colors duration-300"
              aria-label="Email us"
            >
              <i className="fas fa-envelope mr-2 text-sm"></i>
              <span className="text-sm">info@example.com</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-5">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg ${social.color} transition-all duration-300 hover:scale-110`}
                aria-label={`Visit our ${social.name} page`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
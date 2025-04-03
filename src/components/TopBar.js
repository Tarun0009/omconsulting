import React from 'react';

const TopBar = () => {
  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/omconsultingpvtltd',
      icon: 'fab fa-facebook-f',
      color: 'hover:text-[#1877f2]',
    },
    {
      name: 'WhatsApp',
      url: 'https://whatsapp.com/channel/0029Vb8neRo9cDDdycTlwN1f',
      icon: 'fab fa-whatsapp',
      color: 'hover:text-[#25D366]',
    },
    
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/omconsultingpvtltd',
      icon: 'fab fa-linkedin-in',
      color: 'hover:text-[#0a66c2]',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/omconsultingpvtltd/',
      icon: 'fab fa-instagram',
      color: 'hover:text-[#e4405f]',
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-300 py-2 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:0120-2977830" 
              className="flex items-center hover:text-white transition-colors duration-300"
              aria-label="Call us at 0120-2977830"
            >
              <i className="fas fa-phone-alt mr-2 text-sm" aria-hidden="true"></i>
              <span className="text-sm"> 0120-2977830</span>
            </a>
            
            <span className="hidden md:inline-block text-gray-400">|</span>
            
            <a 
              href="mailto:omconsultingltd@gmail.com"
              className="flex items-center hover:text-white transition-colors duration-300"
              aria-label="Email us at info@example.com"
            >
              <i className="fas fa-envelope mr-2 text-sm" aria-hidden="true"></i>
              <span className="text-sm">omconsultingltd@gmail.com</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-5 mt-2 md:mt-0">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg ${social.color} transition-all duration-300 hover:scale-110`}
                aria-label={`Visit our ${social.name} page`}
              >
                <i className={social.icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

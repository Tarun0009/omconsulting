import React from 'react';
import { Phone } from "lucide-react";

const TopBar = () => {
  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/omconsultingpvtltd',
      icon: 'fab fa-facebook-f',
      color: 'hover:text-[#1877f2]',
    },
 
    
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/omconsultingpvtltd',
      icon: 'fab fa-linkedin-in',
      color: 'hover:text-[#0a66c2]',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/om_tech__solutions?igsh=cDd3a3U3dGgwaGVl&utm_source=qr',
      icon: 'fab fa-instagram',
      color: 'hover:text-[#e4405f]',
    },
    {
      name: 'X',
      url: 'https://x.com/om_tec_solution?s=21',
      icon: 'fab fa-x-twitter',
      color: 'hover:text-white', 
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-300 py-2 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a 
  href="tel:8130068103" 
  className="flex items-center hover:text-white transition-colors duration-300"
  aria-label="Call us at 8130068103"
>
  <Phone className="w-4 h-4 mr-2 text-sm" aria-hidden="true" />
  <span className="text-sm">+91 8130068103</span>
</a>

            
            <span className="hidden md:inline-block text-gray-400">|</span>
            
            <a 
              href="mailto:contact@omtechsols.com"
              className="flex items-center hover:text-white transition-colors duration-300"
              aria-label="Email us at info@example.com"
            >
              <i className="fas fa-envelope mr-2 text-sm" aria-hidden="true"></i>
              <span className="text-sm">contact@omtechsols.com</span>
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

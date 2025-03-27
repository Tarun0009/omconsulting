// src/components/TopBar.js

import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white py-2 px-4">
      <div className="flex justify-between items-center">
        {/* Phone number */}
        <div className="text-sm">
          <span>📞 +1 234 567 890</span>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-xl text-white hover:text-blue-500 transition-transform duration-300 transform hover:scale-125"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-xl text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-125"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-xl text-white hover:text-blue-700 transition-transform duration-300 transform hover:scale-125"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

// src/pages/Contact.js

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing social icons from react-icons

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      {/* Contact Section Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Us Heading */}
        <h2 id="contact-header" className="text-5xl font-extrabold text-center text-gray-900 mb-8">
          Get in Touch with Us
        </h2>
        <p id="contact-description" className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Have any questions or want to discuss a project? We’d love to hear from you. Reach out and we’ll get back to you promptly!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Get In Touch */}
          <div id="get-in-touch">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Let’s Connect</h3>
            <p className="text-lg text-gray-700 mb-8">
              We’re here to help you with all your inquiries. Whether you need a quick answer or a detailed discussion, we’re just a message away.
            </p>

            <ul className="space-y-4 text-lg text-gray-600">
              <li>
                <strong className="block font-medium text-gray-800">Address</strong>
                <span>London Eye, London, UK</span>
              </li>
              <li>
                <strong className="block font-medium text-gray-800">Phone Number</strong>
                <span>+123-456-7890</span>
              </li>
              <li>
                <strong className="block font-medium text-gray-800">E-Mail</strong>
                <span>mailto@subx.com</span>
              </li>
            </ul>

            <hr className="my-8 border-t border-gray-300" /> {/* Horizontal line above Follow Us */}

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us On</h3>
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            id="contact-form"
            className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto border-l-4 border-gray-200 overflow-hidden"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Send Us A Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Your E-mail</label>
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your E-mail"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                By submitting, you agree to our <a href="/privacy-policy" className="text-blue-600">privacy policy</a> and <a href="/terms" className="text-blue-600">terms of service</a>.
              </p>

              {/* Submit Button */}
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 mt-6 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

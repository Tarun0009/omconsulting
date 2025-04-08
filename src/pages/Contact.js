import React, { useRef } from 'react';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { FaXTwitter } from "react-icons/fa6";
import bg from '../assets/contact.png'; // Verify image path is correct

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1dz5979', // Replace with your EmailJS service ID
      'template_yafma1e', // Replace with your EmailJS template ID
      form.current,
      '-vb_3R7MG7YGlpJ9r' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Message sent:', result.text);
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      console.error('Send error:', error.text);
      alert("Failed to send message.");
    });
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-16"
      aria-labelledby="contact-heading"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bg}
          alt="Contact Background"
          className="w-full h-full object-cover blur-sm opacity-40"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/90 md:bg-white/50 md:backdrop-blur-sm rounded-xl shadow-sm p-6 md:p-8 lg:p-10 border border-white/20">
          
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-800 text-sm md:text-base max-w-md mx-auto">
              Have questions or want to discuss a project? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                <ul className="space-y-3 text-sm text-gray-800">
                  <li>
                    <strong className="block font-medium text-gray-900">Address</strong>
                    <span>216-221, 2nd Floor, Om Tower, Commercial Belt, Alpha-1, Greater Noida, U.P. India</span>
                  </li>
                  <li>
                    <strong className="block font-medium text-gray-900">Phone</strong>
                    <a href="tel:01202977830" className="text-blue-600 hover:underline">
                      0120-2977830
                    </a>
                  </li>
                  <li>
                    <strong className="block font-medium text-gray-800">Email</strong>
                    <a href="mailto:omconsultingltd@gmail.com" className="text-blue-600 hover:underline">
                      omconsultingltd@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-base font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  {[
                    { Icon: FaFacebookF, url: '#', color: 'hover:text-blue-600 text-gray-800' },
                    { Icon: FaWhatsapp, url: '#', color: 'hover:text-green-500 text-gray-800' },
                    { Icon: FaXTwitter, url: '#', color: 'hover:text-black text-gray-800' },
                    { Icon: FaLinkedinIn, url: '#', color: 'hover:text-blue-700 text-gray-800' },
                    { Icon: FaInstagram, url: '#', color: 'hover:text-pink-600 text-gray-800' }
                  ].map(({ Icon, url, color }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-500 ${color} transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="bg-white/90 md:bg-white/70 md:backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/30 max-w-md md:max-w-none mx-auto w-full">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm bg-white/50"
                      placeholder="Your name"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm bg-white/50"
                      placeholder="your@email.com"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                    <textarea
                      name="message"
                      rows="3"
                      required
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm bg-white/50"
                      placeholder="Your message..."
                    />
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm text-sm"
                  >
                    Send Message
                  </button>
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    By submitting, you agree to our{' '}
                    <a href="/privacy-policy" className="text-blue-600 hover:underline">
                      privacy policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-6 md:p-8 lg:p-10 border border-white/20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Have questions or want to discuss a project? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <strong className="block font-medium text-gray-800">Address</strong>
                    <span>London Eye, London, UK</span>
                  </li>
                  <li>
                    <strong className="block font-medium text-gray-800">Phone</strong>
                    <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                      +123-456-7890
                    </a>
                  </li>
                  <li>
                    <strong className="block font-medium text-gray-800">Email</strong>
                    <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">
                      youremail@example.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-base font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  {[
                    { Icon: FaFacebookF, url: 'https://facebook.com', color: 'hover:text-blue-600', label: 'Facebook' },
                    { Icon: FaTwitter, url: 'https://twitter.com', color: 'hover:text-blue-400', label: 'Twitter' },
                    { Icon: FaLinkedinIn, url: 'https://linkedin.com', color: 'hover:text-blue-700', label: 'LinkedIn' },
                    { Icon: FaInstagram, url: 'https://instagram.com', color: 'hover:text-pink-600', label: 'Instagram' },
                  ].map(({ Icon, url, color, label }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-500 ${color} transition-colors`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/30 max-w-md md:max-w-none mx-auto w-full">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                    <input
                      type="text"
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

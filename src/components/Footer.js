import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import companyLogo from "../assets/comlogo.png"; // Update the path to your logo

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Flex Container for Single Row Layout */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-6">
          {/* Company Info */}
          <div className="w-full lg:w-1/5">
            <div className="flex items-center space-x-3 mb-4">
              <img src={companyLogo} alt="OM Consultancy Logo" className="h-8 w-8" />
              <h3 className="text-sm font-semibold">OM Consulting</h3>
            </div>
            <p className="text-gray-400 text-xs">
              OM Consulting is a digital marketing company offering a range of services to help businesses grow online.
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Quick Links</h3>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-yellow-500">Digital Marketing Services</Link></li>
              <li><Link to="/development" className="hover:text-yellow-500">Development</Link></li>
              <li><Link to="/designing" className="hover:text-yellow-500">Designing</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-500">Blog</Link></li> {/* Added Blog link */}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Services</h3>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li><Link to="web-development" className="hover:text-yellow-500">Web Development</Link></li>
              <li><Link to="app-development" className="hover:text-yellow-500">App Development</Link></li>
              <li><Link to="e-commerce-solutions" className="hover:text-yellow-500">E-Commerce Solutions</Link></li>
              <li><Link to="seo-optimization" className="hover:text-yellow-500">SEO Optimization</Link></li>
              <li><Link to="email-marketing" className="hover:text-yellow-500">Email Marketing</Link></li>
              <li><Link to="social-media-marketing" className="hover:text-yellow-500">Social Media Marketing</Link></li>
              <li><Link to="social-media-designing" className="hover:text-yellow-500">Social Media Designing</Link></li>
              <li><Link to="content-marketing" className="hover:text-yellow-500">Content Marketing</Link></li>
              <li><Link to="logo-designing" className="hover:text-yellow-500">Logo Designing</Link></li>
              <li><Link to="paid-advertising" className="hover:text-yellow-500">Paid Advertising</Link></li>
            </ul>
          </div>

          {/* Our Office */}
          <div className="w-full lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Our Office</h3>
            <p className="text-gray-400 text-xs">1234 Street Name, City, Country</p>
            <p className="text-gray-400 text-xs">Phone: +123 456 7890</p>
            <a href="https://www.google.com/maps/place/1234+Street+Name" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline text-xs">
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-3 text-center relative rounded-full">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute top-0 right-0 bg-blue-500 text-white p-2 px-4 rounded-full hover:bg-blue-600"
          >
            ↑
          </button>
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} OM Consulting. All Rights Reserved.  
            <Link to="/privacy-policy" className="ml-2 hover:text-yellow-500 text-xs">Privacy Policy</Link> |  
            <Link to="/terms-of-service" className="hover:text-yellow-500 text-xs">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

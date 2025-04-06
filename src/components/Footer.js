import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import companyLogo from "../assets/comlogo.png"; // Update the path to your logo
import { FaMapMarkerAlt, FaPhoneAlt, FaMap } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

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
              <h3 className="text-sm font-semibold">OM Tech Solutions</h3>
            </div>
            <p className="text-gray-400 text-xs">
              OM Tech Solutions is a digital marketing company offering a range of services to help businesses grow online.
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.facebook.com/omconsultingpvtltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://whatsapp.com/channel/0029Vb8neRo9cDDdycTlwN1f" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                <FaWhatsapp className="h-5 w-5" />
              </a>

              <a href="https://www.instagram.com/omconsultingpvtltd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/omconsultingpvtltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
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
  
  <div className="flex items-center text-gray-400 text-xs mb-2">
  <FaMapMarkerAlt className="mr-5 text-yellow-500 text-xl sm:text-xl md:text-3xl lg:text-4xl" />

    <p>216-221, 2nd Floor, Om Tower, Commercial Belt, Alpha-1, Greater Noida, U.P. India</p>
  </div>

  <div className="flex items-center text-gray-400 text-xs mb-2">
    <FaPhoneAlt className="mr-5 text-yellow-500" />
    <p>0120-2977830</p>
  </div>

  <a 
    href="https://www.google.com/maps/search/?api=1&query=216-221, 2nd Floor, Om Tower, Commercial Belt, Alpha-1, Greater Noida, U.P., India"
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center text-yellow-500 hover:underline text-xs"
  >
    <FaMap className="mr-5" />
    View on Google Maps
  </a>
</div>
</div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-3 text-center relative rounded-full">
          <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 group"
    >
      <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
    </button>
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} OM Tech Solutions. All Rights Reserved.  
            <Link to="/privacy-policy" className="ml-2 hover:text-yellow-500 text-xs">Privacy Policy</Link> |  
            <Link to="/terms-of-service" className="hover:text-yellow-500 text-xs">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaMap, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import companyLogo from "../assets/comlogo.png"; 
import { HiOutlineMail } from "react-icons/hi";


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
            <p className="text-gray-300 text-xs font-semibold ">
              OM Tech Solutions is a digital marketing company offering a range of services to help businesses grow online.
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.facebook.com/omconsultingpvtltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/om_tech__solutions?igsh=cDd3a3U3dGgwaGVl&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/omconsultingpvtltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/om_tec_solution?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500">
                <FaXTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-200">Quick Links</h3>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li><Link to="/" className="hover:text-yellow-500 ">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500 ">About Us</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-yellow-500">Digital Marketing Services</Link></li>
              <li><Link to="/development" className="hover:text-yellow-500 ">Development</Link></li>
              <li><Link to="/designing" className="hover:text-yellow-500">Designing</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 ">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-500 ">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full lg:w-1/5">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-200">Services</h3>
            <ul className="space-y-1 text-gray-300 text-xs">
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
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-200">Our Office</h3>

            <div className="flex items-start text-gray-300 text-xs mb-2">
              <FaMapMarkerAlt className="mr-5 text-yellow-500 text-xl sm:text-xl md:text-3xl lg:text-4xl" />
              <p>216-221, 2nd Floor, Om Tower, Commercial Belt, Alpha-1, Greater Noida, U.P. India</p>
            </div>

            <div className="flex items-center text-gray-300 text-xs mb-2">
              <FaPhoneAlt className="mr-5 text-yellow-500" />
              <a href="tel:8130068103" className="hover:text-yellow-500">
                +91 8130068103
              </a>
            </div>

            <div className="flex items-center text-gray-300 text-sm md:text-base  mb-2">
  <HiOutlineMail className="text-yellow-500 h-4 w-4 mr-4 flex-shrink-0" />
  <a
    href="mailto:contact@omtechsols.com"
    className="hover:text-yellow-500 break-all"
  >
    contact@omtechsols.com
  </a>
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
          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 group"
          >
            <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/8130068103"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-20 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>

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

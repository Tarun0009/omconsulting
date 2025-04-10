import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import acgil from '../assets/clients/akshi.png';
import akshi from '../assets/clients/acgil.jpg';
import apna from '../assets/clients/apna.jpg';
import ctdesign from '../assets/clients/ctdesign.png';
import design from '../assets/clients/design.png';
import energy from '../assets/clients/energy.JPG';
import garg from '../assets/clients/garg.jpg';
import gs from '../assets/clients/gs.png';
import jaipuria from '../assets/clients/jaipuria.jpeg';
import patanjali from '../assets/clients/patanjali.jpeg';
import pharma from '../assets/clients/pharma.jpg';
import rasoi from '../assets/clients/rasoi.png';
import rojgar from '../assets/clients/rojgar.jpg';
import ssf from '../assets/clients/SSF.jpg';
import uronova from '../assets/clients/Uronova.png';
//import { Link } from "react-router-dom";

const services = [
  { path: "/seo", title: "SEO Services", description: "Boost your rankings with expert SEO solutions.", buttonText: "Click Me" },
  { path: "/social-media-marketing", title: "Social Media Marketing", description: "Engage and grow your audience with social media strategies.", buttonText: "Click Me" },
  { path: "/content-marketing", title: "Content Marketing", description: "Create valuable content that drives results.", buttonText: "Click Me" },
  { path: "/paid-advertising", title: "Paid Advertising", description: "Maximize your ROI with targeted advertising campaigns.", buttonText: "Click Me" },
  { path: "/email-marketing", title: "Email Marketing", description: "Reach your audience effectively with email campaigns.", buttonText: "Click Me" },
  { path: "/whatsapp-marketing", title: "WhatsApp Marketing", description: "Engage customers directly through WhatsApp marketing.", buttonText: "Click Me" },
  { path: "/sms-marketing", title: "SMS Marketing", description: "Drive instant results with SMS marketing campaigns.", buttonText: "Click Me" },
];


const DigitalMarketingServices = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: ["0%", "-100%"], transition: { ease: "linear", repeat: Infinity, duration: 15 } });
  }, [controls]);

  return (
    <section id="digital-marketing" className="min-h-screen bg-gray-50 py-12 md:py-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Digital Marketing Services
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              At <strong className="text-blue-600">OM Consultancy</strong>, we specialize in{" "}
              <span className="font-semibold">result-driven digital marketing strategies</span>{" "}
              designed to help businesses thrive in the competitive online landscape.
            </p>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left - Strategy Content */}
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:w-2/3">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
              How Our Digital Marketing Strategies Work
            </h3>
            <div className="space-y-3 md:space-y-4">
              {[
                "1. Market Analysis & Strategy: We start by analyzing your industry, competitors, and target audience to build a customized marketing plan.",
                "2. SEO & Content Optimization: Our team optimizes your website and content to ensure maximum search engine visibility.",
                "3. Social Media & Engagement: We craft engaging content and social campaigns that help you connect with your audience.",
                "4. Paid Advertising & Lead Generation: We run highly targeted paid ads to attract the right customers and maximize your ROI.",
                "5. Analytics & Performance Tracking: We continuously track performance and refine strategies to ensure sustained growth."
              ].map((item, index) => (
                <p key={index} className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong className="text-blue-600">{item.split(':')[0]}:</strong> {item.split(':')[1]}
                </p>
              ))}
            </div>
          </div>

          {/* Right - Why Choose Us? */}
          <div className="bg-gray-100 shadow-lg rounded-2xl p-6 md:p-8 lg:w-1/3">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
              {[
                "Expertise & Experience: Years of hands-on experience in digital marketing",
                "Proven Results: Track record of delivering successful campaigns and growth",
                "Customized Strategies: We tailor marketing plans specifically for your business",
                "Cutting-Edge Techniques: Utilizing the latest trends and tools for maximum impact",
                "Client-Centric Approach: Your success is our priority, and we work closely with you"
              ].map((item, index) => (
                <li key={index} className="text-sm md:text-base">
                  <strong className="text-blue-600">{item.split(':')[0]}:</strong> {item.split(':')[1]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Services Our Company Provides
          </h3>
          <div className="max-w-3xl mx-auto mb-6">
            <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              Whether you need <strong className="text-blue-600">SEO optimization</strong> to rank higher on search engines,{" "}
              <strong className="text-blue-600">social media marketing</strong> to engage your audience, or{" "}
              <strong className="text-blue-600">targeted paid advertising</strong> to increase ROI.
            </p>
          </div>

          {/* Scrolling Services */}
          <div className="relative w-full overflow-hidden mx-auto mb-12">
  <motion.div
    className="flex space-x-4 md:space-x-6"
    animate={controls}
    onMouseEnter={() => controls.stop()}
    onMouseLeave={() =>
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          ease: "linear",
          repeat: Infinity,
          duration: 8, // ✅ Increased speed
        },
      })
    }
  >
    {[...services, ...services].map((service, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="min-w-[250px] sm:min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md p-4 md:p-6"
      >
        <Link to={service.path} className="block">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-sm md:text-base text-gray-600 mb-3">{service.description}</p>
          <span className="text-blue-500 text-sm md:text-base font-medium">Learn More →</span>
        </Link>
      </motion.div>
    ))}
  </motion.div>
</div>

        </div>

        {/* Clients Section */}
<div className="text-center mb-12 md:mb-16">
  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
    Our Valued Clients
  </h3>
  <p className="text-sm md:text-base text-gray-600 mb-6">
    We take pride in working with top brands and helping them achieve digital success.
  </p>
  
  {/* Centering the clients list */}
  <motion.div
      className="flex gap-6 px-4 py-4 w-max"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[patanjali, acgil, akshi, apna, ctdesign, design, energy, garg, gs, jaipuria, patanjali, pharma, rasoi, rojgar, ssf, uronova].map(
        (clientImage, index) => (
          <motion.div
            key={index}
            className="w-28 h-28 flex-shrink-0 bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={clientImage}
              alt={`Client ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        )
      )}
    </motion.div>
</div>


        {/* Contact Section */}
        <div className="bg-gray-800 text-white rounded-xl p-6 md:p-8 text-center mx-auto max-w-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Get in Touch</h3>
          <p className="text-sm md:text-base mb-4">Need help growing your business? Let’s talk!</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
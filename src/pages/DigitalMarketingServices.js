import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const services = [
  { path: "/seo", title: "SEO Services", description: "Boost your rankings with expert SEO solutions.", buttonText: "Click Me" },
  { path: "/social-media-marketing", title: "Social Media Marketing", description: "Engage and grow your audience with social media strategies.", buttonText: "Click Me" },
  { path: "/content-marketing", title: "Content Marketing", description: "Create valuable content that drives results.", buttonText: "Click Me" },
  { path: "/paid-advertising", title: "Paid Advertising", description: "Maximize your ROI with targeted advertising campaigns.", buttonText: "Click Me" },
  { path: "/email-marketing", title: "Email Marketing", description: "Reach your audience effectively with email campaigns.", buttonText: "Click Me" },
  { path: "/whatsapp-marketing", title: "WhatsApp Marketing", description: "Engage customers directly through WhatsApp marketing.", buttonText: "Click Me" },
  { path: "/sms-marketing", title: "SMS Marketing", description: "Drive instant results with SMS marketing campaigns.", buttonText: "Click Me" },
];

const clients = [
  { name: "Client A", image: "client-a.jpg" },
  { name: "Client B", image: "client-b.jpg" },
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
                controls.start({ x: ["0%", "-100%"], transition: { ease: "linear", repeat: Infinity, duration: 15 } })
              }
            >
              {[...services, ...services].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md p-4 md:p-6"
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
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Valued Clients</h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            We take pride in working with top brands and helping them achieve digital success.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-3 md:p-4 hover:scale-105 transition-transform"
              >
                <img 
                  src={`/clients/${client.image}`} 
                  alt={client.name} 
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full object-cover"
                />
                <p className="text-blue-600 font-medium text-sm md:text-base mt-2">{client.name}</p>
              </div>
            ))}
          </div>
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
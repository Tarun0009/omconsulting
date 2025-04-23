import { FaCode, FaMobileAlt, FaReact, FaServer, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const techStackIcons = [FaReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb];

const WebDev = () => {
  return (
    <section id = "web-development" className="bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-3xl font-extrabold text-gray-900 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Modern Web Development{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>
          <p className="text-gray-700 text-base leading-relaxed px-4 md:px-8 lg:px-16">
  At <strong className="text-blue-600">OM Tech Solutions</strong>, we specialize in building 
  <strong> high-performance websites</strong> that not only look stunning but also deliver results. Our expert team focuses on 
  <strong> responsive web design</strong>, ensuring a seamless experience across all devices. By implementing the latest 
  <strong> web development technologies</strong>, we create websites that are fast, secure, and optimized for performance. 
  Whether you're a startup or an established enterprise, our <strong>custom website development</strong> services are tailored 
  to meet your unique business goals. We integrate <strong>SEO best practices</strong> to boost your online visibility and drive 
  organic traffic. With a focus on <strong>user experience (UX)</strong> and <strong>conversion rate optimization</strong>, 
  our websites are built to engage visitors and turn them into loyal customers. From dynamic landing pages to 
  <strong>eCommerce solutions</strong> and content-rich platforms, we develop scalable, maintainable websites that grow with your business. 
  <strong>OM Tech Solutions</strong> is your trusted partner for impactful digital presence and measurable growth.
</p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Frontend Development */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-md">
                <FaCode className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold">Frontend Development</h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <FaMobileAlt className="w-4 h-4 text-purple-500" />
                Mobile-friendly & responsive designs
              </li>
              <li className="flex items-center gap-2">
                <FaReact className="w-4 h-4 text-blue-400" />
                React & Next.js web applications
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss className="w-4 h-4 text-blue-500" />
                Tailwind CSS for sleek UI
              </li>
              <li className="flex items-center gap-2">
                <FaRocket className="w-4 h-4 text-purple-500" />
                Performance optimization
              </li>
            </ul>
          </motion.div>

          {/* Backend Development */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-md">
                <FaServer className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-lg font-semibold">Backend Development</h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <SiNodedotjs className="w-4 h-4 text-green-600" />
                Scalable Node.js & Express APIs
              </li>
              <li className="flex items-center gap-2">
                <SiMongodb className="w-4 h-4 text-green-500" />
                MongoDB & PostgreSQL databases
              </li>
              <li className="flex items-center gap-2">
                <FaRocket className="w-4 h-4 text-purple-500" />
                RESTful & GraphQL API integrations
              </li>
              <li className="flex items-center gap-2">
                <FaServer className="w-4 h-4 text-blue-500" />
                Cloud deployment & hosting
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack Icons - Moving Animation */}
        <motion.div
          className="overflow-hidden whitespace-nowrap py-4"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <div className="flex gap-6">
            {techStackIcons.map((Icon, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-b-2 border-gray-300"
              >
                <Icon className="w-8 h-8 text-gray-700" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action (CTA) */}
<motion.div
  className="max-w-sm mx-auto text-center bg-white py-4 px-4 rounded-lg shadow-md border border-gray-200 mt-6"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  <h2 className="text-sm font-semibold text-gray-900 mb-2">
    Ready to Elevate Your Online Presence?
  </h2>
  <p className="text-gray-600 text-xs mb-3">
    Let's build a web experience that engages and converts.
  </p>
  <Link
    to="/contact"
    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm rounded-md font-medium 
    hover:scale-105 transition-transform duration-200 shadow-md block w-fit mx-auto"
    aria-label="Get Started with Web Development Services"
  >
    Get Started
  </Link>
</motion.div>

      </div>
    </section>
  );
};

export default WebDev;

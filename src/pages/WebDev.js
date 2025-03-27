import { FaCode, FaMobileAlt, FaReact, FaServer, FaRocket } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

const WebDev = () => {
  return (
    <section id="web-development" className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modern Web Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We craft high-performance websites that drive engagement, conversions, and business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Frontend */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <FaCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold">Frontend Development</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <FaMobileAlt className="w-5 h-5 text-purple-600" />
                Responsive, mobile-first designs
              </li>
              <li className="flex items-center gap-3">
                <FaReact className="w-5 h-5 text-blue-400" />
                React & Next.js applications
              </li>
              <li className="flex items-center gap-3">
                <SiTailwindcss className="w-5 h-5 text-blue-400" />
                Tailwind CSS frameworks
              </li>
              <li className="flex items-center gap-3">
                <FaRocket className="w-5 h-5 text-purple-600" />
                Performance optimization
              </li>
            </ul>
          </div>

          {/* Right Column - Backend */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-4 rounded-xl">
                <FaServer className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">Backend Development</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <SiNodedotjs className="w-5 h-5 text-green-600" />
                Node.js & Express.js
              </li>
              <li className="flex items-center gap-3">
                <SiMongodb className="w-5 h-5 text-green-400" />
                MongoDB & PostgreSQL
              </li>
              <li className="flex items-center gap-3">
                <FaRocket className="w-5 h-5 text-purple-600" />
                REST & GraphQL APIs
              </li>
              <li className="flex items-center gap-3">
                <FaServer className="w-5 h-5 text-blue-400" />
                Cloud integration
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[FaReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb].map((Icon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Icon className="w-12 h-12 text-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold mb-2">250+</div>
            <p className="text-sm">Projects Delivered</p>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold mb-2">99%</div>
            <p className="text-sm">Client Satisfaction</p>
          </div>
          <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold mb-2">4.8s</div>
            <p className="text-sm">Avg Load Time</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white py-12 px-8 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Digital Presence?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let's create a web experience that converts visitors into customers
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebDev;
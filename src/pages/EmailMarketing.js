import { FaEnvelope, FaBolt, FaChartBar } from "react-icons/fa";
import email from "../assets/email/email.webp";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======

>>>>>>> c437b642507f985f1faf64e6c7387d3d9b43992f
const EmailMarketing = () => {
  return (
    <section id="email-marketing" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={email}
            alt="Effective Email Marketing Strategy"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold text-gray-900">
            Smarter Email Campaigns, <span className="text-blue-600">Better Conversions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            OM Consultancy delivers high-performance email marketing strategies powered by AI-driven personalization and automation. 
            We help businesses engage, convert, and grow with tailored campaigns.
          </p>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <p className="text-gray-700">AI-Powered Personalized Campaigns</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaBolt className="text-purple-600 text-2xl" />
              <p className="text-gray-700">Automated Sequences for Maximum Engagement</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaChartBar className="text-green-600 text-2xl" />
              <p className="text-gray-700">Data-Driven Insights & Analytics</p>
            </div>
          </div>

          {/* Call to Action */}
<<<<<<< HEAD
          <div className="mt-12 text-center">
                           <Link
                                 to="/contact"
                                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 md:px-4 md:py-2 text-sm rounded-md font-medium 
                                 hover:scale-105 transition-transform duration-200 shadow-md block w-fit mx-auto"
                                 aria-label="Get Started with Web Development Services"
                               >
                                 Get Started
                               </Link>
                         </div>
=======
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300"
          >
            Get a Free Email Strategy
          </a>
>>>>>>> c437b642507f985f1faf64e6c7387d3d9b43992f
        </div>

      </div>
    </section>
  );
};

export default EmailMarketing;

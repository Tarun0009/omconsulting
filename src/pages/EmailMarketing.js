import { FaEnvelope, FaBolt, FaChartBar } from "react-icons/fa";
import email from "../assets/email/email.webp";
import { Link } from "react-router-dom";
const EmailMarketing = () => {
  return (
    <section id="email-marketing" className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
<div className="w-full md:w-1/2 flex justify-center items-start p-3">
  <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <img
      src={email}
      alt="Effective Email Marketing Strategy"
      className="w-full h-auto rounded-2xl object-cover transition duration-500 group-hover:brightness-110 group-hover:contrast-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
  </div>
</div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold text-gray-900">
            Smarter Email Campaigns, <span className="text-blue-600">Better Conversions</span>
          </h2>
          <p className="text-gray-600 text-lg">
  OM Tech Solutions delivers high-performance email marketing strategies powered by AI-driven personalization and automation. 
  We help businesses engage, convert, and grow with tailored campaigns. Our expert email marketing services focus on boosting open rates, improving click-through rates, and driving conversions through advanced segmentation and dynamic content. Whether you're launching a product, nurturing leads, or running re-engagement campaigns, our AI email automation ensures every message hits the mark.
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
        </div>

      </div>
    </section>
  );
};

export default EmailMarketing;

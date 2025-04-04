import { FaBullhorn, FaChartLine, FaDollarSign, FaRocket } from "react-icons/fa";
import paidad from "../assets/paidad.jpg";

const PaidAdvertising = () => {
  return (
    <section 
      id="paid-advertising" 
      className="bg-gray-100 text-gray-800 py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Image Section */}
        <div className="w-full">
          <img
            src={paidad}
            alt="Paid Advertising services boosting brand visibility"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right: Content Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supercharge Your Business with{" "}
            <span className="text-blue-600">Paid Advertising</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Maximize your brand reach, drive conversions, and get a high ROI with targeted 
            ad campaigns across Google, Facebook, Instagram, and more.
          </p>

          {/* Key Benefits */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaRocket className="text-blue-600 text-2xl" />
              <p className="text-gray-700">Boost website traffic and visibility instantly.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaChartLine className="text-green-600 text-2xl" />
              <p className="text-gray-700">Data-driven strategies for maximum ROI.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaBullhorn className="text-yellow-600 text-2xl" />
              <p className="text-gray-700">Target the right audience at the right time.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaDollarSign className="text-red-600 text-2xl" />
              <p className="text-gray-700">Cost-effective ad solutions that deliver results.</p>
            </div>
          </div>

          {/* Call to Action */}
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300"
          >
            Get a Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default PaidAdvertising;

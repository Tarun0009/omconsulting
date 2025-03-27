import { FaBullhorn, FaChartLine, FaDollarSign, FaRocket } from "react-icons/fa";

const PaidAdvertising = () => {
  return (
    <section id="paid-advertising" className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Content Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supercharge Your Business with <span className="text-blue-500">Paid Advertising</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Maximize your brand reach, drive conversions, and get a high ROI with targeted ad campaigns across Google, Facebook, Instagram, and more.
          </p>

          {/* Key Benefits */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaRocket className="text-blue-500 text-2xl" />
              <p className="text-gray-300">Boost website traffic and visibility instantly.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaChartLine className="text-green-500 text-2xl" />
              <p className="text-gray-300">Data-driven strategies for maximum ROI.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaBullhorn className="text-yellow-500 text-2xl" />
              <p className="text-gray-300">Target the right audience at the right time.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaDollarSign className="text-red-500 text-2xl" />
              <p className="text-gray-300">Cost-effective ad solutions that deliver results.</p>
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

        {/* Right: Image Section */}
        <div className="relative">
          <img
            src="https://source.unsplash.com/600x400/?marketing,advertising"
            alt="Paid Advertising"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdvertising;

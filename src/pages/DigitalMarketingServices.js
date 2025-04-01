import { Link } from "react-router-dom";

const DigitalMarketingServices = () => {
  return (
    <section id="digital-marketing" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Digital Marketing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Links */}
          <Link to="/seo" className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">SEO Services</h3>
            <p className="text-gray-600">Boost your rankings with expert SEO solutions.</p>
          </Link>

          <Link to="/social-media-marketing" className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Social Media Marketing</h3>
            <p className="text-gray-600">Engage and grow your audience with social media strategies.</p>
          </Link>

          <Link to="/content-marketing" className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Content Marketing</h3>
            <p className="text-gray-600">Create valuable content that drives results.</p>
          </Link>

          <Link to="/paid-advertising" className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Paid Advertising</h3>
            <p className="text-gray-600">Maximize your ROI with targeted advertising campaigns.</p>
          </Link>

          <Link to="/email-marketing" className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Email Marketing</h3>
            <p className="text-gray-600">Reach your audience effectively with email campaigns.</p>
          </Link>

          <Link to="/whatsapp-marketing" className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">WhatsApp Marketing</h3>
            <p className="text-gray-600">Engage customers directly through WhatsApp marketing.</p>
          </Link>

          <Link to="/sms-marketing" className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">SMS Marketing</h3>
            <p className="text-gray-600">Drive instant results with SMS marketing campaigns.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;

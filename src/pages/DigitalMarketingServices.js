import SEO from './pages/SEO'; // import the SeoSection component

const DigitalMarketingSection = () => {
  return (
    <section id="digital-marketing" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Digital Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SEO Section */}
          <SEO />

          {/* Social Media Marketing Section */}
          <div id="social-media-marketing" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Social Media Marketing</h3>
            <p className="mt-4 text-gray-600">Increase engagement and build your brand with our social media marketing strategies.</p>
          </div>

          {/* Content Marketing Section */}
          <div id="content-marketing" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Content Marketing</h3>
            <p className="mt-4 text-gray-600">Create impactful content that drives traffic and engagement with our content marketing services.</p>
          </div>

          {/* Paid Advertising Section */}
          <div id="paid-advertising" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Paid Advertising</h3>
            <p className="mt-4 text-gray-600">Targeted ads that bring traffic to your website and maximize ROI through paid advertising strategies.</p>
          </div>

          {/* Email Marketing Section */}
          <div id="email-marketing" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Email Marketing</h3>
            <p className="mt-4 text-gray-600">Reach your customers directly with personalized email campaigns that drive engagement.</p>
          </div>

          {/* WhatsApp Marketing Section */}
          <div id="whatsapp-marketing" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">WhatsApp Advertising</h3>
            <p className="mt-4 text-gray-600">Leverage WhatsApp for direct communication with your customers and enhance engagement.</p>
          </div>

          {/* SMS Marketing Section */}
          <div id="sms-marketing" className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">SMS Marketing</h3>
            <p className="mt-4 text-gray-600">Reach your audience quickly and effectively through SMS campaigns with high open rates.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;

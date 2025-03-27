import { FaEnvelopeOpenText, FaTools, } from 'react-icons/fa';

const EmailMarketing = () => {
  return (
    <section id="email-marketing" className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Email Marketing That <span className="text-blue-600">Converts</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Drive engagement and sales with targeted email campaigns that deliver measurable results
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-4 rounded-lg">
                <FaEnvelopeOpenText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Campaign Management</h3>
                <p className="text-gray-600">
                  End-to-end campaign strategy from segmentation to execution
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 p-4 rounded-lg">
                <FaTools className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automation Solutions</h3>
                <p className="text-gray-600">
                  Behavior-triggered emails that nurture leads automatically
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">42:1</div>
                <p className="text-sm">Average ROI</p>
              </div>
              <div className="bg-purple-600 text-white p-6 rounded-xl text-center">
                <div className="text-3xl font-bold mb-2">68%</div>
                <p className="text-sm">Avg Open Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/email-dashboard.jpg" 
              alt="Email marketing analytics" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white py-12 px-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to Boost Your Email ROI?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let's create email campaigns that drive real business results
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Start Email Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailMarketing;
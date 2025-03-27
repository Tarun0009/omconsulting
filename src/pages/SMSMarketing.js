import { FaClock, FaCheckCircle, FaBolt, FaChartLine, FaMobileAlt, FaThumbsUp } from "react-icons/fa";

const SMSMarketing = () => {
  return (
    <section id="sms-marketing" className="bg-gradient-to-r from-white to-mint-100 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center bg-blue-800 px-4 py-2 rounded-full mb-4">
            <FaMobileAlt className="text-xl mr-2" />
            <span className="text-sm font-medium">98% Open Rate Guarantee</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Drive Sales with <span className="text-blue-400">Hyper-Targeted SMS Campaigns</span>
          </h2>

          {/* Service Differentiators */}
          <div className="grid grid-cols-2 gap-4 my-8">
            {[
              { icon: FaChartLine, text: "45%+ Conversion Rate", color: "text-green-400" },
              { icon: FaClock, text: "90 Sec Campaign Setup", color: "text-yellow-400" },
              { icon: FaBolt, text: "10M+ Messages Sent", color: "text-red-400" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
                <item.icon className={`${item.color} text-2xl`} />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Our Approach */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">How We Deliver Results:</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-400 mt-1 mr-3 text-xl flex-shrink-0" />
                <div>
                  <strong>AI-Powered Segmentation:</strong> We analyze customer behavior to send highly targeted messages.
                </div>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-400 mt-1 mr-3 text-xl flex-shrink-0" />
                <div>
                  <strong>Compliance First:</strong> Our campaigns follow TCPA guidelines, ensuring 100% legal & ethical marketing.
                </div>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-400 mt-1 mr-3 text-xl flex-shrink-0" />
                <div>
                  <strong>Real-Time Analytics:</strong> We provide live tracking for delivery rates, customer engagement, and conversions.
                </div>
              </li>
            </ul>
          </div>

          {/* Why Choose Us? */}
          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-semibold flex items-center space-x-2 text-blue-900">
              <FaThumbsUp className="text-blue-400 text-2xl" />
              <span>Why Our SMS Campaigns Work</span>
            </h3>
            <p className="text-gray-600">
              At <strong>OM Consultancy</strong>, we specialize in **high-converting** SMS campaigns tailored to your business.  
              Our expertise in **customer segmentation, automation, and analytics** ensures that every message reaches the right audience at the right time.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors"
            >
              <FaBolt className="text-xl" />
              <span>Launch SMS Campaign</span>
            </a>
            <a href="tel:+919999999999" className="border border-white/30 hover:border-white/60 py-3 px-6 rounded-lg text-center transition-colors">
              📞 Get SMS Strategy Call
            </a>
          </div>
        </div>

        {/* Visual Section */}
        <div className="relative group">
          <img
            src="/sms-campaign-dashboard.png"
            alt="SMS Campaign Analytics"
            className="rounded-xl shadow-2xl transform group-hover:scale-101 transition-transform"
            loading="lazy"
          />
          <div className="absolute -right-10 -bottom-8 hidden lg:block">
            <img 
              src="/sms-chat-example.png" 
              alt="Campaign Example"
              className="w-48 h-auto rounded-lg shadow-xl border-4 border-blue-900"
            />
          </div>
          <div className="absolute left-0 -top-8 hidden lg:block bg-white/30 p-4 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">98%</div>
              <div className="text-sm">Delivery Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMSMarketing;

import { FaCheckCircle, FaBolt, FaMobileAlt, FaThumbsUp } from "react-icons/fa";
import SMS1 from "../assets/sms/SMS1.jpg";
import SMS2 from "../assets/sms/SMS2.jpg";

const SMSMarketing = () => {
  return (
    <section
      id="sms-marketing"
      className="bg-gradient-to-r from-white to-mint-100 text-gray-900 py-16 px-4 sm:px-6 lg:px-12"
    >
      <article className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center bg-blue-800 px-4 py-2 rounded-full mb-4 text-white">
            <FaMobileAlt className="text-xl mr-2" />
            <span className="text-sm font-medium">98% Open Rate Guarantee</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Drive Sales with{" "}
            <span className="text-blue-400">Hyper-Targeted SMS Campaigns</span>
          </h2>

          {/* Our Approach */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">
              How We Deliver Results:
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                {
                  title: "AI-Powered Segmentation",
                  desc: "We analyze customer behavior to send highly targeted messages.",
                },
                {
                  title: "Compliance First",
                  desc: "Our campaigns follow TCPA guidelines, ensuring 100% legal & ethical marketing.",
                },
                {
                  title: "Real-Time Analytics",
                  desc: "We provide live tracking for delivery rates, customer engagement, and conversions.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-400 mt-1 mr-3 text-xl flex-shrink-0" />
                  <div>
                    <strong>{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us? */}
          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-semibold flex items-center space-x-2 text-blue-900">
              <FaThumbsUp className="text-blue-400 text-2xl" />
              <span>Why Our SMS Campaigns Work</span>
            </h3>
            <p className="text-gray-700">
              At <strong>OM Tech Solutions</strong>, we specialize in{" "}
              <strong>high-converting</strong> SMS campaigns tailored to your
              business. Our expertise in{" "}
              <strong>customer segmentation, automation, and analytics</strong>{" "}
              ensures that every message reaches the right audience at the right
              time.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors text-white"
            >
              <FaBolt className="text-xl" />
              <span>Launch SMS Campaign</span>
            </a>
            <a
              href="tel:0120-2977830"
              className="border border-blue-500 hover:border-blue-600 text-blue-700 hover:text-blue-800 py-3 px-6 rounded-lg text-center transition-colors"
            >
              📞 Get SMS Strategy Call
            </a>
          </div>
        </div>

        {/* Visual Section */}
        <figure className="relative group">
          <img
            src={SMS1}
            alt="SMS Campaign Analytics with High Conversion Rate"
            className="rounded-xl shadow-2xl transform group-hover:scale-101 transition-transform w-full h-auto"
            loading="lazy"
          />
          <div className="absolute -right-6 -bottom-6 hidden lg:block">
            <img
              src={SMS2}
              alt="Live Campaign Example with Engagement Insights"
              className="w-48 h-auto rounded-lg shadow-xl border-4 border-blue-900"
              loading="lazy"
            />
          </div>
          <figcaption className="absolute left-0 -top-6 hidden lg:block bg-white/30 p-4 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">98%</div>
              <div className="text-sm">Delivery Rate</div>
            </div>
          </figcaption>
        </figure>
      </article>
    </section>
  );
};

export default SMSMarketing;

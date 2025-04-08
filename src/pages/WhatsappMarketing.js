import { FaUsers, FaRobot, FaBroadcastTower, FaWhatsapp } from "react-icons/fa";
import whatsappimg from "../assets/whatsapp/whatsapp.jpg";
import whatsappimg1 from "../assets/whatsapp/whatsapp1.png";

const WhatsappMarketing = () => {
  return (
    <section
      id="whatsapp-marketing"
      className="bg-gray-100 text-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center bg-gray-200 px-4 py-2 rounded-full mb-4">
            <FaWhatsapp className="text-xl mr-2 text-green-500" />
            <span className="text-sm font-medium">
              OM Tech Solutions - Trusted WhatsApp Marketing Partner
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Elevate Engagement with{" "}
            <span className="text-green-500">Our WhatsApp Marketing Solutions</span>
          </h2>
          <p className="text-gray-700">
            OM Tech Solutions helps businesses maximize customer outreach with
            automated chat solutions, targeted campaigns, and real-time engagement.
          </p>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              { icon: FaUsers, text: "90%+ Open Rates", color: "text-green-500" },
              { icon: FaRobot, text: "AI-Driven Chatbots", color: "text-blue-500" },
              { icon: FaBroadcastTower, text: "10K+ Successful Campaigns", color: "text-yellow-500" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <item.icon className={`${item.color} text-2xl flex-shrink-0`} />
                <span className="font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Our 3-Step Process */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How We Drive Results:</h3>
            <ol className="space-y-4 text-gray-700">
              {[
                "Custom chatbot setup & message templates tailored to your business",
                "AI-powered targeted campaigns with performance analytics",
                "Seamless CRM integration for customer tracking & lead nurturing",
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-full mr-3">{i + 1}</span>
                  {text}
                </li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919999999999?text=Start%20WhatsApp%20Marketing"
              className="bg-green-500 hover:bg-green-600 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors text-white shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
              <span>Get Started on WhatsApp</span>
            </a>
            <a
              href="tel:0120-2977830"
              className="border border-gray-400 hover:border-gray-600 py-3 px-6 rounded-lg text-center transition-colors text-gray-700 shadow-sm"
            >
              📞 Call Us: 0120-2977830
            </a>
          </div>
        </div>

        {/* Visual Section */}
        <div className="relative group flex justify-center">
          <img
            src={whatsappimg}
            alt="WhatsApp Marketing Dashboard"
            className="rounded-xl shadow-lg transform group-hover:scale-105 transition-transform w-full h-auto max-w-md"
            loading="lazy"
          />
          <div className="absolute -right-6 -bottom-8 hidden lg:block">
            <img
              src={whatsappimg1}
              alt="WhatsApp Chat Automation"
              className="w-40 h-auto rounded-lg shadow-lg border-2 border-gray-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappMarketing;

import { FaUsers, FaRobot, FaBroadcastTower, FaWhatsapp } from "react-icons/fa";

const WhatsappMarketing = () => {
  return (
    <section id="whatsapp-marketing" className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center bg-gray-200 px-4 py-2 rounded-full mb-4">
            <FaWhatsapp className="text-xl mr-2 text-green-500" />
            <span className="text-sm font-medium">OM Consultancy - Trusted WhatsApp Marketing Partner</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Elevate Engagement with <span className="text-green-500">Our WhatsApp Marketing Solutions</span>
          </h2>
          <p className="text-gray-600">
            OM Consultancy helps businesses maximize customer outreach with automated chat solutions, targeted campaigns, and real-time engagement.
          </p>

          {/* Why Choose Us */}
          <div className="grid grid-cols-2 gap-4 my-8">
            {[
              { icon: FaUsers, text: "90%+ Open Rates", color: "text-green-500" },
              { icon: FaRobot, text: "AI-Driven Chatbots", color: "text-blue-500" },
              { icon: FaBroadcastTower, text: "10K+ Successful Campaigns", color: "text-yellow-500" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <item.icon className={`${item.color} text-2xl`} />
                <span className="font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Our 3-Step Process */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How We Drive Results:</h3>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-full mr-3">1</span>
                Custom chatbot setup & message templates tailored to your business
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-full mr-3">2</span>
                AI-powered targeted campaigns with performance analytics
              </li>
              <li className="flex items-start">
                <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-full mr-3">3</span>
                Seamless CRM integration for customer tracking & lead nurturing
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919999999999?text=Start%20WhatsApp%20Marketing"
              className="bg-green-500 hover:bg-green-600 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-colors text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
              <span>Get Started on WhatsApp</span>
            </a>
            <a href="tel:+919999999999" className="border border-gray-400 hover:border-gray-600 py-3 px-6 rounded-lg text-center transition-colors text-gray-700">
              📞 Call Us: +91 9999 999 999
            </a>
          </div>
        </div>

        {/* Visual Section */}
        <div className="relative group">
          <img
            src="/whatsapp-marketing-dashboard.png"
            alt="WhatsApp Marketing Dashboard"
            className="rounded-xl shadow-md transform group-hover:scale-101 transition-transform"
            loading="lazy"
          />
          <div className="absolute -right-10 -bottom-8 hidden lg:block">
            <img 
              src="/whatsapp-chat-automation.png" 
              alt="WhatsApp Chat Automation"
              className="w-48 h-auto rounded-lg shadow-md border-2 border-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappMarketing;

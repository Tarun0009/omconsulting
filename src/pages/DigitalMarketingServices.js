import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  { path: "/seo", title: "SEO Services", description: "Boost your rankings with expert SEO solutions." },
  { path: "/social-media-marketing", title: "Social Media Marketing", description: "Engage and grow your audience with social media strategies." },
  { path: "/content-marketing", title: "Content Marketing", description: "Create valuable content that drives results." },
  { path: "/paid-advertising", title: "Paid Advertising", description: "Maximize your ROI with targeted advertising campaigns." },
  { path: "/email-marketing", title: "Email Marketing", description: "Reach your audience effectively with email campaigns." },
  { path: "/whatsapp-marketing", title: "WhatsApp Marketing", description: "Engage customers directly through WhatsApp marketing." },
  { path: "/sms-marketing", title: "SMS Marketing", description: "Drive instant results with SMS marketing campaigns." },
];

const clients = [
  { name: "Client A", image: "client-a.jpg" },
  { name: "Client B", image: "client-b.jpg" },
  { name: "Client C", image: "client-c.jpg" },
  { name: "Client D", image: "client-d.jpg" },
];


const DigitalMarketingServices = () => {
  return (
    <section id="digital-marketing" className="min-h-screen bg-gray-50 py-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Digital Marketing Services
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At <strong className="text-blue-600">OM Consultancy</strong>, we specialize in{" "}
              <span className="font-semibold">result-driven digital marketing strategies</span>{" "}
              designed to help businesses thrive in the competitive online landscape. Our team leverages{" "}
              <span className="text-blue-600 font-semibold">cutting-edge tools</span> and{" "}
              <span className="text-blue-600 font-semibold">data-driven insights</span> to improve brand visibility, 
              drive traffic, and maximize conversions.
            </p>
          </div>
        </div>

        {/* Strategy Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            How Our Digital Marketing Strategies Work
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">1. Market Analysis & Strategy:</strong>{" "}
                We start by analyzing your industry, competitors, and target audience to build a customized marketing plan.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">2. SEO & Content Optimization:</strong>{" "}
                Our team optimizes your website and content to ensure maximum search engine visibility.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">3. Social Media & Engagement:</strong>{" "}
                We craft engaging content and social campaigns that help you connect with your audience.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">4. Paid Advertising & Lead Generation:</strong>{" "}
                We run highly targeted paid ads to attract the right customers and maximize your ROI.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">5. Analytics & Performance Tracking:</strong>{" "}
                We continuously track performance and refine strategies to ensure sustained growth.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Services Our Company Provides
          </h3>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Whether you need <strong className="text-blue-600">SEO optimization</strong> to rank higher on search engines,{" "}
              <strong className="text-blue-600">social media marketing</strong> to engage your audience, or{" "}
              <strong className="text-blue-600">targeted paid advertising</strong> to increase ROI, we tailor our services to meet your unique business goals.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With a <span className="text-blue-600 font-semibold">customer-first approach</span>,{" "}
              we ensure that every marketing campaign delivers <strong>measurable success</strong>,{" "}
              <strong>higher engagement rates</strong>, and <strong>sustainable growth</strong>.{" "}
              Let’s build your digital success story together!
            </p>
          </div>

          {/* Scrolling Services */}
          <div className="relative w-full overflow-hidden max-w-7xl mx-auto mb-20">
            <motion.div
              className="flex space-x-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            >
              {[...services, ...services].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] bg-white rounded-2xl shadow-lg text-center p-6 transform transition hover:shadow-xl"
                >
                  <Link to={service.path} aria-label={service.title}>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Valued Clients</h3>
          <p className="text-lg text-gray-600 mb-8">
            We take pride in working with top brands and helping them achieve digital success.
          </p>

        <div className="relative w-full overflow-hidden max-w-7xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 py-8 rounded-xl shadow-xl">
        <motion.div
  className="flex space-x-8 items-center"
  animate={{ x: ["0%", "-100%"] }}
  transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
>
  {[...clients, ...clients].map((client, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="min-w-[180px] bg-white rounded-full shadow-md text-center p-4"
    >
      <img src={`/clients/${client.image}`} alt={client.name} className="h-16 w-16 mx-auto rounded-full" />
      <p className="text-blue-600 font-semibold mt-2">{client.name}</p>
    </motion.div>
  ))}
</motion.div>
  </div>

         {/* Contact Section */}
         <div className="bg-gray-800 text-white rounded-lg p-4 px-4 text-center mt-6  max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-white mb-4">Need help growing your business? Let’s talk!</p>
          <Link
            to="/contact"
            className="bg-black text-white-600 font-bold px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
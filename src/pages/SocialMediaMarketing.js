import { motion } from "framer-motion";
import facebook from "../assets/socialmedia/facebook.png";
import insta from "../assets/socialmedia/instagram.jpg";
import linky from "../assets/socialmedia/linkedin.jpg";
import pay from "../assets/socialmedia/pay.webp";
import { Link } from "react-router-dom";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

const services = [
  {
    title: "Instagram Marketing",
    img: insta,
    content: "Leverage Instagram's visual platform to reach a larger audience and foster meaningful engagement.",
    bullets: [
      "Strategic content creation and planning",
      "Hashtag strategy & analytics",
      "Instagram Ads management",
      "Influencer collaborations"
    ]
  },
  {
    title: "Facebook Advertising",
    img: facebook,
    content: "Precision-targeted campaigns that drive real business results through Facebook's powerful advertising platform.",
    bullets: [
      "Audience segmentation",
      "Creative ad development",
      "Conversion optimization",
      "Performance analytics"
    ]
  },
  {
    title: "LinkedIn Strategy",
    img: linky,
    content: "Establish thought leadership and generate B2B leads through professional network building.",
    bullets: [
      "Company page optimization",
      "Content strategy development",
      "Sponsored Content campaigns",
      "Lead generation tactics"
    ]
  },
  {
    title: "Paid Advertising",
    img: pay,
    content: "Multi-platform paid media strategies that deliver measurable ROI across digital channels.",
    bullets: [
      "Cross-channel campaign management",
      "Conversion rate optimization",
      "Budget allocation strategy",
      "Advanced performance tracking"
    ]
  }
];

const SocialMediaMarketing = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Social Media Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In today's digital-first world, strategic social media management is crucial for brand success. 
            Our data-driven approach combines creative excellence with analytical precision to deliver measurable 
            results across all major platforms.
          </p>
        </motion.div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Our Social Media Services Stand Out
            </h3>
            <p className="text-gray-600">
              With over a decade of experience in digital marketing, we've mastered the art of creating 
              social media strategies that:
             - Enhance brand awareness and audience engagement.  
             - Leverage data-driven insights to optimize performance.  
            - Drive conversions through compelling content and targeted campaigns.  
             - Foster meaningful connections with your audience for long-term growth.  
             - Utilize AI-driven analytics to track and improve results in real time.  
  - Create visually appealing and shareable content that resonates with your audience.  
  - Implement cross-platform strategies to ensure maximum reach and consistency.  
  - Stay ahead of trends to keep your brand relevant and competitive.
  - Enhance brand awareness and audience engagement.  
  - Leverage data-driven insights to optimize performance.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span>Drive authentic engagement and community building</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span>Convert followers into loyal customers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span>Adapt to algorithm changes in real-time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span>Integrate seamlessly with overall marketing goals</span>
              </li>
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our 360° Approach to Social Success
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Strategic Planning</h4>
                <p className="text-sm text-gray-600">Customized roadmaps aligned with business objectives</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Content Creation</h4>
                <p className="text-sm text-gray-600">Platform-specific content that resonates with your audience</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Community Management</h4>
                <p className="text-sm text-gray-600">24/7 monitoring and authentic engagement</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Performance Analysis</h4>
                <p className="text-sm text-gray-600">Data-driven optimizations for continuous improvement</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Comprehensive Social Media Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-xl"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.content}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
{/* Contact CTA */}
<div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto my-8">
  <div className="bg-blue-600 text-white rounded-xl p-4 md:p-6 text-center">
    <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
      Start Your Design Journey
    </h2>
    <p className="mb-4 md:mb-6 text-blue-100 text-sm md:text-base">
      Let's collaborate to create stunning visual solutions
    </p>
    <Link
      to="/contact"
      className="bg-white text-blue-600 px-4 py-2 md:px-5 md:py-3 rounded-lg font-semibold inline-block hover:bg-blue-50 transition-colors text-sm md:text-base"
    >
      Schedule Consultation
    </Link>
  </div>
</div>
</div>
    </section>
  );
};

export default SocialMediaMarketing;
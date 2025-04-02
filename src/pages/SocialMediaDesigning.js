import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import reel from "../assets/design/reel.jpg";
import meme from "../assets/design/meme.jpg";
import newspr from "../assets/design/newspr.jpg";
import catalog from "../assets/design/catalog.jpg";
import pamp from "../assets/design/pamp.jpg";

const SocialMediaDesigning = () => {
  const services = [
    {
      title: "Reel Designing",
      description: "Engaging short video content creation optimized for social media platforms.",
      img: reel,
      alt: "Reel Designing service example"
    },
    {
      title: "Meme Creation",
      description: "Trendy & relatable meme designs that boost brand engagement.",
      img: meme,
      alt: "Meme Creation service example"
    },
    {
      title: "Catalog Design",
      description: "Professional product catalogs that enhance your digital storefront.",
      img: catalog,
      alt: "Catalog Design service example"
    },
    {
      title: "Pamphlet Design",
      description: "Eye-catching digital pamphlets for effective promotions.",
      img: pamp,
      alt: "Pamphlet Design service example"
    },
    {
      title: "Newspaper Ad Designing",
      description: "Creative & high-impact newspaper ads to maximize brand reach.",
      img: newspr,
      alt: "Newspaper Ad Design service example"
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-6 px-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Transform Your Social Presence with{' '}
            <span className="text-blue-600">Professional Designs</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In today's visual-first digital landscape, compelling design is your ultimate competitive edge. 
            Our team creates scroll-stopping social media content that captures attention, communicates your 
            brand story, and drives meaningful engagement across all platforms.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white mb-12 mx-4"
        >
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to Elevate Your Social Media Game?
            </h2>
            <p className="text-blue-100 text-lg">
              Get custom designs that convert - Start with a free consultation today
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaDesigning;
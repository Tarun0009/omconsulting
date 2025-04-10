import seo1 from "../assets/seo/seo1.jpg";
import Seo2 from "../assets/seo/Seo2.jpg";
import seo3 from "../assets/seo/seo3.webp";
import seo4 from "../assets/seo/seo4.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SEO = () => {
  return (
    <section id="seo-optimization" className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column - Content */}
        <div className="space-y-8 md:space-y-12">
          {/* Hero Section */}
          <div className="space-y-4 md:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Dominate Search Results with
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {" "}Data-Driven SEO
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600">
  At <span className="font-semibold text-blue-600">OM Tech Solutions</span>, we specialize in delivering result-driven <strong>SEO services in India</strong> that increase your website’s visibility and drive qualified <strong>organic traffic</strong>. With over 16 years of proven expertise in <strong>on-page SEO, off-page optimization, technical SEO</strong>, and <strong>keyword research</strong>, our team ensures your business ranks higher on search engines like Google. We implement customized strategies to improve your <strong>search engine rankings</strong>, enhance <strong>website performance</strong>, and boost conversions. Partner with us to unlock the full potential of your online presence and dominate your niche.
</p>

          </div>

          {/* Process */}
          <div className="space-y-4 text-gray-700 text-base md:text-lg">
  <p>
    Our content-first approach focuses on building <strong>pillar pages</strong>, <strong>content clusters</strong>, and earning <strong>high-quality backlinks</strong> that establish domain authority and sustain long-term rankings. We don’t just rank your site — we help it stay ranked.
  </p>
  <p>
    From regular <strong>rank tracking</strong> and performance reporting to ongoing optimization and strategy refinement, <span className="font-semibold text-blue-600">OM Tech Solutions</span> provides full-spectrum SEO services in India designed to deliver real business growth.
  </p>
</div>

        </div>
          {/* Strategy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { img: seo1, title: "Keyword Strategy", stat: "98% Ranking Success" },
              { img: Seo2, title: "Technical Audit", stat: "2s Load Time Guarantee" },
              { img: seo3, title: "Content Optimization", stat: "3x Engagement Boost" },
              { img: seo4, title: "SEO Consulting", stat: "5x Engagement Boost" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-blue-600 text-xs md:text-sm">{item.stat}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action (CTA) */}
<div className="flex justify-center w-full">
  <motion.div
    className="max-w-xs sm:max-w-sm text-center bg-white py-4 px-4 rounded-lg shadow-md border border-gray-200 mt-4 md:mt-6 w-full"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <h2 className="text-sm font-semibold text-gray-900 mb-2">
      Ready to Elevate Your Online Presence?
    </h2>
    <p className="text-gray-600 text-xs mb-3">
      Let's build a web experience that engages and converts.
    </p>
    <Link
      to="/contact"
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 md:px-4 md:py-2 text-sm rounded-md font-medium 
      hover:scale-105 transition-transform duration-200 shadow-md block w-fit mx-auto"
      aria-label="Get Started with Web Development Services"
    >
      Get Started
    </Link>
  </motion.div>
</div>
        </div>
    </section>
  );
};

export default SEO;
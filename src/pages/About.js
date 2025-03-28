import React from "react";
import { motion } from "framer-motion";
import founderImage from "../assets/aboutimg/founder.webp";
import team from "../assets/aboutimg/team.jpg";
import client1 from "../assets/aboutimg/client1.jpg";
import client2 from "../assets/aboutimg/client2.jpg";
import client3 from "../assets/aboutimg/client3.jpg";

const About = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">About OM Consultancy</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            OM Consultancy is your trusted partner in digital transformation, combining data-driven strategies,
            innovative marketing techniques, and advanced technology solutions to drive real business growth.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              At OM Consultancy, we are a team of passionate digital experts committed to helping businesses
              establish a strong online presence. We develop tailored marketing strategies that enhance brand
              awareness, optimize customer engagement, and drive conversions.
            </p>
          </div>
          <img src={team} alt="Our Team" className="rounded-lg w-full h-64 object-cover shadow-md" loading="lazy" />
        </div>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Our mission is to empower businesses by providing innovative, data-driven digital solutions that
              maximize brand potential and customer engagement.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We envision a future where businesses harness the power of digital technology to achieve
              sustainable growth and industry leadership.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-4 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Proven ROI", "Certified Expertise", "End-to-End Services", "Data-Driven Approach", "24/7 Support", "Customer-Centric"].map((title, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">
                  We specialize in delivering strategic digital marketing solutions that guarantee measurable success.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg p-6 text-center mb-12 max-w-md mx-auto">
          <img src={founderImage} alt="Founder - Tarun Pratap Singh" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white" />
          <blockquote className="text-base italic mb-4">
            "True digital transformation happens when every click, impression, and engagement directly contributes to business objectives."
          </blockquote>
          <p className="font-semibold text-lg">Tarun Pratap Singh</p>
          <p className="text-yellow-400 text-sm">CEO & Growth Strategist</p>
        </div>

        {/* Our Clients */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4 text-center">Our Clients</h2>
          <motion.div 
            className="flex space-x-6 overflow-x-auto py-4"
            animate={{ x: [0, -100, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {[client1, client2, client3, client1, client2, client3].map((clientImage, index) => (
              <div key={index} className="w-28 h-28 flex-shrink-0 bg-white shadow-md rounded-lg overflow-hidden">
                <img src={clientImage} alt={`Client ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-1 rounded-xl inline-block">
            <div className="bg-white rounded-lg py-8 px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Marketing Audit</h2>
              <p className="text-base text-gray-600 mb-6 max-w-lg mx-auto">
                Receive a comprehensive analysis of your digital presence with actionable recommendations to optimize your marketing efforts.
              </p>
              <div className="flex justify-center gap-4">
                <motion.a 
                  href="#contact" 
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Claim Free Audit
                </motion.a>
                <a href="#casestudies" className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white">
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

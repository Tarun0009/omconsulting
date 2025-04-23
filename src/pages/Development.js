import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import acgil from '../assets/clients/akshi.png';
import akshi from '../assets/clients/acgil.jpg';
import apna from '../assets/clients/apna.jpg';
import ctdesign from '../assets/clients/ctdesign.png';
import design from '../assets/clients/design.png';
import energy from '../assets/clients/energy.JPG';
import cbs from '../assets/clients/cbs.jpeg';
import garg from '../assets/clients/garg.jpg';
import gs from '../assets/clients/gs.png';
import jaipuria from '../assets/clients/jaipuriaarts.jpeg';
import patanjali from '../assets/clients/patanjali.jpeg';
import pharma from '../assets/clients/pharma.jpg';
import rasoi from '../assets/clients/rasoi.png';
import rojgar from '../assets/clients/rojgar.jpg';
import ssf from '../assets/clients/SSF.jpg';
import uronova from '../assets/clients/Uronova.png';


const services = [
  {
    title: "Web Development",
    description: "We build fast, secure, and SEO-friendly websites that help businesses establish a strong online presence.",
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Developing intuitive and high-performing mobile applications for both Android and iOS platforms.",
    link: "/app-development",
  },
  {
    title: "E-Commerce Solutions",
    description: "Creating powerful and scalable online stores with secure payment gateways and optimized user experiences.",
    link: "/e-commerce-solutions",
  },

];

const Development = () => {
  return (
    <section id="development-services" className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Elevate Your Business with Our Advanced Development Services
          </motion.h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
  At <strong>OM Tech Solutions</strong>, we specialize in building customized digital solutions
  that help businesses scale, innovate, and achieve digital transformation. Our expert team leverages
  data-driven strategies, performance marketing, and cutting-edge web and mobile development to
  enhance brand visibility and drive measurable results. From SEO optimization and content marketing
  to social media growth and lead generation, we empower brands to thrive in today’s digital-first world.
</p>
        </div>

       {/* Services Grid */}
<div className="mb-12 md:mb-16 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
    Our Services
  </h2>

  {/* Centering the grid */}
  <div className="flex justify-center">
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-3">
            {service.description}
          </p>
          <Link 
            to={service.link} 
            className="text-blue-600 text-sm md:text-base font-medium inline-flex items-center hover:text-blue-800"
          >
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>


        {/* Why Choose Us & Technologies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Why Choose Us */}
          <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Why Choose OM Consultancy?
            </h2>
            <ul className="space-y-3 md:space-y-4">
              {[
                "Expert Development Team: Highly skilled professionals with years of experience",
                "Customized Solutions: Tailor-made applications suited to your business goals",
                "Latest Technologies: Modern frameworks like React, Node.js, and Spring Boot",
                "Cost-Effective: Affordable pricing models without compromising quality",
                "End-to-End Support: From consultation to post-launch maintenance"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Section */}
          <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Tech Stack
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'Spring Boot', 'Python'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Discovery", "Planning", "Design", "Development", "Deployment"].map((step, index) => (
              <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
                <div className="mb-2 text-blue-600">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            Trusted By Leading Brands
          </h2>
          <motion.div
              className="flex gap-6 px-4 py-4 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[patanjali, acgil, akshi, apna, ctdesign, design,cbs, energy, garg, gs, jaipuria, patanjali, pharma, rasoi, rojgar, ssf, uronova].map(
                (clientImage, index) => (
                  <motion.div
                    key={index}
                    className="w-28 h-28 flex-shrink-0 bg-white shadow-md rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={clientImage}
                      alt={`Client ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                )
              )}
            </motion.div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-black rounded-xl shadow-lg p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Let's Build Something Amazing!
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
import React from "react";
import { motion } from "framer-motion";
import founderImage from "../assets/aboutimg/founder.webp";
import team from "../assets/aboutimg/team.jpg";

import acgil from '../assets/clients/akshi.png';
import akshi from '../assets/clients/acgil.jpg';
import apna from '../assets/clients/apna.jpg';
import ctdesign from '../assets/clients/ctdesign.png';
import design from '../assets/clients/design.png';
import energy from '../assets/clients/energy.JPG';
import garg from '../assets/clients/garg.jpg';
import gs from '../assets/clients/gs.png';
import jaipuria from '../assets/clients/jaipuria.jpeg';
import patanjali from '../assets/clients/patanjali.jpeg';
import pharma from '../assets/clients/pharma.jpg';
import rasoi from '../assets/clients/rasoi.png';
import rojgar from '../assets/clients/rojgar.jpg';
import ssf from '../assets/clients/SSF.jpg';
import uronova from '../assets/clients/Uronova.png';
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">About OM Tech Solutions</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          OM Tech Solutions is your trusted partner in digital transformation, combining data-driven strategies, innovative marketing techniques, and advanced technology solutions to drive real business growth. We specialize in SEO, social media marketing, PPC advertising, content creation, and website development to help businesses build a strong online presence and generate high-quality leads. With a results-oriented approach and a focus on ROI, we empower brands to reach their target audience, increase visibility, and achieve measurable success in the digital landscape.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-base leading-relaxed">
            At OM Tech Solutions, we are a team of passionate digital experts committed to helping businesses establish a strong online presence. We develop tailored digital marketing strategies that enhance brand visibility, drive targeted traffic, and boost online engagement. Our expertise spans across SEO (Search Engine Optimization), social media marketing, content marketing, pay-per-click (PPC) advertising, and website development. With a data-driven approach and deep industry insights, we help businesses of all sizes grow in the competitive digital space and turn online visitors into loyal customers.
            </p>
          </div>
          <img src={team} alt="Our Team" className="rounded-lg w-full h-64 object-cover shadow-md" loading="lazy" />
        </div>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed">
            Our mission is to empower businesses by providing innovative, data-driven digital solutions that maximize brand potential and customer engagement. We strive to deliver measurable results through strategic SEO, impactful social media campaigns, ROI-focused PPC advertising, and conversion-driven website experiences. By combining creativity with analytics, we help brands grow their digital footprint, generate quality leads, and build lasting customer relationships in an ever-evolving digital landscape.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-base leading-relaxed">
            We envision a future where businesses harness the power of digital technology to achieve sustainable growth and industry leadership. Our goal is to be at the forefront of digital innovation, guiding brands through the ever-changing online landscape with cutting-edge tools and strategies. By leveraging the full spectrum of digital marketing—from SEO and content marketing to paid media and automation—we aim to transform businesses into digital-first powerhouses that thrive in competitive markets.
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
<div className="mb-12 overflow-hidden">
  <h2 className="text-3xl font-semibold text-teal-700 mb-4 text-center">
    Our Clients
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
    {[patanjali, acgil, akshi, apna, ctdesign, design, energy, garg, gs, jaipuria, patanjali, pharma, rasoi, rojgar, ssf, uronova].map(
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
</div>

{/* CTA Section */}
<div className="text-center">
  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-[2px] rounded-xl inline-block">
    <div className="bg-white rounded-lg py-6 px-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Get Your Marketing Consultation
      </h2>
      <p className="text-sm text-gray-600 mb-5">
        Unlock tailored strategies to elevate your online presence, boost traffic, and increase conversions.
      </p>
      <Link
        to="/contact"
        className="bg-yellow-500 text-white px-5 py-2.5 rounded-md font-medium hover:bg-yellow-600 transition-colors"
      >
        Contact Us
      </Link>
    </div>
  </div>
</div>

    </section>
  );
};

export default About;

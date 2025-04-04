import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

//import { ChevronLeft, ChevronRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";

const services = [
  { title: "Web Development", icon: "💻", description: "Modern, high-performance websites tailored to your business needs.", link: "#/web-development" },
  { title: "App Development", icon: "📱", description: "Custom mobile applications for iOS and Android platforms.", link: "#/app-development" },
  { title: "E-Commerce Solutions", icon: "🛒", description: "Seamless online shopping experiences with powerful features.", link: "#/e-commerce-solutions" },
  { title: "SEO Optimization", icon: "🔍", description: "Boost your search rankings with expert SEO strategies.", link: "#/seo-optimization" },
  { title: "Email Marketing", icon: "📧", description: "Engaging email campaigns that convert leads into customers.", link: "#/email-marketing" },
  { title: "Social Media Marketing", icon: "📢", description: "Expand your brand presence on social media platforms.", link: "#/social-media-marketing" },
  { title: "Social Media Designing", icon: "🎨", description: "Eye-catching designs for your social media campaigns.", link: "#/social-media-designing" },
  { title: "Content Marketing", icon: "📝", description: "High-quality content that engages and retains customers.", link: "#/content-marketing" },
  { title: "Logo Designing", icon: "🏆", description: "Unique and professional logos that define your brand.", link: "#/logo-designing" },
  { title: "Paid Advertising", icon: "💰", description: "Maximize your ROI with targeted ad campaigns.", link: "#/paid-advertising" },
  { title: "WhatsApp Marketing", icon: "📲", description: "Engage customers with automated and personalized WhatsApp campaigns.", link: "#/whatsapp-marketing" },
  { title: "Banner Service", icon: "🖼️", description: "Custom banners for websites, social media, and digital ads.", link: "#/banner-designing" },
];


const faqs = [
  { 
    question: 'How do you measure campaign success?',
    answer: 'We provide detailed monthly reports tracking 50+ KPIs including organic traffic growth, conversion rates, and ROI using tools like Google Analytics and SEMrush.'
  },
  { 
    question: 'What industries do you specialize in?',
    answer: 'While we work across industries, we have deep expertise in e-commerce, SaaS, professional services, and healthcare.'
  },
  { 
    question: 'What makes your approach different?',
    answer: 'We combine AI-powered analytics with human creativity, focusing on long-term sustainable growth rather than quick wins.'
  },
  { 
    question: 'Do you offer SEO services?',
    answer: 'Yes, we provide comprehensive SEO services, including on-page optimization, technical SEO, and high-quality link building to improve search rankings.'
  },
  { 
    question: 'What social media platforms do you manage?',
    answer: 'We manage Facebook, Instagram, LinkedIn, Twitter, TikTok, and Pinterest, tailoring strategies to each platform for maximum engagement.'
  },
  { 
    question: 'How long does it take to see results from SEO?',
    answer: 'SEO results vary, but significant improvements typically take 3-6 months. We focus on sustainable growth with white-hat strategies.'
  },
  { 
    question: 'Do you create content for social media marketing?',
    answer: 'Yes, we create custom content, including graphics, videos, and engaging posts, to drive brand awareness and conversions.'
  },
  { 
    question: 'Can you run PPC (Pay-Per-Click) campaigns?',
    answer: 'Absolutely! We manage Google Ads, Facebook Ads, and LinkedIn Ads campaigns, optimizing for cost efficiency and high ROI.'
  },
  { 
    question: 'What kind of businesses do you work with?',
    answer: 'We work with startups, small businesses, and established enterprises, tailoring digital strategies to meet specific goals.'
  },
  { 
    question: 'Do you offer email marketing services?',
    answer: 'Yes, we design, create, and manage email marketing campaigns, helping businesses nurture leads and retain customers effectively.'
  },


];



const clients = [
  { name: 'TechCorp', logo: '🚀', testimonial: 'Increased organic traffic by 300% in 6 months' },
  { name: 'HealthPlus', logo: '🏥', testimonial: 'Generated $1.2M in revenue through PPC' },
  { name: 'EduFuture', logo: '🎓', testimonial: 'Tripled social media engagement in 3 months' },
];

const Hero = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 50); // Adjust for smooth motion

    return () => clearInterval(interval);
  }, []);

  //faq toggle code
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open one FAQ at a time
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="relative">
      {/* Enhanced Slider Section */}
      <div className="min-h-screen w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="h-full w-full"
        >
          {/* Slide 1: Digital Marketing */}
          <SwiperSlide className="relative flex items-center bg-gradient-to-br from-blue-900 to-blue-600 py-12 lg:py-20">
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12 px-6 sm:px-8 lg:px-10">
    
    {/* Left Text Content */}
    <motion.div
      className="max-w-xl text-center lg:text-left space-y-5 lg:space-y-6 z-10 order-2 lg:order-1"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
        Full-Service Digital Agency
      </span>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
        Transform Your  
        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2 lg:mt-3">
          Digital Ecosystem
        </span>
      </h1>

      <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
  Leverage our 360° digital marketing solutions, blending technology, 
  data insights, and creativity—from SEO to social media strategies.  
  Our tailored approach ensures brand visibility, customer engagement,  
  and measurable growth. Whether it's content marketing, PPC campaigns,  
  or conversion optimization, we craft strategies that drive real results.  
  Stay ahead of the competition with innovative, data-driven marketing techniques.
</p>


      {/* CTA Buttons */}
      <Link to="/contact">
  <motion.button
    className="bg-white text-blue-900 px-6 py-3 rounded-full text-sm sm:text-base mt-5  font-medium hover:bg-gray-100 transition-all shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Request Strategy Session
  </motion.button>
</Link>
</motion.div>.

    {/* Hero Image */}
    <motion.img
      src={hero1}
      alt="Digital transformation"
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl order-1 lg:order-2 mt-8 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>



{/* Slide 2: SEO & Content Experts */}
<SwiperSlide className="relative flex items-center bg-gradient-to-br from-gray-900 to-blue-800 py-12 lg:py-20">
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12 px-6 sm:px-8 lg:px-10">
    
    {/* Left Content Section */}
    <motion.div
      className="max-w-xl text-center lg:text-left space-y-5 lg:space-y-6 z-10 order-2 lg:order-1"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Badge */}
      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
        SEO & Content Leadership
      </span>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
        Dominate Search  
        <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mt-2 lg:mt-3">
          Engine Real Estate
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
  Our holistic SEO approach merges technical expertise with strategic content,  
  ensuring sustainable organic growth through AI-driven optimization.  
  We analyze user behavior, implement data-backed keyword strategies, and refine on-page  
  and off-page SEO to maximize visibility. Our comprehensive approach enhances website  
  authority, boosts engagement, and drives long-term digital success.
</p>


      {/* CTA Button */}
      <Link to="/contact">
  <motion.button
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md mt-4 w-full sm:w-auto"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get Free SEO Audit
  </motion.button>
</Link>
</motion.div>

    {/* Hero Image */}
    <motion.img
      src={hero2}
      alt="SEO experts"
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl order-1 lg:order-2 mt-8 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>


{/* Slide 3: Social Media Masters */}
<SwiperSlide className="relative flex items-center bg-gradient-to-br from-purple-900 to-pink-700 py-12 lg:py-20">
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12 px-6 sm:px-8 lg:px-10">
    
    {/* Left Content Section */}
    <motion.div
      className="max-w-xl text-center lg:text-left space-y-5 lg:space-y-6 z-10 order-2 lg:order-1"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Badge */}
      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
        Social Media Innovation
      </span>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
        Viral Social  
        <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-2 lg:mt-3">
          Engagement Strategies
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
  Transform your social presence with data-driven strategies, 
  influencer partnerships, and community building to drive measurable 
  brand loyalty and conversions. Leverage cutting-edge analytics to track 
  engagement, optimize campaigns, and maximize reach. Our tailored approach 
  ensures your brand stays ahead in the ever-evolving digital landscape, 
  turning followers into loyal customers.
</p>


      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
 

  <Link to="/contact">
    <motion.button
      className="bg-pink-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Us
    </motion.button>
  </Link>
</div>
</motion.div>
    {/* Hero Image */}
    <motion.img
      src={hero3}
      alt="Social media"
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl order-1 lg:order-2 mt-8 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>

{/* Slide 4: Web & App Development */}
<SwiperSlide className="relative flex items-center bg-gradient-to-br from-indigo-900 to-yellow-600 py-14 lg:py-20">
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12 px-6 sm:px-8 lg:px-10">
    
    {/* Left Content Section */}
    <motion.div
      className="max-w-xl text-center lg:text-left space-y-5 lg:space-y-6 z-10 order-2 lg:order-1"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Badge */}
      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
        Digital Experience Crafters
      </span>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
        Building  
        <span className="block bg-gradient-to-r from-yellow-400 to-indigo-400 bg-clip-text text-transparent mt-2 lg:mt-3">
          Digital Futures
        </span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
  Elevate your digital presence with full-stack development solutions,  
  blending cutting-edge tech with user-focused design to maximize  
  engagement and conversions. Our team specializes in scalable, high-performance  
  applications tailored to meet the evolving needs of businesses.  
  From intuitive UI/UX to robust backend architecture, we create seamless  
  digital experiences that drive success. Whether it's web, mobile, or enterprise solutions,  
  we ensure innovation, security, and efficiency at every step.  
</p>


      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

  <Link to="/contact">
    <motion.button
      className="bg-yellow-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Us
    </motion.button>
  </Link>
</div>
</motion.div>

    {/* Hero Image */}
    <motion.img
      src={hero4}
      alt="Web development"
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl order-1 lg:order-2 mt-8 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>

{/* Navigation Controls */}
<div className="swiper-button-next !text-white !w-12 !h-12 sm:!w-14 sm:!h-14 lg:!w-16 lg:!h-16 !rounded-full !bg-white/20 !backdrop-blur-sm hover:!bg-white/30 transition-colors after:!text-xl lg:after:!text-2xl shadow-xl"></div>
<div className="swiper-button-prev !text-white !w-12 !h-12 sm:!w-14 sm:!h-14 lg:!w-16 lg:!h-16 !rounded-full !bg-white/20 !backdrop-blur-sm hover:!bg-white/30 transition-colors after:!text-xl lg:after:!text-2xl shadow-xl"></div>

{/* Pagination */}
<div className="swiper-pagination !absolute !bottom-8 sm:!bottom-12 lg:!bottom-16 !left-0 !right-0 !z-10"></div>
</Swiper>
      </div>

    {/* Why Choose Us */}
    <div className="mt-10 bg-blue-50 p-5 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Why Choose <span className="text-blue-600">OM Tech Solutions?</span>
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mt-4">
        We go beyond traditional digital marketing—our approach is data-first, 
        ROI-driven, and tailored to your brand's unique needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {[
          {
            title: 'Proven Expertise',
            content: 'Our team has years of experience in SEO, PPC, content marketing, web development, and data analytics, ensuring top-notch service.'
          },
          {
            title: 'Data-Driven Approach',
            content: 'We use AI-powered insights, customer behavior analysis, and performance tracking to optimize campaigns for maximum impact.'
          },
          {
            title: 'Full-Service Solutions',
            content: 'From social media management to web design and paid advertising, we provide end-to-end digital solutions tailored to your goals.'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>

      {/* Enhanced Services Section */}
      <motion.section className="py-10 bg-white text-gray-900 relative">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Our Digital Services</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Empowering your brand with cutting-edge digital solutions.
    </p>
  </div>

  {/* Swiper Slider */}
  <div className="relative w-full mt-8">
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={20}
      slidesPerView={1.5}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      autoplay={{
        delay: 0, // No delay between slides
        disableOnInteraction: false, // Keeps autoplay running even after interaction
        pauseOnMouseEnter: true, // Pause autoplay on hover
      }}
      speed={4000} // Controls smooth scrolling speed
      loop={true} // Enables infinite scrolling
      navigation // Enables next/prev buttons
      className="pb-10"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <a href={service.link} className="no-underline">
            <motion.div
              className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition-colors min-w-[250px] flex-shrink-0 shadow-md cursor-pointer text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</motion.section>



      {/* Client Success Stories */}
<motion.section 
  className="py-6 bg-white"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Transforming businesses through data-driven digital strategies
      </p>
    </div>
    
    {/* Client Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {clients.map((client, index) => (
        <motion.div
          key={client.name}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Client Image */}
          <img 
            src={client.photo} 
            alt={client.name} 
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          
          {/* Client Name & Testimonial */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {client.name}
          </h3>
          <p className="text-gray-600">{client.testimonial}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


      {/* Enhanced Contact Section */}
      <motion.section 
  className="py-10 bg-white"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  <div className="max-w-5xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      
      {/* Left Content - Digital Marketing Info */}
      <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Let’s Grow Your Business</h2>
        <p className="text-gray-600 mb-3">
          We’re a full-service digital marketing agency helping brands increase visibility, drive traffic, and generate leads through strategic online solutions.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Search Engine Optimization (SEO)</li>
          <li>Social Media Marketing</li>
          <li>Performance-Based Advertising</li>
          <li>Web & App Development</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Our experts are ready to assist you with a tailored digital strategy that fits your goals. Get in touch today!
        </p>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-gray-100 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Contact Us
        </h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Name*</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Phone*</label>
            <input 
              type="tel" 
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1">Message*</label>
            <textarea 
              rows="3"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</motion.section>


    {/* Enhanced FAQ */}

      <motion.section 
      className="py-5 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="font-semibold text-base flex justify-between items-center">
                {faq.question}
                <span className="text-gray-500">{activeIndex === index ? "▲" : "▼"}</span>
              </h3>
              {activeIndex === index && (
                <motion.p 
                  className="text-gray-600 mt-1 text-sm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>


      {/* Knowledge Hub */}
      <motion.section 
  className="py-20 bg-gray-50"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Digital Marketing Insights</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Latest trends, strategies, and best practices in digital transformation
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { 
          title: 'SEO in 2025: AI-Driven Strategies', 
          excerpt: 'Explore how machine learning is revolutionizing search optimization',
          tag: 'SEO',
          link: 'https://www.searchenginejournal.com/ai-seo-trends-2024/494212/'
        },
        { 
          title: 'Social Media Algorithms Decoded', 
          excerpt: 'Master platform algorithms for maximum organic reach',
          tag: 'Social',
          link: 'https://blog.hootsuite.com/social-media-algorithms-2024/'
        },
        { 
          title: 'Conversion Rate Optimization', 
          excerpt: 'Proven techniques to boost your website conversion rates',
          tag: 'CRO',
          link: 'https://www.optimizely.com/optimization-glossary/conversion-rate-optimization/'
        }
      ].map((post, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
            {post.tag}
          </span>
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <a 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Read Article →
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
    </div>
  );
};

export default Hero;
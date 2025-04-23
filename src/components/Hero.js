import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Blog from "../pages/Blog";
import cbs from '../assets/clients/cbs.jpeg';
import acgil from '../assets/clients/akshi.png';
import akshi from '../assets/clients/acgil.jpg';
import apna from '../assets/clients/apna.jpg';
import ctdesign from '../assets/clients/ctdesign.png';
import design from '../assets/clients/design.png';
import energy from '../assets/clients/energy.JPG';
import garg from '../assets/clients/garg.jpg';
import gs from '../assets/clients/gs.png';
import jaipuria from '../assets/clients/jaipuriaarts.jpeg';
import patanjali from '../assets/clients/patanjali.jpeg';
import pharma from '../assets/clients/pharma.jpg';
import rasoi from '../assets/clients/rasoi.png';
import rojgar from '../assets/clients/rojgar.jpg';
import ssf from '../assets/clients/SSF.jpg';
import uronova from '../assets/clients/Uronova.png';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";


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
  {
    name: 'ACG Infotech Limited',
    img: acgil,
    testimonial: '“OM Tech Solutions helped us increase our organic traffic by over 300% in just six months. Their SEO expertise and execution have significantly improved our digital footprint.”'
  },
  {
    name: 'Akshi Enterprises',
    img: akshi,
    testimonial: '“Thanks to their result-driven PPC strategies, we generated over $1.2M in revenue. Their targeting precision and campaign optimization were exceptional.”'
  },
  {
    name: 'Apna Bazar',
    img: apna,
    testimonial: '“OM Tech Solutions boosted our social media engagement threefold in just 90 days. Their content strategy brought our brand closer to the community.”'
  },
  {
    name: 'Renewu World',
    img: ctdesign,
    testimonial: '“Our online sales skyrocketed by 180% due to their tailored SEO campaigns. They understood our brand and delivered beyond expectations.”'
  },
  {
    name: 'Design N Details',
    img: design,
    testimonial: '“Their UX redesign reduced our bounce rate by 45% and enhanced the overall user experience. Our visitors now stay longer and convert better.”'
  },
  {
    name: 'Energy Expert',
    img: energy,
    testimonial: '“With OM Tech Solutions’ ad strategy, we saw a 4x ROI in under two months. Their ad placement and audience targeting were spot-on.”'
  },
  {
    name: 'Garg Darwaje wale Noida',
    img: garg,
    testimonial: '“We grew our Instagram followers by 25K organically. Their social strategy was not only innovative but aligned perfectly with our brand’s voice.”'
  },
  {
    name: 'Gautam Solutions',
    img: gs,
    testimonial: '“Their Google Ads campaigns generated over 50,000 quality leads. OM Tech Solutions truly understands high-performance marketing.”'
  },
  {
    name: 'Jaipuria Arts',
    img: jaipuria,
    testimonial: '“Our customer retention doubled after implementing their email automation workflows. Personalized and timely—exactly what we needed.”'
  },
  {
    name: 'Patanjali Renewable Energy Pvt Ltd',
    img: patanjali,
    testimonial: '“We reduced our cost-per-lead by more than 50% with their expert targeting. They helped us scale our reach efficiently.”'
  },
  {
    name: 'Pharma Health Academy',
    img: pharma,
    testimonial: '“With their help, we ranked in the top 3 on Google for over 15 high-volume keywords. Their SEO approach is data-driven and impactful.”'
  },
  {
    name: 'Rasoi',
    img: rasoi,
    testimonial: '“Our cost per lead dropped by 35% while improving conversion rates. Their funnel strategy is practical and result-oriented.”'
  },
  {
    name: 'Rojgar Sagar',
    img: rojgar,
    testimonial: '“We hit 500,000 monthly visitors in just 4 months. Their SEO and content marketing efforts drove unprecedented traffic growth.”'
  },
  {
    name: 'Soumya Foundation',
    img: ssf,
    testimonial: '“Our e-commerce conversion rate doubled after implementing their CRO techniques. Their insights truly transformed our checkout experience.”'
  },
  {
    name: 'Uronova Kidney Stone Hospital',
    img: uronova,
    testimonial: '“Their clean and user-friendly UI/UX redesign reduced our bounce rate by 45%. Patients now find it easier to navigate and book services.”'
  },
  {
    name: 'CBS Technologies',
    img: cbs,
    testimonial: '“Their UI/UX overhaul significantly improved our user journey. With a 45% drop in bounce rate, our engagement metrics are better than ever.”'
  }
];


const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_1dz5979', // Replace with actual Service ID
        'template_yafma1e', // Replace with actual Template ID
        form.current,
        '-vb_3R7MG7YGlpJ9r' // Replace with actual Public Key
      )
      .then((result) => {
        console.log('Message sent:', result.text);
        alert("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        console.error('Send error:', error.text);
        alert("Failed to send message.");
      });
    };
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
      <div className="w-full">
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
          <SwiperSlide className="relative flex items-center bg-gradient-to-br from-blue-900 to-blue-600 py-6 md:py-6 lg:py-6">
  <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
    
    {/* Left Text Content */}
    <motion.div
      className="max-w-2xl text-center lg:text-left space-y-4 z-10"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
        Full-Service Digital Agency
      </span>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        Transform Your  
        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-3">
          Digital Ecosystem
        </span>
      </h1>

      <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
        Leverage our 360° digital marketing solutions, blending technology, 
        data insights, and creativity—from SEO to social media strategies.  
        Our tailored approach ensures brand visibility, customer engagement,  
        and measurable growth. Whether it's content marketing, PPC campaigns,  
        or conversion optimization, we craft strategies that drive real results.  
        Stay ahead of the competition with innovative, data-driven marketing techniques.
      </p>

      {/* CTA Button */}
      <Link to="/contact">
        <motion.button
          className="bg-white text-blue-900 px-6 py-3 rounded-full text-sm sm:text-base mt-5 font-medium hover:bg-gray-100 transition-all shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request Strategy Session
        </motion.button>
      </Link>
    </motion.div>

    {/* Hero Image */}
    <motion.img
      src={hero1}
      alt="Digital transformation"
      className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>




{/* Slide 2: SEO & Content Experts */}
<SwiperSlide className="relative flex items-center bg-gradient-to-br from-gray-900 to-blue-800 py-6 lg:py-6">
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
      src={hero3}
      alt="SEO experts"
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl order-1 lg:order-2 mt-8 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>


{/* Slide 3: Social Media Masters */}
<SwiperSlide className="relative flex items-center bg-gradient-to-br from-purple-900 to-pink-700 py-6 lg:py-6">
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
      src={hero4}
      alt="Social media"
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl order-1 lg:order-2 mt-8 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>

{/* Slide 4: Web & App Development */}
<SwiperSlide className="relative flex items-center bg-gradient-to-br from-indigo-900 to-yellow-600 py-6 lg:py-6">
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
      src={hero2}
      alt="Web development"
      className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain rounded-xl order-1 lg:order-2 mt-8 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
</SwiperSlide>

{/* Navigation Controls */}
<div className="swiper-button-next !text-white !w-8 !h-8 sm:!w-8 sm:!h-10 lg:!w-12 lg:!h-12 !rounded-full !bg-white/20 !backdrop-blur-sm hover:!bg-white/30 transition-colors after:!text-xl lg:after:!text-2xl shadow-xl"></div>
<div className="swiper-button-prev !text-white !w-8 !h-8 sm:!w-8 sm:!h-10 lg:!w-12 lg:!h-12 !rounded-full !bg-white/20 !backdrop-blur-sm hover:!bg-white/30 transition-colors after:!text-xl lg:after:!text-2xl shadow-xl"></div>

{/* Pagination */}
<div className="swiper-pagination !absolute !bottom-8 sm:!bottom-5 lg:!bottom-5 !left-0 !right-0 !z-5"></div>
</Swiper>
      </div>

    {/* Why Choose Us */}
    <div className="mt-2 bg-blue-50 p-4 rounded-xl shadow-lg">
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
  <div className="relative w-full py-12 px-4 md:px-12 bg-white">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3500}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="pb-16 cursor-grab"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full max-w-[280px] mx-auto"
            >
              {service.icon && (
                <div className="text-3xl text-blue-600 mb-4">{service.icon}</div>
              )}

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>

              {service.img && (
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-32 object-contain rounded-lg mb-4"
                  loading="lazy"
                />
              )}

              <a
                href={service.link}
                className="mt-auto inline-block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md"
              >
                Read More
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Custom Swiper Button Styling */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: #2563eb; /* blue-600 */
            top: 45%;
            z-index: 10;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            color: #1d4ed8; /* blue-700 */
          }

          .swiper-pagination-bullet {
            background: #cbd5e1;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background: #2563eb;
          }
        `}
      </style>
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
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex gap-6 flex-nowrap w-max"
        animate={isHovered ? { x: "0%" } : { x: ["0%", "-100%"] }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 md:p-5 lg:p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 flex flex-col items-center text-center min-w-[220px] max-w-[240px] transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={client.img}
              alt={client.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-3"
            />
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 break-words">
              {client.name}
            </h3>
            <p className="text-sm md:text-[15px] text-gray-600 leading-snug break-words whitespace-normal">
              {client.testimonial}
            </p>
          </motion.div>
        ))}
      </motion.div>
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
    <h1 className="text-center font-bold py-3 mb-3 text-2xl md:text-3xl text-black"> CONTACT US</h1>
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
      <div className="bg-white/90 md:bg-white/70 md:backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/30 max-w-md md:max-w-none mx-auto w-full">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm bg-white/50"
                      placeholder="Your name"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm bg-white/50"
                      placeholder="your@email.com"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please Mention Your Requirements
                    <textarea
                      name="message"
                      rows="3"
                      required
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm bg-white/50"
                      placeholder="Your message..."
                    />
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm text-sm"
                  >
                    Send Message
                  </button>
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    By submitting, you agree to our{' '}
                    <a
                      href="/privacy-policy"
                      className="text-blue-600 hover:underline"
                      aria-label="Privacy Policy"
                    >
                      privacy policy
                    </a>
                  </p>
                </div>
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
      <Blog/>
    </div>
  );
};

export default Hero;
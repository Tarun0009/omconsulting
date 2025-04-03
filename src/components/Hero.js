import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";

// Dummy data
const services = [
  { title: 'SEO Optimization', icon: '🔍', description: 'Boost your search engine rankings with our proven strategies' },
  { title: 'Social Media', icon: '💬', description: 'Engage your audience across all major platforms' },
  { title: 'Content Marketing', icon: '📝', description: 'Storytelling that converts visitors into customers' },
  { title: 'PPC Advertising', icon: '💰', description: 'Targeted ads that deliver measurable ROI' },
];

const faqs = [
  { question: 'How long until we see results?', answer: 'Most clients see initial improvements within 30 days' },
  { question: 'Do you offer ongoing support?', answer: 'Yes, we provide 24/7 support and monthly reports' },
  { question: 'What\'s your pricing model?', answer: 'Custom packages based on your business needs' }
];

const clients = ['Amazon', 'Google', 'Microsoft', 'Apple', 'Tesla'];

const Hero = () => {
  return (
    <div className="relative">
      {/* Slider Section */}
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
          <SwiperSlide className="relative flex items-center bg-gradient-to-br from-blue-900 to-blue-600 py-16 lg:py-0">
            <div className="container mx-auto h-full flex flex-col lg:flex-row gap-8 items-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-center lg:text-left space-y-4 lg:space-y-6 z-10 order-2 lg:order-1">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
                  Award-Winning Digital Agency
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug lg:leading-tight">
                  Transform Your 
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                    Digital Presence
                  </span>
                </h1>
                <p className="text-sm lg:text-base xl:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                  We provide end-to-end digital marketing solutions that help brands grow their online presence,  
                  reach their target audience, and achieve sustainable business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                  <button className="bg-white text-blue-900 px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-gray-100 transition-colors">
                    Start Free Audit
                  </button>
                  <button className="border-2 border-white/30 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base hover:border-white/60 transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              <img
                src={hero1}
                alt="Digital marketing"
                className="w-full lg:w-1/2 h-auto max-h-[400px] lg:max-h-none object-cover rounded-xl order-1 lg:order-2"
              />
            </div>
          </SwiperSlide>

          {/* Slide 2: SEO & Content Experts */}
          <SwiperSlide className="relative flex items-center bg-gradient-to-br from-gray-900 to-blue-800 py-16 lg:py-0">
            <div className="container mx-auto h-full flex flex-col lg:flex-row gap-8 items-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-center lg:text-left space-y-4 lg:space-y-6 z-10 order-2 lg:order-1">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
                  SEO & Content Experts
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug lg:leading-tight">
                  Dominate Search 
                  <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                    Engine Rankings
                  </span>
                </h1>
                <p className="text-sm lg:text-base xl:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                  Our SEO experts focus on improving your website's visibility on search engines,  
                  driving organic traffic, and increasing conversions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="bg-white/10 p-3 lg:p-4 rounded-xl backdrop-blur-sm">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-green-400">98%</div>
                    <div className="text-xs lg:text-sm text-gray-200">Client Retention</div>
                  </div>
                  <div className="bg-white/10 p-3 lg:p-4 rounded-xl backdrop-blur-sm">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-green-400">425%</div>
                    <div className="text-xs lg:text-sm text-gray-200">ROI Increase</div>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-green-600 transition-colors">
                  Get SEO Report
                </button>
              </div>
              <img
                src={hero2}
                alt="SEO experts"
                className="w-full lg:w-1/2 h-auto max-h-[400px] lg:max-h-none object-cover rounded-xl order-1 lg:order-2"
              />
            </div>
          </SwiperSlide>

          {/* Slide 3: Social Media Masters */}
          <SwiperSlide className="relative flex items-center bg-gradient-to-br from-purple-900 to-pink-700 py-16 lg:py-0">
            <div className="container mx-auto h-full flex flex-col lg:flex-row gap-8 items-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-center lg:text-left space-y-4 lg:space-y-6 z-10 order-2 lg:order-1">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
                  Social Media Masters
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug lg:leading-tight">
                  Viral Social 
                  <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-2">
                    Media Strategies
                  </span>
                </h1>
                <p className="text-sm lg:text-base xl:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                  We create compelling content, manage your accounts, and run targeted campaigns  
                  to boost your brand's visibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                  <button className="bg-pink-500 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-pink-600 transition-colors">
                    Social Audit
                  </button>
                  <button className="border-2 border-white/30 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base hover:border-white/60 transition-colors">
                    Content Samples
                  </button>
                </div>
              </div>
              <img
                src={hero3}
                alt="Social media"
                className="w-full lg:w-1/2 h-auto max-h-[400px] lg:max-h-none object-cover rounded-xl order-1 lg:order-2"
              />
            </div>
          </SwiperSlide>

          {/* Slide 4: Web & App Development */}
          <SwiperSlide className="relative flex items-center bg-gradient-to-br from-indigo-900 to-yellow-600 py-16 lg:py-0">
            <div className="container mx-auto h-full flex flex-col lg:flex-row gap-8 items-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-center lg:text-left space-y-4 lg:space-y-6 z-10 order-2 lg:order-1">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
                  Web & App Development
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug lg:leading-tight">
                  Crafting 
                  <span className="block bg-gradient-to-r from-yellow-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                    Digital Experiences
                  </span>
                </h1>
                <p className="text-sm lg:text-base xl:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                  We create digital solutions that captivate and convert.  
                  Every project is optimized for maximum engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                  <button className="bg-yellow-500 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-yellow-600 transition-colors">
                    Request Quote
                  </button>
                  <button className="border-2 border-white/30 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base hover:border-white/60 transition-colors">
                    Our Portfolio
                  </button>
                </div>
              </div>
              <img
                src={hero4}
                alt="Web development"
                className="w-full lg:w-1/2 h-auto max-h-[400px] lg:max-h-none object-cover rounded-xl order-1 lg:order-2"
              />
            </div>
          </SwiperSlide>

          {/* Navigation Buttons */}
          <div className="swiper-button-next !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 lg:!w-12 lg:!h-12 !rounded-full !bg-white/10 !backdrop-blur-sm hover:!bg-white/20 transition-colors after:!text-sm lg:after:!text-lg"></div>
          <div className="swiper-button-prev !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 lg:!w-12 lg:!h-12 !rounded-full !bg-white/10 !backdrop-blur-sm hover:!bg-white/20 transition-colors after:!text-sm lg:after:!text-lg"></div>

          {/* Pagination */}
          <div className="swiper-pagination !absolute !bottom-4 sm:!bottom-8 !left-0 !right-0 !z-10"></div>
        </Swiper>
      </div>

      {/* Additional Sections */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Master Digital Marketing With Us
              </h2>
              <p className="text-lg text-gray-600">
                We combine cutting-edge technology with creative strategies to deliver measurable results.
              </p>
              <div className="space-y-4">
                {['Data-Driven Approach', 'Full Transparency', '24/7 Support'].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">✅</div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.img
              src={hero2}
              alt="Strategy"
              className="rounded-xl shadow-xl"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="text-2xl font-bold text-gray-400 px-6 py-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
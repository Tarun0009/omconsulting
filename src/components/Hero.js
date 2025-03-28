import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
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
        <SwiperSlide className="relative flex items-center bg-gradient-to-br from-blue-900 to-blue-600">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 space-x-8">
            <div className="max-w-2xl text-center lg:text-left space-y-6 z-10">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                Award-Winning Digital Agency
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transform Your 
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                We provide end-to-end digital marketing solutions that help brands grow their online presence,
                reach their target audience, and achieve sustainable business growth. From SEO and content marketing
                to social media advertising and web development, we focus on what matters most: results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Audit
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full hover:border-white/60 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
            <img
              src={hero1}
              alt="Award-winning digital marketing agency"
              className="w-full sm:w-1/2 h-auto object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2: SEO & Content Experts */}
        <SwiperSlide className="relative flex items-center bg-gradient-to-br from-gray-900 to-blue-800">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 space-x-8">
            <div className="max-w-2xl text-center lg:text-left space-y-6 z-10">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                SEO & Content Experts
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Dominate Search 
                <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Engine Rankings
                </span>
              </h1>
              <p className="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                Our SEO experts focus on improving your website's visibility on search engines, driving organic traffic
                and increasing conversions. From on-page optimization to high-quality content creation and link building, 
                we ensure your site ranks for the keywords that matter most.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-200">Client Retention</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400">425%</div>
                  <div className="text-sm text-gray-200">ROI Increase</div>
                </div>
              </div>
              <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                Get SEO Report
              </button>
            </div>
            <img
              src={hero2}
              alt="SEO & Content Experts driving organic traffic"
              className="w-full sm:w-1/2 h-auto object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3: Social Media Masters */}
        <SwiperSlide className="relative flex items-center bg-gradient-to-br from-purple-900 to-pink-700">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 space-x-8">
            <div className="max-w-2xl text-center lg:text-left space-y-6 z-10">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                Social Media Masters
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Viral Social 
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Media Strategies
                </span>
              </h1>
              <p className="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                Social media is the most powerful tool to engage with your audience. We create compelling content, 
                manage your accounts, and run targeted campaigns to boost your brand's visibility, drive traffic, and
                increase customer loyalty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors">
                  Social Audit
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full hover:border-white/60 transition-colors">
                  Content Samples
                </button>
              </div>
            </div>
            <img
              src={hero3}
              alt="Social media engagement and strategies"
              className="w-full sm:w-1/2 h-auto object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4: Web & App Development */}
        <SwiperSlide className="relative flex items-center bg-gradient-to-br from-indigo-900 to-yellow-600">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 space-x-8">
            <div className="max-w-2xl text-center lg:text-left space-y-6 z-10">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                Web & App Development
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Crafting 
                <span className="block bg-gradient-to-r from-yellow-400 to-indigo-400 bg-clip-text text-transparent">
                  Engaging Digital Experiences
                </span>
              </h1>
              <p className="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                Whether you're looking to build a responsive website or a high-performing mobile app, we create digital solutions that captivate and convert. 
                Our team ensures that every project is fully optimized, user-friendly, and built to meet your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
                  Request a Quote
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full hover:border-white/60 transition-colors">
                  Our Portfolio
                </button>
              </div>
            </div>
            <img
              src={hero4}
              alt="Web & App development services"
              className="w-full sm:w-1/2 h-auto object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

        {/* Navigation Buttons */}
        <div className="swiper-button-next !text-white !w-12 !h-12 !rounded-full !bg-white/10 !backdrop-blur-sm hover:!bg-white/20 transition-colors after:!text-lg"></div>
        <div className="swiper-button-prev !text-white !w-12 !h-12 !rounded-full !bg-white/10 !backdrop-blur-sm hover:!bg-white/20 transition-colors after:!text-lg"></div>

        {/* Pagination */}
        <div className="swiper-pagination !absolute !bottom-10 !left-0 !right-0 !z-10"></div>
      </Swiper>
    </div>
  );
};

export default Hero;

import { FaInstagram, FaChartLine, FaHashtag, FaCommentDollar } from 'react-icons/fa';

const SocialMediaMarketing = () => {
  return (
    <section id="social-media-marketing" className="bg-gradient-to-br from-purple-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Social Media <span className="text-purple-400">Mastery</span>
          </h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            Transform your social presence into a powerful growth engine with data-driven strategies
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/social-media-dashboard.jpg" 
              alt="Social media analytics dashboard" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 flex items-end p-6">
              <h3 className="text-white text-xl font-semibold">
                Real-time Performance Tracking
              </h3>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <FaInstagram className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">Platform Expertise</h3>
              <p className="text-purple-100">
                Instagram, Facebook, LinkedIn, TikTok & Twitter optimization
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <FaChartLine className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">ROI Tracking</h3>
              <p className="text-purple-100">
                Conversion-focused campaigns with clear performance metrics
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <FaHashtag className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">Viral Strategies</h3>
              <p className="text-purple-100">
                Trend-driven content that boosts engagement & reach
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <FaCommentDollar className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">Paid Advertising</h3>
              <p className="text-purple-100">
                Targeted social ads that convert at scale
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">4.8x</div>
            <p className="text-purple-200">Average Engagement Boost</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">1.2M+</div>
            <p className="text-purple-200">Monthly Impressions</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">63%</div>
            <p className="text-purple-200">Cost Reduction</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm py-12 px-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Social Media?
          </h3>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">
            Let's create a custom strategy that aligns with your business goals
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-blue-400 text-purple-900 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
            Launch Social Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaMarketing;
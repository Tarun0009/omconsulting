import { FaPenAlt,  FaSearch, FaVideo } from 'react-icons/fa';

const ContentMarketing = () => {
  return (
    <section id="content-marketing" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Content That Converts & Engages
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            At OM Consulting, we craft data-driven content strategies that drive results and build brand authority
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/content-strategy.jpg" 
              alt="Content strategy meeting" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40"></div>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <FaPenAlt className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strategic Content Creation</h3>
                <p className="text-gray-600">
                  Blog posts, articles, and web copy that combines creativity with SEO best practices
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-green-100 p-4 rounded-lg">
                <FaVideo className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multimedia Storytelling</h3>
                <p className="text-gray-600">
                  Engaging videos, infographics, and interactive content that captures attention
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-100 p-4 rounded-lg">
                <FaSearch className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">SEO-Optimized Content</h3>
                <p className="text-gray-600">
                  Content engineered to rank higher and drive organic traffic
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3.5x</div>
              <p className="text-gray-700">Higher Engagement</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-gray-700">Faster Indexing</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1.8M+</div>
              <p className="text-gray-700">Monthly Content Views</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Content?</h3>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Let's create content that drives results and positions your brand as an industry leader
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Start Content Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentMarketing;
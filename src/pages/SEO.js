import seo1 from "../assets/seo/seo1.jpg";
import Seo2 from "../assets/seo/Seo2.jpg";
import seo3 from "../assets/seo/seo3.webp";
import seo4 from "../assets/seo/seo4.jpg";

const SEO = () => {
  return (
    <section id="seo-optimization" className="bg-gray-50 py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Content */}
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Dominate Search Results with
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {" "}Data-Driven SEO
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              We  offers expert solutions to boost your website’s visibility and drive organic traffic. With over 16 years of experience in providing top-notch SEO services in India, our team of skilled professionals is dedicated to delivering results that matter. Our strategies are designed to elevate your online presence, enhance customer engagement, and ultimately increase your revenue.
            </p>
          </div>

          {/* Process */}
          <div className="grid gap-2">
            {[
              { 
                icon: '🔍', 
                title: "Deep Market Analysis",
                content: "1500+ keyword mapping with competitor benchmarking"
              },
              { 
                icon: '⚙️', 
                title: "Technical Optimization",
                content: "Site speed boost • Mobile-first indexing • Schema markup"
              },
              { 
                icon: '📈', 
                title: "Sustainable Growth",
                content: "Content clusters • Authoritative backlinks • Rank tracking"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Visuals */}
        <div className="space-y-6">
          {/* Dashboard Preview */}
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 flex items-end p-8">
              <div className="text-white">
                <div className="text-2xl font-bold mb-2">+425%</div>
                <p className="text-sm">Average Organic Traffic Increase</p>
              </div>
            </div>
          </div>

          {/* Strategy Grid */}
          <div className="grid grid-cols-2 gap-6">
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
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-blue-600 text-sm">{item.stat}</p>
                </div>
              </div>
            ))}
          </div>

{/* CTA Card */}
<div className="bg-gray-100 text-gray-800 p-6 rounded-lg space-y-4 max-w-xs mx-auto shadow-lg">
  <h3 className="text-xl font-semibold">Free SEO Audit</h3>
  <p className="text-gray-600">Discover your website's hidden potential</p>
  <form className="space-y-2">
    <input 
      type="url" 
      placeholder="Enter website URL" 
      className="w-full p-3 rounded-lg bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all">
      Analyze My Site
    </button>
  </form>
</div>


        </div>
      </div>
    </section>
  );
};

export default SEO;
import seo1 from "../assets/seo/seo1.jpg";
import Seo2 from "../assets/seo/Seo2.jpg";
import seo3 from "../assets/seo/seo3.webp";
import seo4 from "../assets/seo/seo4.jpg"
//import seo1 from "../assets/seo/seo1.jpg"


const SEO = () => {
    return (
      <section id="seo-optimization" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
  
          {/* Hero Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-blue-100 px-2">Data-Driven</span> SEO Services for Modern Businesses
              </h1>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Transform your search visibility with our 360° SEO strategies combining technical expertise and content intelligence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <img src="/google-partner-badge.png" alt="Google Partner" className="h-12" />
                  <img src="/semrush-certified.png" alt="SEMrush Certified" className="h-12" />
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={seo1}
                alt="SEO Analytics Dashboard" 
                className="rounded-xl shadow-2xl border-8 border-white"
              />
            </div>
          </div>
  
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {img: Seo2, title: 'Keyword Strategy', 
               content: '1500+ keywords analyzed monthly', stats: '92% accuracy rate'},
              {img: seo3, title: 'Technical Optimization', 
               content: 'Site speed & structure analysis', stats: 'Avg. 40% speed boost'},
              {img: '/content-creation.jpg', title: 'Content Marketing', 
               content: 'SEO-optimized content production', stats: '3x engagement boost'},
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm mb-1">{service.content}</p>
                  <p className="text-blue-300 font-semibold text-sm">{service.stats}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Process Timeline */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-center mb-12">Our 6-Step Success Framework</h2>
            <div className="grid md:grid-cols-6 gap-4 text-center">
              {[
                {icon: '🔍', title: 'Audit'},
                {icon: '🎯', title: 'Strategy'},
                {icon: '⚙️', title: 'Optimize'},
                {icon: '📈', title: 'Implement'},
                {icon: '📊', title: 'Analyze'},
                {icon: '🔄', title: 'Refine'},
              ].map((step, index) => (
                <div key={index} className="space-y-4">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl shadow-sm">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>
  
          {/* Results Showcase */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/traffic-growth.png" alt="Traffic Growth" className="w-16" />
                  <div>
                    <p className="text-2xl font-bold text-green-600">+425%</p>
                    <p className="text-sm text-gray-600">Organic Traffic Growth</p>
                  </div>
                </div>
                <img src="/traffic-graph.png" alt="Traffic Graph" className="w-full rounded-lg" />
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600">1.2M+</p>
                  <p className="text-sm text-gray-600">Keywords Tracked</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600">96%</p>
                  <p className="text-sm text-gray-600">Client Retention</p>
                </div>
              </div>
            </div>
  
            <div className="bg-gray-900 text-white p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-bold">Start Your SEO Transformation</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Website URL" 
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700" 
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700" />
                  <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700" />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Get Free Proposal
                </button>
              </form>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <img src="/secure-badge.png" alt="Secure" className="h-8" />
                <p className="text-sm text-gray-400">We respect your privacy. No spam ever.</p>
              </div>
            </div>
          </div>
  
          {/* FAQ with Images */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <img 
              src= {seo4} 
              alt="SEO Consultation" 
              className="rounded-xl shadow-lg h-full object-cover"
            />
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Common SEO Challenges We Solve</h2>
              {[
                {icon: '🚫', title: 'Low Visibility', 
                 text: 'Break through search competition with targeted strategies'},
                {icon: '📉', title: 'Declining Traffic', 
                 text: 'Identify and fix ranking drops with technical audits'},
                {icon: '💸', title: 'Wasted Budget', 
                 text: 'Optimize spend with ROI-focused campaigns'},
                {icon: '⏳', title: 'Slow Results', 
                 text: 'Accelerate growth with our proven frameworks'},
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default SEO;
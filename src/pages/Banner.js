import banner from "../assets/design/banner.jpg";

const Banner = () => {
  return (
    <section id="banner-designing" className="relative py-16 lg:py-20 bg-gray-50 flex items-center px-6 lg:px-12" aria-labelledby="banner-heading">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-gray-900">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            OM Consultancy Exclusive
          </span>
          <h1 
            id="banner-heading" 
            className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight"
            title="Strategic Banner Designs"
          >
            Transform Clicks into Conversions with <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Strategic Banner Designs
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Our 4-Step Process ensures impactful banners tailored for success.
          </p>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { step: '1', title: 'Audience Analysis', desc: 'Data-driven customer profiling' }, 
              { step: '2', title: 'Conversion Mapping', desc: 'Strategic CTA placement' }, 
              { step: '3', title: 'AI-Powered Design', desc: 'Smart layout optimization' }, 
              { step: '4', title: 'Performance Testing', desc: 'A/B testing included' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-800 w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-md">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* USP & CTA */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-blue-800">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-lg">✓</div>
              <div>
                <h3 className="font-bold text-md">Why Choose OM Consultancy?</h3>
                <p className="text-xs text-gray-600">15+ years of expertise | 5000+ campaigns | 24/7 support</p>
              </div>
            </div>
            <button className="bg-blue-800 text-white px-6 py-3 rounded-full text-md font-bold hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-xl">
              Start Your Banner Project →
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative group">
            <img 
              src={banner} 
              alt="OM Consultancy Banner Portfolio"
              className="rounded-xl shadow-lg border-4 border-white object-cover"
              loading="lazy" 
              width="100%" 
              height="auto"
            />
            <div className="absolute -right-3 -top-3 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full shadow-md text-sm font-medium">
              #1 in Digital Design (2024)
            </div>
            <div className="absolute -left-3 bottom-3 bg-white p-2 rounded-md shadow-md text-center">
              <div className="text-lg font-bold text-blue-800">98%</div>
              <div className="text-xs">Client Satisfaction</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

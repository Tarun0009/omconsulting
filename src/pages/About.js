import React from "react";
import team from "../assets/aboutimg/team.jpg";
import team1 from "../assets/aboutimg/team1.jpg";
//import team2 from "../assets/aboutimg/team2.jpg";
import founder from "../assets/aboutimg/founder.webp";

const About = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Results-Driven Marketing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Brands Through <br className="hidden lg:block"/> Data-Driven Digital Strategies
          </h2>
        </div>

        {/* Stats & Value Proposition */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              At OM Consulting, we don't just create campaigns - we engineer digital growth systems. 
              As certified partners with Google and Meta, our full-funnel approach combines cutting-edge 
              technology with creative storytelling to deliver measurable ROI.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                {number: "300%+", label: "Avg. ROI Increase", color: "bg-amber-100"},
                {number: "1.2M+", label: "Leads Generated", color: "bg-blue-100"},
                {number: "24/7", label: "Campaign Monitoring", color: "bg-green-100"}
              ].map((stat, index) => (
                <div key={index} className={`p-6 rounded-xl ${stat.color}`}>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Certifications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certified Expertise</h3>
            <div className="grid grid-cols-3 gap-4">
              {['Google', 'Meta', 'Microsoft'].map((platform, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <img 
                    src={`/${platform.toLowerCase()}-partner.png`} 
                    alt={`${platform} Certified Partner`}
                    className="h-12 w-12 mb-2"
                  />
                  <span className="text-sm font-medium text-gray-700">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our 360° Marketing Framework
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Discover & Analyze",
                content: "Deep-dive analytics audit & competitor benchmarking",
                icon: "🔍"
              },
              { 
                title: "Strategize & Plan",
                content: "Custom channel mix with KPI mapping",
                icon: "📈"
              },
              { 
                title: "Execute & Optimize",
                content: "Agile campaign management with real-time adjustments",
                icon: "🚀"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Cross-Functional Growth Teams</h3>
              <p className="text-gray-600 text-lg">
                Our squad combines PPC specialists, SEO architects, content strategists, 
                and data scientists working in tandem on your account.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Paid Media', 'SEO', 'CRO', 'Social'].map((expertise, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                    <div className="w-8 h-8 bg-amber-100 rounded-full mr-3"></div>
                    <span className="font-medium">{expertise} Experts</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[team, team1].map((img, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden h-64">
                  <img
                    src={img}
                    alt={`Team member ${index+1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 flex items-end p-4">
                    <span className="text-white font-medium">
                      {['Media Buying Team', 'SEO Department'][index]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <img 
              src={founder} 
              alt="Tarun Pratap Singh" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white"
            />
            <blockquote className="text-2xl italic mb-6">
              "True digital transformation happens when every click, impression, and engagement 
              directly contributes to business objectives."
            </blockquote>
            <div className="font-semibold">
              <p className="text-lg">Tarun Pratap Singh</p>
              <p className="text-amber-400">CEO & Growth Strategist</p>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#linkedin" className="text-amber-400 hover:text-amber-300">15+ Years Experience</a>
              <span className="text-gray-400">|</span>
              <a href="#certifications" className="text-amber-400 hover:text-amber-300">View Certifications</a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-1 rounded-2xl inline-block">
            <div className="bg-white rounded-xl py-12 px-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Get Your Free Marketing Audit
              </h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Receive a comprehensive analysis of your current digital presence 
                with actionable growth recommendations.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="#contact" 
                  className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Claim Free Audit
                </a>
                <a 
                  href="#casestudies" 
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
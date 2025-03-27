import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center">
      {/* Video Background (optional) */}
      {/* <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/your-background-video.mp4" type="video/mp4" />
      </video> */}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl">
        {/* Premium Badge */}
        <div className="mb-6 animate-fade-in-down">
          <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            Award-Winning Digital Agency
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Transform Your <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Digital Growth</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-75">
          Data-driven marketing strategies that deliver <span className="font-semibold text-white">measurable ROI</span> and <span className="font-semibold text-white">sustainable growth</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up delay-150">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
            Start Free Consultation
          </button>
          <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm">
            View Case Studies
          </button>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-white animate-fade-in-up delay-300">
          {[
            { value: "250+", label: "Satisfied Clients", icon: "👥" },
            { value: "1.2M+", label: "Leads Generated", icon: "📈" },
            { value: "98%", label: "Client Retention", icon: "💎" },
            { value: "5x", label: "Average ROI", icon: "🚀" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-6 md:px-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-gray-400 uppercase tracking-wide">Establish <span className="text-white font-bold">2011</span></p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
            We Are <span className="text-green-400">Creative</span> Digital Agency
          </h1>
          <p className="text-gray-300 mt-6">
            We are a creative agency with several services focused on quality and innovations for your business.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap mt-8 gap-6">
            <div>
              <h2 className="text-3xl font-bold">12+</h2>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">83K+</h2>
              <p className="text-gray-400">Completed Projects</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">4.2K+</h2>
              <p className="text-gray-400">Trusted Companies</p>
            </div>
          </div>
        </div>
        
        {/* Right Content - Video Placeholder */}
        <div className="relative">
          <img
            src="/your-video-thumbnail.jpg" // Replace with actual image path
            alt="Video Thumbnail"
            className="rounded-lg shadow-lg w-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      
      {/* Trusted Brands */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex justify-between px-6 md:px-0">
        <img src="/spotify-logo.png" alt="Spotify" className="h-8 opacity-70" />
        <img src="/microsoft-logo.png" alt="Microsoft" className="h-8 opacity-70" />
        <img src="/google-logo.png" alt="Google" className="h-8 opacity-70" />
        <img src="/youtube-logo.png" alt="YouTube" className="h-8 opacity-70" />
        <img src="/discord-logo.png" alt="Discord" className="h-8 opacity-70" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
// Import the images
import team from "../assets/aboutimg/team.jpg";
import team1 from "../assets/aboutimg/team1.jpg";
import team2 from "../assets/aboutimg/team2.jpg";
import founder from "../assets/aboutimg/founder.webp";

const About = () => {
  return (
    <section id="about" className="bg-white-50 py-16 px-4 sm:px-6">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 uppercase tracking-widest text-lg font-semibold mb-4">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Growth Partner in the Digital World
          </h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                OM Consulting is a performance-focused Digital Marketing agency that provides end-to-end marketing solutions. We aim to offer affordable and professional services to our customers. Our forte is to seamlessly balance the art and science of Marketing. We as a company believe in collaborating with our partners to discuss their business goals at each step of planning, integration and measurement. This way strategically plans are created, executed and measured to ensure business success.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Strategic 360° marketing approaches</li>
                <li>Data-driven campaign optimization</li>
                <li>Cross-channel integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 text-xl">0→1M+</h3>
                  <p className="text-sm mt-1">Audience Growth</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 text-xl">72h</h3>
                  <p className="text-sm mt-1">Launch Speed</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-rose-800 text-xl">1:1</h3>
                  <p className="text-sm mt-1">Partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[team, team1, team2].map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src={img} 
                alt={['Team collaboration', 'Strategy meeting', 'Client discussion'][index]}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <p className="text-white font-medium text-lg">
                  {['Creative Teamwork', 'Strategic Planning', 'Client Focus'][index]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Turning Ideas into Digital Success
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine technical expertise with creative storytelling to build memorable brand experiences.
              </p>
            </div>
            
            <div className="bg-amber-100 p-8 rounded-xl space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">
                Why Startups Choose Us
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Lean operational model</li>
                <li>✓ Transparent reporting</li>
                <li>✓ Growth-focused metrics</li>
                <li>✓ Flexible engagement models</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h3>
              <div className="space-y-6">
                {[
                  {title: 'Innovation', content: 'Pushing digital boundaries through emerging technologies'},
                  {title: 'Integrity', content: 'Ethical practices with complete transparency'},
                  {title: 'Impact', content: 'Focus on measurable business outcomes'},
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-amber-500 w-1 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 mt-1">{value.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-xl space-y-4 flex flex-col items-center text-center">
  <img 
    src={founder}
    alt="Tarun Pratap Singh" 
    className="w-24 h-24 rounded-full border-4 border-gray-700"
  />
  <blockquote className="text-xl italic">
    "Digital success starts with aligning technology, creativity, and business goals."
  </blockquote>
  <p className="font-semibold">Tarun Pratap Singh, Founder</p>
</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-900 text-white py-16 px-8 rounded-2xl">
          <h3 className="text-3xl font-bold mb-6">
            Ready for Digital Transformation?
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Let's collaborate to create a custom growth strategy for your business.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-amber-500 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Start Now
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
import { FaPenAlt, FaSearch, FaVideo } from "react-icons/fa";
import content1 from "../assets/content/content1.jpg";
<<<<<<< HEAD
import { Link } from "react-router-dom";


=======
>>>>>>> c437b642507f985f1faf64e6c7387d3d9b43992f

const ContentMarketing = () => {
  return (
    <section id="content-marketing" className="bg-white py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Content That Engages & Converts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            <span className="font-semibold text-blue-600">OM Consultancy</span> crafts **SEO-driven, high-impact content** to boost brand visibility, captivate audiences, and drive measurable growth.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            {[ 
              {
                icon: FaPenAlt,
                title: "Strategic Content Creation",
                description: "Engaging blogs, web content, and social media strategies that enhance brand storytelling.",
                color: "text-blue-600 bg-blue-100",
              },
              {
                icon: FaVideo,
                title: "Visual & Video Marketing",
                description: "Captivating videos, infographics, and multimedia content that maximizes engagement.",
                color: "text-green-600 bg-green-100",
              },
              {
                icon: FaSearch,
                title: "SEO & Performance Content",
                description: "Optimized content that ranks higher, attracts organic traffic, and increases conversions.",
                color: "text-purple-600 bg-purple-100",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`p-4 rounded-lg ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-in-out">
            <img 
              src={content1}
              alt="Content Marketing Strategy" 
              className="w-full h-auto max-w-md mx-auto object-cover object-center rounded-lg transform hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 rounded-lg"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
<<<<<<< HEAD
          <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 md:px-4 md:py-2 text-sm rounded-md font-medium 
                hover:scale-105 transition-transform duration-200 shadow-md block w-fit mx-auto"
                aria-label="Get Started with Web Development Services"
              >
                Get Started
              </Link>
=======
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-all"
          >
            Get a Custom Content Strategy
          </a>
>>>>>>> c437b642507f985f1faf64e6c7387d3d9b43992f
        </div>
      </div>
    </section>
  );
};

export default ContentMarketing;

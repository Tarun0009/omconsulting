import facebook from "../assets/socialmedia/facebook.png";
import insta from "../assets/socialmedia/instagram.jpg";
import linky from "../assets/socialmedia/linkedin.jpg";
import pay from "../assets/socialmedia/pay.webp";

const SocialMediaMarketing = () => {
  return (
    <section
      id="social-media-marketing"
      className="bg-gray-100 py-20 px-6 sm:px-8"
      aria-labelledby="social-media-marketing-heading"
    >
      <div className="text-center mb-12">
        <h2
          id="social-media-marketing-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
        >
          Social Media Marketing Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At OM Consultancy, we help you enhance your brand’s social media presence with results-driven strategies.
          From strategy development to execution, we deliver measurable results to help your business grow online.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Instagram Marketing */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src={insta}
            alt="Instagram Marketing Services"
            className="w-full h-56 object-cover object-center mb-4 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Instagram Marketing</h3>
            <p className="text-gray-600 mb-4">
              Leverage Instagram's visual platform to reach a larger audience and foster meaningful engagement. We help you create eye-catching posts, impactful stories, and influencer partnerships that drive both brand awareness and sales.
            </p>
            <ul className="text-left text-gray-600 list-disc list-inside">
              <li>Strategic content creation and planning</li>
              <li>Hashtag strategy to improve discoverability</li>
              <li>Instagram Ads management and optimization</li>
              <li>Community engagement and influencer collaborations</li>
            </ul>
          </div>
        </div>

        {/* Facebook Ads */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src={facebook}
            alt="Facebook Advertising Services"
            className="w-full h-56 object-cover object-center mb-4 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Facebook Ads</h3>
            <p className="text-gray-600 mb-4">
              Facebook Ads are a powerful tool to reach your target audience with precision. Our team will design, implement, and optimize campaigns to ensure maximum ROI, from lead generation to product promotion.
            </p>
            <ul className="text-left text-gray-600 list-disc list-inside">
              <li>Targeted audience segmentation</li>
              <li>Ad creatives and copywriting</li>
              <li>Budget optimization for the best results</li>
              <li>Comprehensive performance reporting</li>
            </ul>
          </div>
        </div>

        {/* LinkedIn Strategy */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src={linky}
            alt="LinkedIn Marketing Strategy"
            className="w-full h-56 object-cover object-center mb-4 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">LinkedIn Strategy</h3>
            <p className="text-gray-600 mb-4">
              Build your professional network, grow your influence, and connect with decision-makers. Our LinkedIn marketing services include content strategy, sponsored posts, and networking tactics to establish your brand as a thought leader in your industry.
            </p>
            <ul className="text-left text-gray-600 list-disc list-inside">
              <li>Profile optimization and branding</li>
              <li>Content creation and engagement</li>
              <li>LinkedIn Ads and lead generation</li>
              <li>Building relationships with industry professionals</li>
            </ul>
          </div>
        </div>

        {/* Paid Advertising */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src={pay}
            alt="Paid Advertising Services"
            className="w-full h-56 object-cover object-center mb-4 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Paid Advertising</h3>
            <p className="text-gray-600 mb-4">
              Increase your online presence with targeted paid ads across multiple platforms. We specialize in running cost-effective campaigns on Google, Facebook, Instagram, and more to ensure your business reaches the right people.
            </p>
            <ul className="text-left text-gray-600 list-disc list-inside">
              <li>Targeting and retargeting strategies</li>
              <li>Ad copywriting and design</li>
              <li>Budget management and optimization</li>
              <li>Advanced analytics and performance tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
<div className="mt-10 text-center bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 py-8 px-4 rounded-lg shadow-md max-w-md mx-auto">
  <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
    Ready to Boost Your Brand?
  </h3>
  <p className="text-sm sm:text-base mb-4">
    Let’s create a strategy that drives growth and achieves your business goals.
  </p>
  <button className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-all hover:scale-105">
    Get Started
  </button>
</div>

    </section>
  );
};

export default SocialMediaMarketing;

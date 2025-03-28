import reel from "../assets/design/reel.jpg";
import meme from "../assets/design/meme.jpg";
import newspr from "../assets/design/newspr.jpg";
import catalog from "../assets/design/catalog.jpg";
import pamp from "../assets/design/pamp.jpg";

const SocialMediaDesigning = () => {
  const services = [
    {
      title: "Reel Designing",
      description: "Engaging short video content creation optimized for social media platforms.",
      img: reel,
      alt: "Reel Designing - Engaging short video content"
    },
    {
      title: "Meme Creation",
      description: "Trendy & relatable meme designs that boost brand engagement.",
      img: meme,
      alt: "Meme Creation - Trendy and engaging memes"
    },
    {
      title: "Catalog Design",
      description: "Professional product catalogs that enhance your digital storefront.",
      img: catalog,
      alt: "Catalog Design - Professional product display"
    },
    {
      title: "Pamphlet Design",
      description: "Eye-catching digital pamphlets for effective promotions.",
      img: pamp,
      alt: "Pamphlet Design - Attractive promotional material"
    },
    {
      title: "Newspaper Ad Designing",
      description: "Creative & high-impact newspaper ads to maximize brand reach.",
      img: newspr,
      alt: "Newspaper Ad Designing - High-impact ad designs"
    }
  ];

  return (
    <section
      id="social-media-designing"
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      aria-labelledby="social-media-designing-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1
          id="social-media-designing-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight"
          title="Social Media Design Services"
        >
          Social Media <span className="text-blue-600">Designing</span>
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
              aria-labelledby={`service-${index}-title`}
            >
              <div className="h-40 sm:h-48 md:h-52 w-full">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover lazyload"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h2
                  id={`service-${index}-title`}
                  className="text-lg sm:text-xl font-semibold text-gray-800 mb-2"
                >
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-12">
          <p className="text-md sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
            Captivating designs tailored for maximum social media engagement. We create
            scroll-stopping content that turns viewers into customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDesigning;

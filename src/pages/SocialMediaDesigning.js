const SocialMediaDesigning = () => {
    const services = [
      {
        title: "Reel Designing",
        description: "Engaging short video content creation optimized for social media platforms",
        img: "/reel-design.jpg"
      },
      {
        title: "Meme Creation",
        description: "Trendy & relatable meme designs that boost brand engagement",
        img: "/meme-design.jpg"
      },
      {
        title: "Catalog Design",
        description: "Professional product catalogs that enhance your digital storefront",
        img: "/catalog-design.jpg"
      },
      {
        title: "Pamphlet Design",
        description: "Eye-catching digital pamphlets for effective promotions",
        img: "/pamphlet-design.jpg"
      }
    ];
  
    return (
      <section id="social-media-designing" className="min-h-screen bg-white-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Social Media Designing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
                <div className="h-48 relative">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-md">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <p className="text-xl text-white max-w-2xl mx-auto">
              Captivating designs tailored for maximum social media engagement. 
              We create scroll-stopping content that converts viewers to customers.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SocialMediaDesigning;                                                                     
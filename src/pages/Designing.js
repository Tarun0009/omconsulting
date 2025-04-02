import React from "react";
import { Link } from "react-router-dom";

const Designing = () => {
  const clients = [
    { id: 1, name: "Client 1", logo: "/client1.png" },
    { id: 2, name: "Client 2", logo: "/client2.png" },
    { id: 3, name: "Client 3", logo: "/client3.png" },
    { id: 4, name: "Client 4", logo: "/client4.png" },
  ];

  const services = [
    {
      title: "Logo Design",
      path: "/logo-designing",
      description: "Craft unique brand identities that resonate with your audience",
      content: "Our strategic logo design process combines market research with creative excellence to deliver memorable brand marks that stand the test of time."
    },
    {
      title: "Banner Design",
      path: "/banner-designing",
      description: "High-conversion visual assets for digital & print media",
      content: "From web headers to trade show displays, we create attention-grabbing banners that communicate your message effectively across all platforms."
    },
    {
      title: "Social Media Design",
      path: "/social-media-designing",
      description: "Engaging content optimized for social platforms",
      content: "Platform-specific designs that boost engagement and brand recall across Facebook, Instagram, LinkedIn, and Twitter."
    },
  ];

  return (
    <section id="designing-services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Design Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your brand identity with our comprehensive design solutions that combine 
            creativity, strategy, and technical excellence.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Crafting Visual Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With a decade of experience in digital design, we specialize in creating 
              visually stunning and functional designs that drive engagement and conversions. 
              Our team of award-winning designers works closely with clients to understand 
              their unique needs and deliver tailor-made solutions.
            </p>
            <p className="text-gray-600">
              We combine the latest design trends with timeless principles to create assets that:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Enhance brand recognition and recall</li>
              <li>Improve user experience and engagement</li>
              <li>Drive measurable business results</li>
              <li>Work across multiple platforms and devices</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Why Choose Our Design Services?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Industry-leading 48-hour turnaround time</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-gray-700">Unlimited revisions policy</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">100% satisfaction guarantee</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Services Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Design Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of design services tailored to meet modern 
            business needs and drive digital success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-500 text-sm mb-4">{service.content}</p>
              <Link 
                to={service.path}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Trusted By Leading Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client) => (
              <img
                key={client.id}
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 mx-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Design Journey</h2>
          <p className="mb-6 text-blue-100">
            Let's collaborate to create stunning visual solutions for your business
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-blue-50 transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Designing;
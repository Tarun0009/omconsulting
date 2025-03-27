import React from "react";

const Development = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Development Services</h1>
      <p className="mb-8">We provide top-notch development services to help businesses grow. Explore our various development offerings below:</p>

      {/* Web Development Section */}
      <section id="web-development" className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h2>
        <p className="text-gray-600">
          We specialize in building scalable and responsive websites that provide a seamless user experience across all devices.
          Our web development services include front-end and back-end development using modern technologies.
        </p>
      </section>

      {/* App Development Section */}
      <section id="app-development" className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">App Development</h2>
        <p className="text-gray-600">
          Our app development services focus on building high-performance mobile applications for both Android and iOS.
          We use native and cross-platform frameworks to deliver exceptional mobile experiences.
        </p>
      </section>

      {/* E-Commerce Solution Section */}
      <section id="e-commerce-solution" className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">E-Commerce Solutions</h2>
        <p className="text-gray-600">
          We offer comprehensive e-commerce development services to help you build and scale your online store.
          Our solutions include custom-built shopping carts, secure payment systems, and seamless integration with third-party tools.
        </p>
      </section>
    </div>
  );
};

export default Development;

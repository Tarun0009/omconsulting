import React from "react";

const Designing = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Designing Services</h1>
      <p className="mb-8">
        We craft stunning UI/UX designs to enhance user experience and ensure that your brand stands out with creative solutions. Explore our various designing offerings below:
      </p>

      {/* Logo Design Section */}
      <section id="logo-designing" className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h2>
        <p className="text-gray-600">
          Our UI/UX design services focus on creating user-centered designs that are intuitive, visually appealing, and easy to navigate. 
          We conduct user research and testing to ensure that your users have a seamless experience.
        </p>
      </section>

      {/*Banner Section */}
      <section id="banner-designing" className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Design</h2>
        <p className="text-gray-600">
          We offer comprehensive web design services, from wireframes to fully responsive websites. Our designs ensure great user experiences across all screen sizes, whether desktop or mobile.
        </p>
      </section>

      {/* Social Media Section */}
      <section id="social-media-designing" className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Logo & Branding</h2>
        <p className="text-gray-600">
          We help you create a distinctive and memorable brand identity with custom logo designs and branding guidelines that capture the essence of your business and connect with your audience.
        </p>
      </section>

    </div>
  );
};

export default Designing;

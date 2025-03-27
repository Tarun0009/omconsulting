import React from "react";
import Logo from "./pages/Logo";
import Banner from "./pages/Banner";
import SocialMediaDesigning from "./pages/SocialMediaDesigning";

const Designing = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Designing Services</h1>
      <p className="mb-8">
        We craft stunning UI/UX designs to enhance user experience and ensure that your brand stands out with creative solutions. Explore our various designing offerings below:
      </p>

      {/* Logo Design Section */}
      <Logo/>

      {/*Banner Section */}
      <Banner/>

      {/* Social Media Section */}
      <SocialMediaDesigning/>

    </div>
  );
};

export default Designing;

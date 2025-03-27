import React from "react";
import  WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import ECommerceSolutions from "./ECommerceSolutions";
const Development = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Development Services</h1>
      <p className="mb-8">We provide top-notch development services to help businesses grow. Explore our various development offerings below:</p>

      {/* Web Development Section */}
      <WebDev/>
     

      {/* App Development Section */}
      <AppDev/>

      {/* E-Commerce Solution Section */}
      <ECommerceSolutions/>
    </div>
  );
};

export default Development;

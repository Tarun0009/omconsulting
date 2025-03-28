import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from './components/TopBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactSection from "./pages/Contact"; 
import About from "./pages/About";
import SEO from "./pages/SEO";
import ContentMarketing from "./pages/ContentMarketing";
import EmailMarketing from "./pages/EmailMarketing";
import  PaidAdvertising from "./pages/PaidAdvertising";
import WhatsappMarketing from "./pages/WhatsappMarketing";
import SMSMarketing from "./pages/SMSMarketing";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import Blog from "./pages/Blog";
import  WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import ECommerceSolutions from "./pages/ECommerceSolutions";
import Logo from "./pages/Logo";
import Banner from "./pages/Banner";
import SocialMediaDesigning from "./pages/SocialMediaDesigning";
const App = () => {
  return (
    <div>
      <Navbar />

      <TopBar />

      {/* Home Section */}
      <Hero/>

      {/* About Section */}
      <About/>
      {/* Digital Marketing Services Section */}
      
      {/* SEO Optimization */}
      <SEO/>

      {/* Social Media Marketing */}
      <SocialMediaMarketing/>
    
      {/* Content Marketing */}
      <ContentMarketing/>
      {/* Paid Advertisement */}
      <PaidAdvertising/>

      {/* Email Marketing */}
      <EmailMarketing/>

      {/* WhatsApp Marketing */}
      <WhatsappMarketing/>
      
      {/* SMS Marketing */}
      <SMSMarketing/>

      {/* Development Section */}
      {/* Web Development */}
      <WebDev/>
       
      {/* App Development */}
      <AppDev/>

      {/* E-Commerce Solutions */}
      <ECommerceSolutions/>

      {/* Designing Section */}
    
      {/* Logo Designing */}
      <Logo/>
      {/* Banner Designing */}
      <Banner/>
      {/* Social Media Designing */}
      <SocialMediaDesigning/>
      
      {/* Blog Section */}
      <Blog/>
      {/* Contact Section */}
      <ContactSection /> 

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;

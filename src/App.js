import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from './components/TopBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactSection from "./pages/Contact"; 
import About from "./pages/About";
import SEO from "./pages/SEO";


const App = () => {
  return (
    <div>
      <Navbar />

      <TopBar />

      {/* Home Section */}
      <section id="home" className="h-screen bg-blue-500 flex items-center justify-center text-white text-4xl">
        Home Section
      </section>

      {/* About Section */}
      <About/>
      {/* Digital Marketing Services Section */}
      <section id="digitalmarketingservices" className="h-screen bg-purple-500 flex items-center justify-center text-white text-4xl">
        Digital Marketing Services
      </section>

      {/* SEO Optimization */}
      <SEO/>

      {/* Social Media Marketing */}
      <section id="social-media-marketing" className="h-screen bg-gray-700 flex items-center justify-center text-white text-4xl">
        Social Media Marketing
      </section>

      {/* Content Marketing */}
      <section id="content-marketing" className="h-screen bg-gray-600 flex items-center justify-center text-white text-4xl">
        Content Marketing
      </section>

      {/* Paid Advertisement */}
      <section id="paid-advertising" className="h-screen bg-gray-500 flex items-center justify-center text-white text-4xl">
        Paid Advertisement
      </section>

      {/* Email Marketing */}
      <section id="email-marketing" className="h-screen bg-gray-400 flex items-center justify-center text-white text-4xl">
        Email Marketing
      </section>

      {/* WhatsApp Marketing */}
      <section id="whatsapp-marketing" className="h-screen bg-gray-300 flex items-center justify-center text-black text-4xl">
        WhatsApp Marketing
      </section>

      {/* SMS Marketing */}
      <section id="sms-marketing" className="h-screen bg-gray-200 flex items-center justify-center text-black text-4xl">
        SMS Marketing
      </section>

      {/* Development Section */}
      <section id="development" className="h-screen bg-red-500 flex items-center justify-center text-white text-4xl">
        Development Section
      </section>

      {/* Web Development */}
      <section id="web-development" className="h-screen bg-red-400 flex items-center justify-center text-white text-4xl">
        Web Development
      </section>

      {/* App Development */}
      <section id="app-development" className="h-screen bg-red-300 flex items-center justify-center text-white text-4xl">
        App Development
      </section>

      {/* E-Commerce Solutions */}
      <section id="e-commerce-solution" className="h-screen bg-red-200 flex items-center justify-center text-white text-4xl">
        E-Commerce Solutions
      </section>

      {/* Designing Section */}
      <section id="designing" className="h-screen bg-yellow-500 flex items-center justify-center text-white text-4xl">
        Designing Section
      </section>

      {/* Logo Designing */}
      <section id="logo-designing" className="h-screen bg-yellow-400 flex items-center justify-center text-white text-4xl">
        Logo Designing
      </section>

      {/* Banner Designing */}
      <section id="banner-designing" className="h-screen bg-yellow-300 flex items-center justify-center text-white text-4xl">
        Banner Designing
      </section>

      {/* Social Media Designing */}
      <section id="social-media-designing" className="h-screen bg-yellow-200 flex items-center justify-center text-black text-4xl">
        Social Media Designing
      </section>

      {/* Blog Section */}
      <section id="blog" className="h-screen bg-indigo-500 flex items-center justify-center text-white text-4xl">
        Blog Section
      </section>

      {/* Contact Section */}
      <ContactSection /> 

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;

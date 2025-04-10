import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SinglePost from "./pages/SinglePost";

// Lazy Loaded Pages
const About = lazy(() => import("./pages/About"));
const DigitalMarketingServices = lazy(() => import("./pages/DigitalMarketingServices"));
const Development = lazy(() => import("./pages/Development"));
const Designing = lazy(() => import("./pages/Designing"));
const SEO = lazy(() => import("./pages/SEO"));
const SocialMediaMarketing = lazy(() => import("./pages/SocialMediaMarketing"));
const ContentMarketing = lazy(() => import("./pages/ContentMarketing"));
const PaidAdvertising = lazy(() => import("./pages/PaidAdvertising"));
const EmailMarketing = lazy(() => import("./pages/EmailMarketing"));
const WhatsappMarketing = lazy(() => import("./pages/WhatsappMarketing"));
const SMSMarketing = lazy(() => import("./pages/SMSMarketing"));
const WebDev = lazy(() => import("./pages/WebDev"));
const AppDev = lazy(() => import("./pages/AppDev"));
const ECommerceSolutions = lazy(() => import("./pages/ECommerceSolutions"));
const Logo = lazy(() => import("./pages/Logo"));
const Banner = lazy(() => import("./pages/Banner"));
const SocialMediaDesigning = lazy(() => import("./pages/SocialMediaDesigning"));
const Blog = lazy(() => import("./pages/Blog"));
const ContactSection = lazy(() => import("./pages/Contact"));

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TopBar />
      {/* Show Hero only on Home Page */}
      {location.pathname === "/" && <Hero />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/digital-marketing" element={<DigitalMarketingServices />} />
          <Route path="/development" element={<Development />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/seo-optimization" element={<SEO />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/paid-advertising" element={<PaidAdvertising />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/whatsapp-marketing" element={<WhatsappMarketing />} />
          <Route path="/sms-marketing" element={<SMSMarketing />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/app-development" element={<AppDev />} />
          <Route path="/e-commerce-solutions" element={<ECommerceSolutions />} />
          <Route path="/logo-designing" element={<Logo />} />
          <Route path="/banner-designing" element={<Banner />} />
          <Route path="/social-media-designing" element={<SocialMediaDesigning />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />}/>
          <Route path="/contact" element={<ContactSection />} />
          {/* Redirect to home if unknown route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;

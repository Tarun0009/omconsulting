import SEO from './pages/SEO'; // import the SeoSection component
import ContentMarketing from "./pages/ContentMarketing";
import EmailMarketing from "./pages/EmailMarketing";
import  PaidAdvertising from "./pages/PaidAdvertising";
import WhatsappMarketing from "./pages/WhatsappMarketing";
import SMSMarketing from "./pages/SMSMarketing";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";


const DigitalMarketingSection = () => {
  return (
    <section id="digital-marketing" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Digital Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SEO Section */}
          <SEO />

          {/* Social Media Marketing Section */}
          <SocialMediaMarketing/>

          {/* Content Marketing Section */}
          <ContentMarketing/>

          {/* Paid Advertising Section */}
          <PaidAdvertising/>

          {/* Email Marketing Section */}
          <EmailMarketing/> 

          {/* WhatsApp Marketing Section */}
          <WhatsappMarketing/>

          {/* SMS Marketing Section */}
          <SMSMarketing/>

        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import PromotionsSection from "@/components/PromotionsSection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BrandsSection id="brands" />
      <PromotionsSection id="promotions" />
      <LocationsSection id="locations" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
};

export default Index;

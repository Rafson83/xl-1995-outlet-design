import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-outlet.jpg";

const HeroSection = () => {
  const scrollToLocations = () => {
    document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="XL 1995 Outlet Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 tracking-tight">
          Kultowe Jeansy.<br />
          <span className="text-accent">Outletowe Okazje.</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Lee • Wrangler • Volcano
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToLocations}
          className="text-lg px-12 py-6 animate-glow"
        >
          SPRAWDŹ ADRESY
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

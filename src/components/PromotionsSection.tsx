import { Button } from "@/components/ui/button";
import { Tag, TrendingDown, Percent } from "lucide-react";

const PromotionsSection = ({ id }: { id?: string }) => {
  const promotions = [
    {
      icon: Percent,
      title: "T-Shirty",
      discount: "-20%",
      description: "Na wszystkie t-shirty",
    },
    {
      icon: TrendingDown,
      title: "Jeansy",
      discount: "od 129 zł",
      description: "Kultowe modele w najlepszej cenie",
    },
    {
      icon: Tag,
      title: "Kurtki",
      discount: "do -40%",
      description: "Wybrane modele sezonowe",
    },
  ];

  const scrollToLocations = () => {
    document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className="py-24 bg-promo scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-promo-foreground mb-6">
            Najlepsze Okazje Czekają!<br />
            <span className="text-primary-foreground/90">Nie Przegap!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <div
                key={promo.title}
                className="bg-promo-foreground/10 backdrop-blur-sm p-8 rounded-lg border-2 border-promo-foreground/20 hover:border-promo-foreground/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-promo-foreground mb-4" />
                <h3 className="text-2xl font-bold text-promo-foreground mb-2">
                  {promo.title}
                </h3>
                <div className="text-4xl font-black text-promo-foreground mb-2">
                  {promo.discount}
                </div>
                <p className="text-promo-foreground/80">{promo.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToLocations}
            className="text-lg px-12 py-6"
          >
            SPRAWDŹ LOKALIZACJĘ I GODZINY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;

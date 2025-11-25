import { Button } from "@/components/ui/button";
import { MapPin, Clock, Navigation } from "lucide-react";

const LocationsSection = ({ id }: { id?: string }) => {
  const locations = [
    {
      name: "XL 1995 - Warszawa Centrum",
      address: "ul. Marszałkowska 123",
      city: "00-001 Warszawa",
      hours: "Pn-Pt: 10:00 - 20:00 | Sb-Nd: 10:00 - 18:00",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Marszałkowska+123+Warszawa",
    },
    {
      name: "XL 1995 - Kraków Podgórze",
      address: "ul. Wielicka 259",
      city: "30-663 Kraków",
      hours: "Pn-Pt: 10:00 - 20:00 | Sb-Nd: 10:00 - 18:00",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Wielicka+259+Kraków",
    },
  ];

  return (
    <section id={id} className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Odwiedź Nasze Outlety
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zapraszamy do naszych sklepów stacjonarnych. Doświadczony personel pomoże Ci znaleźć idealny outfit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Map Placeholder */}
              <div className="h-48 bg-muted relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {location.name}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="text-muted-foreground">
                      <div>{location.address}</div>
                      <div>{location.city}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="text-muted-foreground">{location.hours}</div>
                  </div>
                </div>

                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => window.open(location.mapUrl, "_blank")}
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  WYZNACZ TRASĘ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

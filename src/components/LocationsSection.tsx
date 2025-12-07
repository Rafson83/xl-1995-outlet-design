import { Button } from "@/components/ui/button";
import { MapPin, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const LocationsSection = ({ id }: { id?: string }) => {
  const locations = [
    {
      name: "XL 1995 - Łódź",
      address: "Al Jana Pawła II 30",
      city: "93-535 Łódź",
      hours: "Pn-Pt: 10:00 - 20:00 | Sb-Nd: 10:00 - 18:00",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Marszałkowska+123+Warszawa",
    },
    {
      name: "XL 1995 - Pabianice",
      address: "ul. Zamkowa 30",
      city: "95-200 Pabianice",
      hours: "Pn-Pt: 10:00 - 20:00 | Sb-Nd: 10:00 - 18:00",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Wielicka+259+Kraków",
    },
  ];

  return (
    <section id={id} className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Odwiedź Nasze Outlety
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zapraszamy do naszych sklepów stacjonarnych. Doświadczony personel pomoże Ci znaleźć idealny outfit.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {locations.map((location) => (
            <motion.div
              key={location.name}
              className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;

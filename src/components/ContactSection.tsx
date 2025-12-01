import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = ({ id }: { id?: string }) => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Dziękujemy za zapis do newslettera!");
      setEmail("");
    }
  };

  return (
    <section id={id} className="py-24 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
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
          {/* Newsletter */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-secondary-foreground mb-6">
              Bądź na Bieżąco!
            </h2>
            <p className="text-muted-foreground mb-8">
              Zapisz się do newslettera i dowiaduj się pierwszy o nowych promocjach i dostępnych produktach.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Twój adres e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button variant="hero" type="submit">
                ZAPISZ SIĘ
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-secondary-foreground mb-6">
              Kontakt
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div className="font-semibold text-secondary-foreground">Centrala XL 1995</div>
                  <div>ul. Biznesowa 45</div>
                  <div>01-234 Warszawa</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+48123456789" className="text-muted-foreground hover:text-accent transition-colors">
                  +48 123 456 789
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:kontakt@xl1995.pl" className="text-muted-foreground hover:text-accent transition-colors">
                  kontakt@xl1995.pl
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border-2 border-border rounded-lg flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border-2 border-border rounded-lg flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";

const BrandsSection = ({ id }: { id?: string }) => {
  const brands = [
    { name: "Lee", logo: "LEE" },
    { name: "Wrangler", logo: "WRANGLER" },
    { name: "Volcano", logo: "VOLCANO" },
    { name: "Inne", logo: "+" },
  ];

  return (
    <section id={id} className="py-24 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-foreground mb-6">
            Kultowe Marki, Niezmienna Jakość
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oryginalne produkty renomowanych marek. Gwarancja najwyższej jakości w outletowych cenach.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              className="flex items-center justify-center p-8 bg-card rounded-lg border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <span className="text-3xl md:text-4xl font-black text-foreground tracking-wider">
                {brand.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;

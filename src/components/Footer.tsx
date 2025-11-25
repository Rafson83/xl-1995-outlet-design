const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Copyright */}
          <div>
            <h3 className="text-2xl font-black mb-4">XL 1995</h3>
            <p className="text-primary-foreground/70 text-sm">
              © 2024 XL 1995 Outlet<br />
              Wszystkie prawa zastrzeżone.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Strona Główna
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("locations")}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Lokalizacje
                </button>
              </li>
              <li>
                <a
                  href="mailto:kontakt@xl1995.pl"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Informacje Prawne</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/polityka-prywatnosci" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Polityka Prywatności
                </a>
              </li>
              <li>
                <a href="/regulamin" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="/rodo" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  RODO
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          Wykonane z pasją do mody i dobrych cen.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

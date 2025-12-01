import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import xlLogo from "@/assets/XL-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Marki", id: "brands" },
    { label: "Promocje", id: "promotions" },
    { label: "Lokalizacje", id: "locations" },
    { label: "Kontakt", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={xlLogo} 
              alt="XL 1995 Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Sheet Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-3">
              <img 
                src={xlLogo} 
                alt="XL 1995 Logo" 
                className="h-12 w-auto"
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-medium text-foreground hover:text-accent transition-colors py-3 border-b border-border/50"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: "#details", label: t.nav.details },
    { href: "#dress-code", label: t.nav.dressCode },
    { href: "#location", label: t.nav.location },
    { href: "#rsvp", label: t.nav.rsvp },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-cream/90 backdrop-blur-sm shadow-soft border border-rosa/30 transition-all hover:shadow-elevated hover:bg-rosa/10"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-charcoal" />
        ) : (
          <Menu className="w-6 h-6 text-charcoal" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <nav
        className={`fixed top-0 left-0 h-full w-72 bg-cream/95 backdrop-blur-md shadow-elevated z-40 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20 px-6">
          <p className="font-display text-2xl text-rosa mb-8">Pau & Jakob</p>
          
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left py-3 px-4 font-body text-lg text-charcoal hover:bg-rosa-muted rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

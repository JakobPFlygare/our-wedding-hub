import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { href: "#details", label: t.nav.details },
    { href: "#location", label: t.nav.location },
    { href: "#news", label: t.nav.news, badge: true },
    { href: "/gifts", label: t.nav.gifts },
  ];

  const go = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (pathname !== "/") {
      navigate(`/${href}`);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-ivory/90 backdrop-blur-sm border-b border-sage-light/60">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="font-display text-xl text-charcoal" onClick={() => setIsOpen(false)}>
          Pau <span className="italic text-sage">&amp;</span> Jakob
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="font-sans text-[11px] uppercase tracking-[0.16em] text-charcoal/80 hover:text-charcoal transition-colors"
            >
              {item.label}
              {item.badge && <span className="ml-1.5 inline-block align-middle w-1.5 h-1.5 rounded-full bg-blush" aria-hidden />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle inline />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-sage-light/60 bg-ivory">
          <ul className="max-w-5xl mx-auto px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => go(item.href)}
                  className="w-full text-left py-3 font-sans text-xs uppercase tracking-[0.16em] text-charcoal"
                >
                  {item.label}
                  {item.badge && <span className="ml-1.5 inline-block align-middle w-1.5 h-1.5 rounded-full bg-blush" aria-hidden />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navigation;

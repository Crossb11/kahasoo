import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import logoAsset from "@/assets/kahasoo-logo.asset.json";

const scrollLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Boutique", href: "#boutique" },
  { label: "Sur Mesure", href: "#devis" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isHome && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [isHome, location.hash]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoAsset.url}
            alt="KAHASOO"
            className="h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
          />
          <span className="font-display text-xl md:text-2xl font-bold tracking-wider text-lilac-gradient">
            KAHASOO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {scrollLinks.map((link) =>
            isHome ? (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-body font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-sm font-body font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/a-propos"
            className="text-sm font-body font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors"
          >
            À Propos
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <CartDrawer />
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {scrollLinks.map((link) =>
              isHome ? (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-body font-medium py-2 text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-left text-sm font-body font-medium py-2 text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/a-propos"
              onClick={() => setIsOpen(false)}
              className="text-left text-sm font-body font-medium py-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              À Propos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

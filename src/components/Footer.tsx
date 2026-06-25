import { Instagram, Mail } from "lucide-react";
import logoAsset from "@/assets/kahasoo-logo.asset.json";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.2 8.2 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.13z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-foreground text-primary-foreground py-16">
      <div className="absolute top-0 left-0 right-0 gold-divider" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoAsset.url} alt="KAHASOO" className="h-14 w-14 object-contain animate-float" />
              <h3 className="font-display text-2xl font-bold text-gold-gradient">KAHASOO</h3>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Cosplay haut de gamme, fabriqué en France.
              <br />
              Par Kahasoo, pour les passionnés.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <a
              href="mailto:kahasoocosplay@gmail.com"
              className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm mb-3"
            >
              <Mail className="h-4 w-4" />
              kahasoocosplay@gmail.com
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kahasoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@kahasoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://x.com/_kahasoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="X"
              >
                <XIcon />
              </a>
            </div>
            <div className="mt-4 text-primary-foreground/40 text-xs space-y-1">
              <p>Instagram: 2 500 abonnés</p>
              <p>TikTok: 6 000 abonnés</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center relative">
          <div className="gold-divider absolute top-0 left-1/2 -translate-x-1/2 w-64" />
          <p className="text-primary-foreground/40 text-xs tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} <span className="text-gold">Kahasoo</span> · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

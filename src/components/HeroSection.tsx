import { motion } from "framer-motion";
import heroBg from "@/assets/hero-cosplay.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="KAHASOO Cosplay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Cosplay Haut de Gamme • 100% Français
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl font-bold text-primary-foreground tracking-wider mb-6"
        >
          KAHASOO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Des costumes de cosplay sur mesure, fabriqués avec passion en France.
          Un rapport qualité-prix imbattable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector("#boutique")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-secondary text-secondary-foreground font-body font-semibold tracking-wide rounded-md hover:bg-secondary/90 transition-colors"
          >
            Découvrir la Boutique
          </button>
          <button
            onClick={() => document.querySelector("#devis")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-medium tracking-wide rounded-md hover:bg-primary-foreground/10 transition-colors"
          >
            Demander un Devis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

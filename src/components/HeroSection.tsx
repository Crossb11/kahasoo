import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import logoAsset from "@/assets/kahasoo-logo.asset.json";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lilac-gradient"
    >
      {/* Decorative animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-secondary/60 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(320_70%_90%)]/60 blur-3xl animate-float" />
        <div className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-white/40 blur-2xl animate-float-slow" />
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
          >
            <Sparkles className="w-3 h-3 text-[hsl(280_60%_60%)]" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(280_70%_85%)] to-[hsl(320_70%_85%)] blur-2xl animate-glow" />
            <img
              src={logoAsset.url}
              alt="Logo KAHASOO"
              className="relative w-40 h-40 md:w-52 md:h-52 object-contain animate-float drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-xs md:text-sm tracking-[0.4em] uppercase mb-4 text-foreground/70"
        >
          ✦ Cosplay Haut de Gamme • 100% Français ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl font-bold tracking-wider mb-6 text-lilac-gradient"
        >
          KAHASOO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Des costumes sur mesure, façonnés avec passion en France.
          <br />
          <span className="text-foreground/60 italic">Chaque passion mérite de prendre vie.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector("#boutique")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-3.5 bg-foreground text-primary-foreground font-body font-semibold tracking-wide rounded-full overflow-hidden transition-all hover:scale-105 shadow-lilac"
          >
            <span className="relative z-10">Découvrir la Boutique</span>
          </button>
          <button
            onClick={() => document.querySelector("#devis")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border-2 border-foreground/30 text-foreground font-body font-medium tracking-wide rounded-full hover:bg-foreground hover:text-primary-foreground transition-all hover:scale-105"
          >
            Demander un Devis
          </button>
        </motion.div>
      </div>

      {/* Marquee bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground text-primary-foreground py-3 overflow-hidden border-t border-foreground/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6 font-body text-sm tracking-[0.3em] uppercase shrink-0">
              <span>✦ Sur Mesure</span>
              <span>✦ 100% Français</span>
              <span>✦ Qualité Haut de Gamme</span>
              <span>✦ Livraison France & International</span>
              <span>✦ Paiement Sécurisé PayPal</span>
              <span>✦ Par Asya</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

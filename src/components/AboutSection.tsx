import { motion } from "framer-motion";
import { Sparkles, Flag, Scale } from "lucide-react";

export const AboutSection = () => {
  const strengths = [
    { icon: Sparkles, title: "Qualité Haut de Gamme", desc: "Chaque costume est confectionné avec des matériaux premium pour un rendu exceptionnel." },
    { icon: Flag, title: "100% Fabriqué en France", desc: "De la conception à la finition, tout est réalisé en France avec savoir-faire artisanal." },
    { icon: Scale, title: "Rapport Qualité-Prix", desc: "Des costumes de qualité professionnelle à des prix accessibles — jusqu'à 50% moins cher que la concurrence." },
  ];

  return (
    <section id="apropos" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">À Propos d'Asya</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Passionnée de cosplay et créatrice derrière KAHASOO, Asya conçoit des costumes sur mesure
            qui allient qualité, authenticité et prix juste. Influenceuse iA et cosplayeuse de A à Z,
            elle met son expertise au service de votre transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-lg bg-card border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

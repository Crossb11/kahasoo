import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const ReviewsSection = () => {
  return (
    <section id="avis" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Avis Clients</h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Ce que nos clients pensent de nos créations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border rounded-lg p-6 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-muted-foreground/30" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">Pas encore d'avis</p>
              <div className="w-10 h-10 rounded-full bg-muted mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

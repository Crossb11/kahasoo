import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Ruler, Send } from "lucide-react";

export const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    character: "",
    bust: "",
    waist: "",
    hips: "",
    height: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis cosplay - ${formData.character}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nPersonnage: ${formData.character}\n\nMensurations:\n- Tour de poitrine: ${formData.bust} cm\n- Tour de taille: ${formData.waist} cm\n- Tour de hanches: ${formData.hips} cm\n- Taille: ${formData.height} cm\n\nDétails:\n${formData.details}`
    );
    window.open(`mailto:kahasoocosplay@gmail.com?subject=${subject}&body=${body}`, "_blank");
    toast.success("Redirection vers votre messagerie...");
  };

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="devis" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Ruler className="h-10 w-10 mx-auto mb-4 text-lilac-deep" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Devis Sur Mesure</h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Envoyez-nous vos mensurations et le personnage souhaité pour recevoir un devis personnalisé.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Votre nom" value={formData.name} onChange={(e) => update("name", e.target.value)} required />
            <Input type="email" placeholder="Votre email" value={formData.email} onChange={(e) => update("email", e.target.value)} required />
          </div>

          <Input placeholder="Personnage / Référence" value={formData.character} onChange={(e) => update("character", e.target.value)} required />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Input placeholder="Poitrine (cm)" value={formData.bust} onChange={(e) => update("bust", e.target.value)} />
            <Input placeholder="Taille (cm)" value={formData.waist} onChange={(e) => update("waist", e.target.value)} />
            <Input placeholder="Hanches (cm)" value={formData.hips} onChange={(e) => update("hips", e.target.value)} />
            <Input placeholder="Taille (cm)" value={formData.height} onChange={(e) => update("height", e.target.value)} />
          </div>

          <Textarea
            placeholder="Décrivez votre projet en détail (matériaux souhaités, accessoires, références visuelles...)"
            value={formData.details}
            onChange={(e) => update("details", e.target.value)}
            rows={5}
          />

          <Button type="submit" size="lg" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Envoyer la demande de devis
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

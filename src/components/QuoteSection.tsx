import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Ruler, Send } from "lucide-react";
import faceAsset from "@/assets/mensurations-face.asset.json";
import dosAsset from "@/assets/mensurations-dos.asset.json";
import hauteursAsset from "@/assets/mensurations-hauteurs.asset.json";

const measurements: { key: string; label: string }[] = [
  { key: "A", label: "D'une oreille à l'autre en passant par-dessus la tête" },
  { key: "B", label: "Tour de tête" },
  { key: "C", label: "Tour de cou" },
  { key: "D", label: "Tour de poitrine" },
  { key: "E", label: "Tour sous poitrine" },
  { key: "F", label: "Tour de taille" },
  { key: "G", label: "Tour de hanches (au plus large)" },
  { key: "H", label: "Tour de fesses (au plus large)" },
  { key: "I", label: "Tour de cuisses" },
  { key: "J", label: "Tour de genoux" },
  { key: "K", label: "Tour de chevilles" },
  { key: "L", label: "Longueur sur épaule (base du cou à la pointe de l'épaule)" },
  { key: "M", label: "Tour de l'emmanchure (pointe de l'épaule à l'aisselle)" },
  { key: "N", label: "Tour de biceps" },
  { key: "O", label: "Tour d'avant-bras" },
  { key: "P", label: "Tour de poignets" },
  { key: "Q", label: "Hauteur du cou" },
  { key: "R", label: "Hauteur du creux de la gorge au-dessus de la poitrine" },
  { key: "S", label: "Hauteur du creux de la gorge à la taille (nombril)" },
  { key: "T", label: "Hauteur de la taille (nombril) à l'entre-jambe" },
  { key: "U", label: "Hauteur de la taille au genou" },
  { key: "V", label: "Hauteur du genou à la cheville" },
  { key: "W", label: "Hauteur de l'épaule au coude" },
  { key: "X", label: "Hauteur du coude au poignet" },
  { key: "1", label: "Largeur du dos, d'une pointe d'épaule à l'autre" },
  { key: "2", label: "Largeur dos d'une aisselle à l'autre" },
  { key: "3", label: "Hauteur du bas de la nuque à la taille" },
  { key: "4", label: "Hauteur de la taille à l'entre-jambe (dos)" },
];

export const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    character: "",
    details: "",
  });
  const [mens, setMens] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensLines = measurements
      .map((m) => `${m.key} - ${m.label}: ${mens[m.key] || "-"} cm`)
      .join("\n");
    const subject = encodeURIComponent(`Demande de devis cosplay - ${formData.character}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nPersonnage: ${formData.character}\n\nMensurations (cm):\n${mensLines}\n\nDétails:\n${formData.details}`
    );
    window.open(`mailto:kahasoocosplay@gmail.com?subject=${subject}&body=${body}`, "_blank");
    toast.success("Redirection vers votre messagerie...");
  };

  const update = (field: keyof typeof formData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const updateMens = (key: string, value: string) =>
    setMens((prev) => ({ ...prev, [key]: value }));

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
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Chaque cosplay KAHASOO est fabriqué entièrement sur mesure en France. Pour obtenir un
            devis précis, merci de relever vos mensurations à l'aide du guide ci-dessous.
          </p>
        </motion.div>

        {/* Guide de prise de mesures */}
        <div className="max-w-5xl mx-auto mb-16 bg-background rounded-2xl p-6 md:p-10 border border-border shadow-sm">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-center">
            Guide de prise de mesures
          </h3>
          <p className="text-muted-foreground font-body text-sm md:text-base text-center max-w-2xl mx-auto mb-8">
            Munissez-vous d'un mètre ruban souple, tenez-vous droite en sous-vêtements et faites-vous
            aider si possible. Toutes les mesures doivent être prises en centimètres, sans serrer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <figure className="text-center">
              <img
                src={faceAsset.url}
                alt="Schéma de prise de mensurations de face (tours)"
                className="w-full h-auto rounded-lg bg-white object-contain"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground font-body">
                Vue de face — tours (A à K, L à P)
              </figcaption>
            </figure>
            <figure className="text-center">
              <img
                src={dosAsset.url}
                alt="Schéma de prise de mensurations de dos"
                className="w-full h-auto rounded-lg bg-white object-contain"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground font-body">
                Vue de dos — largeurs &amp; hauteurs (1 à 4)
              </figcaption>
            </figure>
            <figure className="text-center">
              <img
                src={hauteursAsset.url}
                alt="Schéma des hauteurs de prise de mensurations"
                className="w-full h-auto rounded-lg bg-white object-contain"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground font-body">
                Hauteurs (Q à X)
              </figcaption>
            </figure>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Votre nom" value={formData.name} onChange={(e) => update("name", e.target.value)} required />
            <Input type="email" placeholder="Votre email" value={formData.email} onChange={(e) => update("email", e.target.value)} required />
          </div>

          <Input
            placeholder="Personnage / Référence"
            value={formData.character}
            onChange={(e) => update("character", e.target.value)}
            required
          />

          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
              Tableau des mensurations
            </h3>
            <p className="text-xs text-muted-foreground font-body mb-6">
              Reportez chaque mesure en centimètres en suivant le repère (lettre ou chiffre) du guide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {measurements.map((m) => (
                <label key={m.key} className="flex items-start gap-2 text-sm font-body">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-lilac text-foreground font-semibold">
                    {m.key}
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-muted-foreground leading-tight mb-1">
                      {m.label}
                    </span>
                    <Input
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="cm"
                      value={mens[m.key] || ""}
                      onChange={(e) => updateMens(m.key, e.target.value)}
                      className="h-9"
                    />
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Textarea
            placeholder="Décrivez votre projet en détail (matériaux souhaités, accessoires, références visuelles, délai...)"
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

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/gallery/2026-05-08_at_18.35.32.jpeg.asset.json";
import img2 from "@/assets/gallery/2026-05-08_at_18.35.33_2.jpeg.asset.json";
import img3 from "@/assets/gallery/2026-05-08_at_18.35.37_1.jpeg.asset.json";
import img4 from "@/assets/gallery/2026-06-26_at_12.21.18_1.jpeg.asset.json";
import img5 from "@/assets/gallery/2026-06-26_at_12.21.18_4.jpeg.asset.json";
import img6 from "@/assets/gallery/2026-06-26_at_12.21.18_5.jpeg.asset.json";
import img7 from "@/assets/gallery/2026-06-26_at_12.21.18.jpeg.asset.json";
import img8 from "@/assets/gallery/2026-06-26_at_12.21.22_2.jpeg.asset.json";
import img9 from "@/assets/gallery/2026-06-26_at_12.21.22_3.jpeg.asset.json";
import sakura from "@/assets/photos/sakura-portrait.webp.asset.json";
import sakuraProfile from "@/assets/photos/sakura-profil.webp.asset.json";
import hinata from "@/assets/photos/hinata-portrait.webp.asset.json";
import hinataByakugan from "@/assets/photos/hinata-byakugan.webp.asset.json";
import hinataAction from "@/assets/photos/hinata-action.webp.asset.json";
import raiponce from "@/assets/photos/raiponce-portrait.webp.asset.json";
import raiponceCostume from "@/assets/photos/raiponce-costume.webp.asset.json";
import sasukeSakura from "@/assets/photos/sasuke-sakura.jpeg.asset.json";
import stocking from "@/assets/photos/stocking-pose.jpeg.asset.json";
import hinataDetail from "@/assets/photos/hinata-detail.jpeg.asset.json";
import rock from "@/assets/photos/creation-rock.jpeg.asset.json";
import pois from "@/assets/photos/creation-pois.jpeg.asset.json";
import lilas from "@/assets/photos/creation-lilas.jpeg.asset.json";

type Piece = {
  src: string;
  title: string;
  serie: string;
  category: "Naruto" | "Anime" | "Événementiel" | "Fantasy";
  span: string;
};

const pieces: Piece[] = [
  { src: sakura.url, title: "Sakura Haruno", serie: "Naruto Shippuden", category: "Naruto", span: "md:row-span-2" },
  { src: hinata.url, title: "Hinata Hyuga", serie: "Naruto Shippuden", category: "Naruto", span: "md:row-span-2" },
  { src: raiponce.url, title: "Raiponce", serie: "Disney", category: "Fantasy", span: "md:row-span-2" },
  { src: hinataByakugan.url, title: "Hinata — Byakugan", serie: "Naruto Shippuden", category: "Naruto", span: "md:col-span-2" },
  { src: sakuraProfile.url, title: "Sakura — Profil", serie: "Naruto Shippuden", category: "Naruto", span: "md:row-span-2" },
  { src: raiponceCostume.url, title: "Raiponce — Robe", serie: "Disney", category: "Fantasy", span: "md:col-span-2" },
  { src: hinataAction.url, title: "Hinata — En mouvement", serie: "Naruto Shippuden", category: "Naruto", span: "md:row-span-2" },
  { src: sasukeSakura.url, title: "Sasuke & Sakura", serie: "Naruto Shippuden", category: "Naruto", span: "md:row-span-2" },
  { src: stocking.url, title: "Stocking — Pose", serie: "Panty & Stocking", category: "Anime", span: "md:row-span-2" },
  { src: hinataDetail.url, title: "Hinata — Détails", serie: "Naruto Shippuden", category: "Naruto", span: "md:row-span-2" },
  { src: rock.url, title: "Création — Rock", serie: "KAHASOO", category: "Anime", span: "md:row-span-2" },
  { src: pois.url, title: "Création — Pois", serie: "KAHASOO", category: "Anime", span: "md:row-span-2" },
  { src: lilas.url, title: "Création — Lilas", serie: "KAHASOO", category: "Fantasy", span: "md:row-span-2" },
  { src: img1.url, title: "Sasuke & Sakura", serie: "Naruto Shippuden", category: "Naruto", span: "md:col-span-2 md:row-span-2" },
  { src: img5.url, title: "Ino Yamanaka", serie: "Naruto", category: "Naruto", span: "md:row-span-2" },
  { src: img3.url, title: "Stocking", serie: "Panty & Stocking", category: "Anime", span: "md:col-span-2" },
  { src: img2.url, title: "Sakura Haruno", serie: "Naruto", category: "Naruto", span: "" },
  { src: img6.url, title: "Sakura — Kimono", serie: "Édition Boruto", category: "Naruto", span: "" },
  { src: img8.url, title: "Sasuke — Voyageur", serie: "Boruto", category: "Naruto", span: "md:row-span-2" },
  { src: img7.url, title: "Sakura — Pâtisserie", serie: "Édition Casual", category: "Événementiel", span: "md:col-span-2" },
  { src: img4.url, title: "Sakura — Noël", serie: "Édition Fêtes", category: "Événementiel", span: "" },
  { src: img9.url, title: "Sasuke — Ermite", serie: "Boruto", category: "Naruto", span: "" },
];

const filters = ["Tout", "Naruto", "Anime", "Fantasy", "Événementiel"] as const;

const Gallery = ({ embedded = false }: { embedded?: boolean }) => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<(typeof filters)[number]>("Tout");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = pieces.filter((p) => active === "Tout" || p.category === active);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <div className="min-h-screen bg-background">
      {!embedded && <Header />}

      {/* Hero */}
      <section className={`relative ${embedded ? "pt-10" : "pt-24"} pb-6 overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto h-px w-24 bg-gold-gradient mb-4 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.4em] text-gold uppercase font-body mb-4"
          >
            Portfolio KAHASOO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-lilac-gradient">Créations</span> KAHASOO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-3 max-w-2xl mx-auto text-foreground/70 font-body leading-relaxed"
          >
            Chaque pièce est confectionnée à la main en France — matières nobles, coupes précises,
            finitions couture. Une sélection de costumes livrés à mes clients cosplayeurs.
          </motion.p>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-5 flex flex-wrap justify-center gap-2"
          >
            {filters.map((f) => (
               <Button
                key={f}
                 variant="ghost"
                 aria-pressed={active === f}
                onClick={() => { setLightbox(null); setActive(f); }}
                className={`relative px-5 py-2 rounded-full text-xs md:text-sm font-body tracking-wide transition-all ${
                  active === f
                    ? "text-background"
                    : "text-foreground/70 hover:text-foreground border border-border/60"
                }`}
              >
                {active === f && (
                  <motion.span
                    layoutId="filterPill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
               </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="mx-auto max-w-[1600px] px-2 pb-10 md:px-5">
        <div className="columns-2 gap-2 md:columns-3 md:gap-3 xl:columns-4">
          {visible.map((p, i) => (
            <motion.div
              key={p.src}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.04 }}
              className="mb-2 break-inside-avoid md:mb-3"
            >
              <Button
                variant="ghost"
                onClick={() => setLightbox(i)}
                aria-label={`Voir ${p.title}`}
                className="group relative block h-auto w-full overflow-hidden rounded-md p-0 text-left whitespace-normal focus-visible:ring-inset"
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading={i < 6 ? "eager" : "lazy"}
                  className="block h-auto w-full transition-transform duration-700 motion-safe:group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-border/20 transition-colors group-hover:ring-gallery-gold/70" />
                <div className="absolute inset-x-0 bottom-0 bg-gallery-caption px-3 pb-3 pt-12 md:px-4 md:pb-4">
                  <p className="mb-1 text-[10px] uppercase text-gallery-gold">{p.category}</p>
                  <h3 className="font-display text-sm font-semibold leading-snug text-primary-foreground md:text-lg">{p.title}</h3>
                  <p className="mt-0.5 hidden text-xs font-body text-primary-foreground/75 sm:block">{p.serie}</p>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <div className="mx-auto gold-divider w-24 mb-5" />
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Une idée en tête ?
          </h2>
          <p className="text-foreground/70 font-body max-w-xl mx-auto mb-8">
            Chaque costume est unique. Confiez-moi votre projet et donnons-lui vie ensemble.
          </p>
          <a
            href="/#devis"
            className="inline-block px-8 py-3 bg-foreground text-background font-body text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-transform"
          >
            Demander un devis
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
              aria-label="Fermer"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10"
              aria-label="Suivant"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <motion.div
              key={visible[lightbox].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={visible[lightbox].src}
                alt={visible[lightbox].title}
                className="w-full h-full object-contain max-h-[80vh] rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                  {visible[lightbox].category}
                </p>
                <h3 className="font-display text-white text-xl md:text-2xl font-semibold">
                  {visible[lightbox].title}
                </h3>
                <p className="text-white/60 text-sm font-body">{visible[lightbox].serie}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       {!embedded && <Footer />}
    </div>
  );
};

export default Gallery;

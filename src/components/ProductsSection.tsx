import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const ProductsSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    fetchProducts(20)
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = async (e: React.MouseEvent, product: ShopifyProduct) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Ajouté au panier", { description: product.node.title });
  };

  return (
    <section id="boutique" className="relative py-28 overflow-hidden bg-background">
      {/* Ambient premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(42_55%_52%/0.4)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(42_55%_52%/0.4)] to-transparent" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[hsl(42_55%_52%)]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[hsl(42_55%_52%)] font-body">
              Collection
            </span>
            <span className="h-px w-10 bg-[hsl(42_55%_52%)]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            La Boutique
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Costumes cosplay haute couture, confectionnés à la main en France.
            Matières nobles, coupes précises, finitions signature.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-[hsl(42_55%_52%)]" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-muted-foreground text-lg">Aucun produit pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, i) => {
              const image = product.node.images.edges[0]?.node;
              const price = parseFloat(
                product.node.priceRange.minVariantPrice.amount
              ).toFixed(0);
              const currency =
                product.node.priceRange.minVariantPrice.currencyCode === "EUR"
                  ? "€"
                  : product.node.priceRange.minVariantPrice.currencyCode;

              return (
                <motion.div
                  key={product.node.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: (i % 4) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  <Link
                    to={`/product/${product.node.handle}`}
                    className="block relative"
                  >
                    {/* Gold hairline frame */}
                    <div className="absolute inset-0 rounded-lg pointer-events-none z-20 ring-1 ring-transparent group-hover:ring-[hsl(42_55%_52%/0.6)] transition-all duration-500" />

                    <div className="relative overflow-hidden rounded-lg bg-muted">
                      {/* Image */}
                      <div className="aspect-[3/4] overflow-hidden">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || product.node.title}
                            loading="lazy"
                            width={1024}
                            height={1365}
                            className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            —
                          </div>
                        )}
                      </div>

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Gold corner accents */}
                      <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[hsl(42_55%_52%)]/0 group-hover:border-[hsl(42_55%_52%)]/80 transition-all duration-500" />
                      <span className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[hsl(42_55%_52%)]/0 group-hover:border-[hsl(42_55%_52%)]/80 transition-all duration-500" />
                      <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[hsl(42_55%_52%)]/0 group-hover:border-[hsl(42_55%_52%)]/80 transition-all duration-500" />
                      <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[hsl(42_55%_52%)]/0 group-hover:border-[hsl(42_55%_52%)]/80 transition-all duration-500" />

                      {/* Price badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-md border border-[hsl(42_55%_52%/0.4)] text-xs font-body tracking-wider">
                        <span className="text-[hsl(42_55%_52%)] font-semibold">
                          {price} {currency}
                        </span>
                      </div>

                      {/* Bottom text overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          <span className="h-px w-6 bg-[hsl(42_55%_52%)]" />
                          <span className="text-[10px] uppercase tracking-[0.3em] text-[hsl(42_55%_52%)] font-body">
                            KAHASOO
                          </span>
                        </div>
                        <h3 className="font-display text-xl md:text-[22px] font-semibold leading-tight mb-3 drop-shadow-md">
                          {product.node.title}
                        </h3>

                        {/* Actions */}
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                          <Button
                            size="sm"
                            onClick={(e) => handleAddToCart(e, product)}
                            disabled={isCartLoading}
                            className="flex-1 bg-white text-black hover:bg-[hsl(42_55%_52%)] hover:text-white transition-colors border-0 font-body text-xs tracking-wider uppercase h-9"
                          >
                            <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                            Ajouter
                          </Button>
                          <div className="h-9 w-9 rounded-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

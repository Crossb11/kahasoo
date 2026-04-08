import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, ShoppingCart } from "lucide-react";
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

  const handleAddToCart = async (product: ShopifyProduct) => {
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
    <section id="boutique" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Boutique</h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Découvrez nos créations cosplay haut de gamme, entièrement fabriquées en France.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Aucun produit pour le moment.</p>
            <p className="text-muted-foreground text-sm mt-2">De nouveaux costumes arrivent bientôt !</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden border hover:shadow-xl transition-shadow"
              >
                <Link to={`/product/${product.node.handle}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    {product.node.images.edges[0]?.node ? (
                      <img
                        src={product.node.images.edges[0].node.url}
                        alt={product.node.images.edges[0].node.altText || product.node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        Pas d'image
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-5">
                  <Link to={`/product/${product.node.handle}`}>
                    <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-secondary-foreground transition-colors">
                      {product.node.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {product.node.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-lg">
                      {parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)} {product.node.priceRange.minVariantPrice.currencyCode}
                    </span>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleAddToCart(product)}
                      disabled={isCartLoading}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

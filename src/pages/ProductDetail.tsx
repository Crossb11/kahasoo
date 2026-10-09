import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/Header";

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    if (!handle) return;
    fetchProductByHandle(handle)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center pt-16">
          <p className="text-muted-foreground text-lg mb-4">Produit introuvable</p>
          <Link to="/" className="text-secondary-foreground underline">Retour à l'accueil</Link>
        </div>
      </>
    );
  }

  const variant = product.variants.edges[selectedVariantIdx]?.node;
  const images = product.images.edges;

  const handleAddToCart = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Ajouté au panier", { description: product.title });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/#boutique" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Retour à la boutique
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
               {images.length === 0 && (
                 <div className="aspect-square rounded-lg bg-muted flex items-center justify-center text-muted-foreground mb-4">
                   Photo à venir
                 </div>
               )}
               {images[selectedImage]?.node && (
                <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img: any, i: number) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 transition-colors ${
                        i === selectedImage ? "border-secondary" : "border-transparent"
                      }`}
                    >
                      <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>

              {product.options && product.options.length > 0 && product.options[0].name !== "Title" && (
                <div className="mb-6">
                  {product.options.map((option: any, oi: number) => (
                    <div key={oi} className="mb-4">
                      <label className="text-sm font-medium mb-2 block">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.edges.map((v: any, vi: number) => (
                          <button
                            key={vi}
                            onClick={() => setSelectedVariantIdx(vi)}
                            className={`px-4 py-2 rounded-md border text-sm transition-colors ${
                              vi === selectedVariantIdx
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border hover:border-foreground/30"
                            }`}
                          >
                            {v.node.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button
                size="lg"
                className="w-full mb-6"
                onClick={handleAddToCart}
                disabled={isCartLoading || !variant?.availableForSale}
              >
                {isCartLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {variant?.availableForSale ? "Ajouter au panier" : "Rupture de stock"}
                  </>
                )}
              </Button>

              <div className="prose prose-sm max-w-none">
                <h3 className="font-display text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

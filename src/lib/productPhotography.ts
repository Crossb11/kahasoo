import sakura from "@/assets/photos/sakura-portrait.webp.asset.json";
import sakuraProfile from "@/assets/photos/sakura-profil.webp.asset.json";
import sakuraDetail from "@/assets/gallery/2026-05-08_at_18.35.33_2.jpeg.asset.json";
import hinata from "@/assets/photos/hinata-portrait.webp.asset.json";
import hinataByakugan from "@/assets/photos/hinata-byakugan.webp.asset.json";
import hinataAction from "@/assets/photos/hinata-action.webp.asset.json";
import hinataDetail from "@/assets/photos/hinata-detail.jpeg.asset.json";
import sasuke from "@/assets/gallery/2026-06-26_at_12.21.22_3.jpeg.asset.json";
import sasukeSakura from "@/assets/photos/sasuke-sakura.jpeg.asset.json";

type ProductImage = { node: { url: string; altText: string | null } };
const photos: Record<string, ProductImage[]> = {
  "10930958532946": [sakura, sakuraProfile, sakuraDetail].map((asset) => ({ node: { url: asset.url, altText: "Sakura Haruno — costume KAHASOO" } })),
  "10930961154386": [hinata, hinataByakugan, hinataAction, hinataDetail].map((asset) => ({ node: { url: asset.url, altText: "Hinata Hyuga — costume KAHASOO" } })),
  "10930958926162": [sasuke, sasukeSakura].map((asset) => ({ node: { url: asset.url, altText: "Sasuke Uchiha — costume KAHASOO" } })),
};

export function getProductPhotos(id: string): ProductImage[] {
  return photos[id.split("/").pop() ?? ""] ?? [];
}
import { describe, expect, it } from "vitest";
import { getProductPhotos } from "@/lib/productPhotography";
import sakura from "@/assets/photos/sakura-portrait.webp.asset.json";
import hinata from "@/assets/photos/hinata-portrait.webp.asset.json";
import sasuke from "@/assets/gallery/2026-06-26_at_12.21.22_3.jpeg.asset.json";

describe("real costume photography", () => {
  it("uses the supplied Sakura photos for Sakura", () => {
    const photos = getProductPhotos("gid://shopify/Product/10930958532946");
    expect(photos).toHaveLength(3);
    expect(photos[0].node.url).toBe(sakura.url);
  });
  it("uses Hinata photos only for Hinata", () => {
    const photos = getProductPhotos("gid://shopify/Product/10930961154386");
    expect(photos).toHaveLength(4);
    expect(photos[0].node.url).toBe(hinata.url);
  });
  it("uses Sasuke photos for Sasuke", () => {
    expect(getProductPhotos("10930958926162")[0].node.url).toBe(sasuke.url);
  });
  it("does not fall back to retired AI photos for costumes without supplied photos", () => {
    expect(getProductPhotos("10931255738706")).toEqual([]);
    expect(getProductPhotos("unknown")).toEqual([]);
  });
});
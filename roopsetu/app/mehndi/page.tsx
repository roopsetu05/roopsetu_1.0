import { CATEGORIES_INFO } from "@/data/categoryData";
import CategoryGallery from "@/components/beauty/CategoryGallery";

export const metadata = {
  title: "Mehndi & Henna Design Gallery | RoopSetu",
  description: "Browse fine line henna art, floral motifs, bridal mehndi patterns, and modern minimalist accents.",
};

export default function MehndiPage() {
  return <CategoryGallery category={CATEGORIES_INFO.mehndi} />;
}

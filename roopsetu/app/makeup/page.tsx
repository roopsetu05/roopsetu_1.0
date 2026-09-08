import { CATEGORIES_INFO } from "@/data/categoryData";
import CategoryGallery from "@/components/beauty/CategoryGallery";

export const metadata = {
  title: "Makeup Looks & Tutorials | RoopSetu",
  description: "Discover soft glam, smokey eyes, dewy skin, and Indian bridal makeup inspiration.",
};

export default function MakeupPage() {
  return <CategoryGallery category={CATEGORIES_INFO.makeup} />;
}

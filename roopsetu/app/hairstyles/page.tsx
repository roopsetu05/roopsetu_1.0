import { CATEGORIES_INFO } from "@/data/categoryData";
import CategoryGallery from "@/components/beauty/CategoryGallery";

export const metadata = {
  title: "Hairstyle Inspiration & Trends | RoopSetu",
  description: "Browse loose waves, braids, bridal updos, long hair styles, and textured bun tutorials.",
};

export default function HairstylesPage() {
  return <CategoryGallery category={CATEGORIES_INFO.hairstyles} />;
}

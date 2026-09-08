import { CATEGORIES_INFO } from "@/data/categoryData";
import CategoryGallery from "@/components/beauty/CategoryGallery";

export const metadata = {
  title: "Bridal Beauty & Wedding Inspiration | RoopSetu",
  description: "Complete wedding looks: makeup, royal hair updos, velvet lehengas, and bridal jewellery.",
};

export default function BridalPage() {
  return <CategoryGallery category={CATEGORIES_INFO.bridal} />;
}

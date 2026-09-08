import { CATEGORIES_INFO } from "@/data/categoryData";
import CategoryGallery from "@/components/beauty/CategoryGallery";

export const metadata = {
  title: "Fashion & Festive Styling | RoopSetu",
  description: "Discover bridal saree drapes, festive lehengas, traditional couture, and style tips.",
};

export default function FashionPage() {
  return <CategoryGallery category={CATEGORIES_INFO.fashion} />;
}

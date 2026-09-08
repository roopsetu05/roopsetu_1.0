import { CATEGORIES_INFO } from "@/data/categoryData";
import CategoryGallery from "@/components/beauty/CategoryGallery";

export const metadata = {
  title: "Nail Art Inspiration & Designs | RoopSetu",
  description: "Explore the latest nail designs, chrome finishes, french tips, and nail art ideas.",
};

export default function NailsPage() {
  return <CategoryGallery category={CATEGORIES_INFO.nails} />;
}

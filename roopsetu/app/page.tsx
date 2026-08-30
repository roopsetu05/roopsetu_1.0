import Hero from "@/components/home/Hero";
import CategoryTabs from "@/components/home/CategoryTabs";
import BeautySection from "@/components/home/BeautySection";
import ShopLook from "@/components/home/ShopLook";
import {
  nailIdeas,
  hairIdeas,
  makeupIdeas,
} from "@/data/home";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <Hero />

      {/* Main categories */}
      <CategoryTabs />

      <BeautySection
        eyebrow="Nail inspiration"
        title="Beautiful nails"
        description="From minimal French tips to glossy chrome finishes, find your next manicure idea."
        href="/articles/ultimate-nail-inspiration"
        items={nailIdeas}
      />

      {/* Hair inspiration */}
      <BeautySection
        eyebrow="Hair inspiration"
        title="Hairstyles you'll want to try"
        description="Easy, elegant and trendy hairstyles for your next look."
        href="/hairstyles"
        items={hairIdeas}
      />

      {/* Makeup inspiration */}
      <BeautySection
        eyebrow="Makeup inspiration"
        title="Looks worth recreating"
        description="Discover everyday makeup, soft glam and statement looks."
        href="/makeup"
        items={makeupIdeas}
      />
      <ShopLook />
    </main>
  );
}
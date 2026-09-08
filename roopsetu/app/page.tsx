import Hero from "@/components/home/Hero";
import BeautyDiscovery from "@/components/home/BeautyDiscovery";
import GetTheLook from "@/components/home/GetTheLook";
import TrendingGallery from "@/components/home/TrendingGallery";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <Hero />
      
      {/* Section 2: Find a Look */}
      <BeautyDiscovery />

      {/* Section 3: Get the Look */}
      <GetTheLook />

      {/* Section 4: Trending Gallery */}
      <TrendingGallery />

    </main>
  );
}
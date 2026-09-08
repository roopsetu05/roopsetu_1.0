import Hero from "@/components/home/Hero";
import BeautyDiscovery from "@/components/home/BeautyDiscovery";
import GetTheLook from "@/components/home/GetTheLook";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <Hero />
      
      {/* Section 2: Find a Look */}
      <BeautyDiscovery />

      {/* Section 3: Get the Look */}
      <GetTheLook />

    </main>
  );
}
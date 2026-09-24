import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import SareesSection from "@/components/SareesSection";
import SuitsSection from "@/components/SuitsSection";
import KurtisSection from "@/components/KurtisSection";
import IndoWesternSection from "@/components/IndoWesternSection";
import LehengasSection from "@/components/LehengasSection";
import BrandStory from "@/components/BrandStory";
import BoutiqueExperience from "@/components/BoutiqueExperience";
import InstagramSection from "@/components/InstagramSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <SareesSection />
        <SuitsSection />
        <KurtisSection />
        <IndoWesternSection />
        <LehengasSection />
        <BrandStory />
        <BoutiqueExperience />
        <InstagramSection />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ToolsSection from "@/components/ToolsSection";
import SolutionsSection from "@/components/SolutionsSection";
import BrandsSection from "@/components/BrandsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <ToolsSection />
      <SolutionsSection />
      <BrandsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

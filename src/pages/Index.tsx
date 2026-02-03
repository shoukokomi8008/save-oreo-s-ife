import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;


import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import WhyArovaSection from '@/components/WhyArovaSection';
import IngredientsSection from '@/components/IngredientsSection';
import EffectivenessSection from '@/components/EffectivenessSection';
import ShopSection from '@/components/ShopSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhyArovaSection />
        <IngredientsSection />
        <EffectivenessSection />
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { removeBackground, loadImage } from '@/utils/imageUtils';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [productImage, setProductImage] = useState<string>("/lovable-uploads/d6ac1084-e2c8-44bb-9ce1-1912f3670621.png");
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const processImage = async () => {
      try {
        const originalImage = await loadImage(new Blob([await fetch("/lovable-uploads/d6ac1084-e2c8-44bb-9ce1-1912f3670621.png").then(r => r.blob())]));
        const backgroundRemovedBlob = await removeBackground(originalImage);
        setProductImage(URL.createObjectURL(backgroundRemovedBlob));
      } catch (error) {
        console.error("Failed to remove background:", error);
      }
    };

    processImage();
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-1/5 w-32 h-32 bg-arova-soft-green rounded-full opacity-40 animate-float"
          style={{ animationDelay: '0s', transform: `translateY(${scrollPosition * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-arova-soft-pink rounded-full opacity-30 animate-float"
          style={{ animationDelay: '1s', transform: `translateY(${scrollPosition * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-arova-soft-peach rounded-full opacity-30 animate-float"
          style={{ animationDelay: '2s', transform: `translateY(${scrollPosition * 0.2}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 md:pr-8 space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-arova-primary leading-tight">
            Introducing <br/><span className="text-arova-secondary">AROVA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-4 max-w-lg">
            A Natural Roll-On That Cares for Your Skin While Keeping You Fresh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-arova-primary hover:bg-arova-primary/90 text-white rounded-full px-8"
              onClick={() => scrollToSection('shop')}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-arova-primary text-arova-primary hover:bg-arova-primary/10 rounded-full px-8"
              onClick={() => scrollToSection('why-arova')}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 animate-rotate-slow"
            style={{ 
              animationPlayState: scrollPosition > 100 ? 'paused' : 'running',
              transform: `rotate(${scrollPosition * 0.2}deg)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-arova-soft-green/50 via-transparent to-arova-soft-pink/50 rounded-full animate-pulse-soft"></div>
            <img 
              src={productImage}
              alt="AROVA Product" 
              className="w-full h-full object-contain drop-shadow-2xl p-8"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce"
        onClick={() => scrollToSection('why-arova')}
      >
        <p className="text-sm text-gray-600 mb-2">Scroll to explore</p>
        <ChevronDown className="text-arova-primary" />
      </div>
    </section>
  );
};

export default HeroSection;

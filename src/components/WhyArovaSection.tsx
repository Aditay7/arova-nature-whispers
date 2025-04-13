
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-arova-primary">{icon}</div>
        <h3 className="font-serif text-xl font-semibold text-arova-primary">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyArovaSection = () => {
  return (
    <section id="why-arova" className="py-20 bg-gradient-to-b from-white to-arova-soft-green/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-arova-primary mb-4">
            Why AROVA Stands Out?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our natural formula outperforms conventional deodorants while caring for your skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="100% Natural"
            description="Made with carefully selected natural ingredients. No harmful chemicals, parabens, or aluminum."
            icon={<CheckCircle2 size={28} />}
            delay={100}
          />
          <FeatureCard 
            title="No Alcohol"
            description="Gentle on sensitive skin. No burning or irritation, even after shaving or waxing."
            icon={<CheckCircle2 size={28} />}
            delay={300}
          />
          <FeatureCard 
            title="Dual Action"
            description="Works as both a deodorant and a skin soother. Perfect for post-workout and daily use."
            icon={<CheckCircle2 size={28} />}
            delay={500}
          />
          <FeatureCard 
            title="Eco-Conscious"
            description="Sustainable packaging and cruelty-free. Good for you and good for the planet."
            icon={<CheckCircle2 size={28} />}
            delay={700}
          />
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="font-serif text-3xl font-bold text-arova-primary mb-4">
                The AROVA Difference
              </h3>
              <p className="text-gray-600 mb-6">
                Unlike conventional deodorants that rely on synthetic chemicals to mask odors, AROVA works with your body's natural processes. Our unique blend of natural ingredients neutralizes odor-causing bacteria while nourishing and soothing your skin.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-arova-primary/20 flex items-center justify-center mr-3">
                    <span className="text-arova-primary font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Long-lasting protection without harsh chemicals</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-arova-primary/20 flex items-center justify-center mr-3">
                    <span className="text-arova-primary font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Soothes razor burns and irritation</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-arova-primary/20 flex items-center justify-center mr-3">
                    <span className="text-arova-primary font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Pleasant, subtle fragrance from essential oils</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-arova-primary/20 flex items-center justify-center mr-3">
                    <span className="text-arova-primary font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">No white marks or residue on clothes</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-arova-soft-peach flex items-center justify-center p-8">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-full bg-arova-soft-pink/40 animate-pulse-soft"></div>
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
                  alt="Natural Ingredients" 
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArovaSection;

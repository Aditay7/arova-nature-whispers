
import { useEffect, useState, useRef } from 'react';
import { Clock, Award, ThumbsUp, Leaf } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  delay: number;
}

const Stat = ({ icon, title, value, description, delay }: StatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    
    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [delay]);
  
  useEffect(() => {
    if (isVisible && !isNaN(numericValue)) {
      let start = 0;
      const duration = 2000; // ms
      const step = Math.floor(duration / numericValue);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        
        if (start >= numericValue) {
          clearInterval(timer);
        }
      }, step);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, numericValue]);

  return (
    <div 
      ref={statRef}
      className={`bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="w-16 h-16 bg-arova-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-arova-primary">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-arova-primary mb-1">{title}</h3>
      <div className="text-3xl font-bold text-arova-secondary mb-2">
        {!isNaN(numericValue) ? (count + (value.includes('%') ? '%' : '')) : value}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const EffectivenessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-arova-primary mb-4">
            Proven & Powerful
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the reliable protection and skin-friendly benefits of AROVA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat 
            icon={<Clock size={32} />}
            title="Freshness"
            value="8+"
            description="Hours of continuous odor protection"
            delay={100}
          />
          <Stat 
            icon={<Award size={32} />}
            title="Skin Safety"
            value="100%"
            description="Dermatologically tested and approved"
            delay={300}
          />
          <Stat 
            icon={<ThumbsUp size={32} />}
            title="Satisfaction"
            value="95%"
            description="Users recommend AROVA to friends"
            delay={500}
          />
          <Stat 
            icon={<Leaf size={32} />}
            title="Eco Impact"
            value="Zero"
            description="Carbon footprint through offsets"
            delay={700}
          />
        </div>

        <div className="mt-20 bg-arova-soft-gray/30 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="font-serif text-3xl font-bold text-arova-primary mb-4">
                From Our Customers
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="text-5xl text-arova-primary/20 absolute top-3 left-3">"</div>
                <p className="text-gray-700 relative z-10 mt-4 ml-4">
                  I've been using AROVA for 3 months now and it's been incredible. No irritation, no white marks on clothes, and the subtle scent is amazing. Even my husband started using it!
                </p>
                <div className="mt-4 flex items-center ml-4">
                  <div className="w-10 h-10 bg-arova-primary/20 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-medium text-arova-primary">Sarah J.</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h4 className="font-serif text-xl font-semibold text-arova-primary mb-4">The AROVA Effect</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Odor Protection</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-arova-primary h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Skin Soothing</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-arova-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Long-lasting</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-arova-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>No Irritation</span>
                        <span>99%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-arova-primary h-2 rounded-full" style={{ width: "99%" }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Based on consumer satisfaction surveys of 500+ users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffectivenessSection;


import { useState } from 'react';
import { motion } from 'framer-motion';

interface Ingredient {
  id: number;
  name: string;
  description: string;
  color: string;
  image: string;
}

const ingredients: Ingredient[] = [
  {
    id: 1,
    name: 'Aloe Vera',
    description: 'Soothes skin irritation and provides deep hydration.',
    color: 'bg-green-100',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Alum',
    description: 'Natural antibacterial agent that eliminates odor-causing bacteria.',
    color: 'bg-gray-100',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Rose Water',
    description: 'Calms and refreshes skin while providing a subtle, natural fragrance.',
    color: 'bg-pink-100',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Mint Gel',
    description: 'Cooling effect that fights odor and leaves skin feeling refreshed.',
    color: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Vitamin E',
    description: 'Promotes skin healing and provides antioxidant protection.',
    color: 'bg-yellow-100',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Essential Oils',
    description: 'Natural fragrance with therapeutic benefits for mind and body.',
    color: 'bg-purple-100',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80'
  }
];

const IngredientsSection = () => {
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null);

  return (
    <section id="ingredients" className="py-20 bg-arova-soft-gray/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-arova-primary mb-4">
            Nature at Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AROVA combines the finest natural ingredients to create a formula that works with your body, not against it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient) => (
            <motion.div
              key={ingredient.id}
              className="ingredient-card bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
              onClick={() => setActiveIngredient(ingredient)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${ingredient.color} opacity-40`}></div>
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-arova-primary mb-2">{ingredient.name}</h3>
                <p className="text-gray-600">{ingredient.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {activeIngredient && (
          <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveIngredient(null)}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <div className={`absolute inset-0 ${activeIngredient.color} opacity-40`}></div>
                  <img 
                    src={activeIngredient.image} 
                    alt={activeIngredient.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="font-serif text-3xl font-bold text-arova-primary mb-4">
                    {activeIngredient.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{activeIngredient.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-arova-primary/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-arova-primary font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Sustainably sourced from trusted suppliers</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-arova-primary/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-arova-primary font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Carefully extracted to preserve all natural benefits</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-arova-primary/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-arova-primary font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Tested for purity and potency before inclusion in our formula</p>
                    </div>
                  </div>
                  <button 
                    className="mt-8 text-arova-primary font-medium hover:underline"
                    onClick={() => setActiveIngredient(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IngredientsSection;

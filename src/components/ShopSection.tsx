
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle, ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  options?: { name: string; value: string }[];
}

const products: Product[] = [
  {
    id: 1,
    name: "AROVA Original",
    description: "Our classic formula with a subtle floral scent. Perfect for everyday use.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    options: [
      { name: "Size", value: "50ml" },
      { name: "Scent", value: "Original" }
    ]
  },
  {
    id: 2,
    name: "AROVA Sensitive",
    description: "Extra gentle formula for sensitive skin. Fragrance-free and hypoallergenic.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    options: [
      { name: "Size", value: "50ml" },
      { name: "Scent", value: "Unscented" }
    ]
  },
  {
    id: 3,
    name: "AROVA Sport",
    description: "Enhanced formula with extra protection. Ideal for active lifestyles.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    options: [
      { name: "Size", value: "50ml" },
      { name: "Scent", value: "Fresh Mint" }
    ]
  },
  {
    id: 4,
    name: "AROVA Gift Set",
    description: "Three AROVA roll-ons in a beautiful gift box. Perfect for sharing the AROVA experience.",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    options: [
      { name: "Contains", value: "3 × 50ml" },
      { name: "Scents", value: "Mixed" }
    ]
  }
];

const ShopSection = () => {
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const increaseQuantity = (productId: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.min((prev[productId] || 1) + 1, 10) // Max 10 items
    }));
  };

  const decreaseQuantity = (productId: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1) // Min 1 item
    }));
  };

  const addToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${quantities[product.id]}× ${product.name} added to your cart`,
    });
  };

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-white to-arova-soft-pink/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-arova-primary mb-4">
            Choose Your AROVA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect AROVA formula for your lifestyle and skin needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="product-card bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image w-full h-full object-cover transition-transform duration-300"
                />
                {product.id === 1 && (
                  <div className="absolute top-4 left-4 bg-arova-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-arova-primary mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm min-h-[4rem]">{product.description}</p>
                
                {product.options && (
                  <div className="mb-4 space-y-2">
                    {product.options.map((option, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-500">{option.name}:</span>
                        <span className="font-medium">{option.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-semibold text-arova-primary">${product.price.toFixed(2)}</div>
                  <div className="flex items-center">
                    <button 
                      className="text-gray-400 hover:text-arova-primary transition-colors"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      <MinusCircle size={20} />
                    </button>
                    <span className="mx-2 font-medium w-6 text-center">{quantities[product.id]}</span>
                    <button 
                      className="text-gray-400 hover:text-arova-primary transition-colors"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      <PlusCircle size={20} />
                    </button>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-arova-primary hover:bg-arova-primary/90 text-white"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-semibold text-arova-primary mb-4">
            Subscribe & Save
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Never run out of AROVA. Subscribe to regular deliveries and save 15% on every order.
            Pause, skip, or cancel anytime.
          </p>
          <Button 
            className="bg-arova-secondary hover:bg-arova-secondary/90 text-white px-8"
          >
            Learn More About Subscriptions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

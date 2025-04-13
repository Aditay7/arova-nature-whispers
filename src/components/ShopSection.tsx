
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle, ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { removeBackground, loadImage } from '@/utils/imageUtils';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  processedImage?: string;
  options?: { name: string; value: string }[];
}

const ShopSection = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "AROVA Sensitive",
      description: "Our gentle formula with a soft, calming touch. Perfect for sensitive skin.",
      price: 200,
      image: "/lovable-uploads/29e70c0d-dc5a-4512-bb39-889ebbba86a3.png",
      options: [
        { name: "Size", value: "50ml" },
        { name: "Scent", value: "Unscented" }
      ]
    },
    {
      id: 2,
      name: "AROVA Original",
      description: "Our classic formula with a fresh, natural fragrance. Ideal for everyday use.",
      price: 200,
      image: "/lovable-uploads/5796cff4-d0d2-4482-af3a-3dc7df632f6b.png",
      options: [
        { name: "Size", value: "50ml" },
        { name: "Scent", value: "Original" }
      ]
    }
  ]);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  useEffect(() => {
    const processImages = async () => {
      const processedProducts = await Promise.all(
        products.map(async (product) => {
          try {
            const originalImage = await loadImage(new Blob([await fetch(product.image).then(r => r.blob())]));
            const backgroundRemovedBlob = await removeBackground(originalImage);
            return {
              ...product,
              processedImage: URL.createObjectURL(backgroundRemovedBlob)
            };
          } catch (error) {
            console.error(`Failed to process image for ${product.name}:`, error);
            return product;
          }
        })
      );
      setProducts(processedProducts);
    };

    processImages();
  }, []);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="product-card bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden bg-white flex justify-center items-center">
                <img 
                  src={product.processedImage || product.image} 
                  alt={product.name} 
                  className="product-image w-auto h-full object-contain p-4"
                />
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
                  <div className="text-xl font-semibold text-arova-primary">₹{product.price.toFixed(2)}</div>
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
      </div>
    </section>
  );
};

export default ShopSection;

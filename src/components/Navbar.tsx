
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-arova-primary font-serif text-3xl font-bold">AROVA</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-arova-primary font-medium transition-colors">
                Home
              </a>
              <a href="#why-arova" className="text-gray-700 hover:text-arova-primary font-medium transition-colors">
                Why AROVA
              </a>
              <a href="#ingredients" className="text-gray-700 hover:text-arova-primary font-medium transition-colors">
                Ingredients
              </a>
              <a href="#shop" className="text-gray-700 hover:text-arova-primary font-medium transition-colors">
                Shop
              </a>
              <Button variant="outline" className="ml-4 flex items-center gap-2 bg-transparent border-arova-primary text-arova-primary hover:bg-arova-primary hover:text-white">
                <ShoppingCart size={18} />
                <span>Cart (0)</span>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arova-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#why-arova" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arova-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Why AROVA
            </a>
            <a 
              href="#ingredients" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arova-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Ingredients
            </a>
            <a 
              href="#shop" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arova-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <div className="px-3 py-2">
              <Button className="w-full flex items-center justify-center gap-2 bg-arova-primary text-white hover:bg-arova-primary/90">
                <ShoppingCart size={18} />
                <span>Cart (0)</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

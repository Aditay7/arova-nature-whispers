
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-arova-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-serif text-2xl font-bold">AROVA</h4>
            <p className="text-white/80">
              Proudly promoting natural care and sustainability in everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-arova-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-arova-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-arova-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-serif text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#why-arova" className="text-white/80 hover:text-white transition-colors">Why AROVA</a></li>
              <li><a href="#ingredients" className="text-white/80 hover:text-white transition-colors">Ingredients</a></li>
              <li><a href="#shop" className="text-white/80 hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-serif text-lg font-semibold mb-4">Help & Info</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-serif text-lg font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">hello@arova-skincare.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">+1 (800) AROVA-01</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">1234 Nature Way, Green Valley, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} AROVA Natural Skincare. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span className="text-white/80 text-sm">Carbon Neutral Website</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

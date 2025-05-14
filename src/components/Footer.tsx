
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-quetzalli-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4 text-quetzalli-gold">Quetzalli</h3>
            <p className="text-quetzalli-sand/80 mb-4">
              Premium craft tequila made with tradition and passion.
              Experience the spirit of Mexico in every sip.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-quetzalli-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-quetzalli-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-quetzalli-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4 text-quetzalli-gold">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-quetzalli-gold transition-colors">Home</Link></li>
              <li><Link to="/our-story" className="hover:text-quetzalli-gold transition-colors">Our Story</Link></li>
              <li><Link to="/how-its-made" className="hover:text-quetzalli-gold transition-colors">How It's Made</Link></li>
              <li><Link to="/the-bottle" className="hover:text-quetzalli-gold transition-colors">The Bottle</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4 text-quetzalli-gold">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-quetzalli-gold transition-colors">Blog</Link></li>
              <li><Link to="/store" className="hover:text-quetzalli-gold transition-colors">Store</Link></li>
              <li><Link to="/contact" className="hover:text-quetzalli-gold transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-quetzalli-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4 text-quetzalli-gold">Contact</h4>
            <address className="not-italic">
              <p className="mb-2">Jalisco, Mexico</p>
              <p className="mb-2">info@quetzallitequila.com</p>
              <p>+52 123 456 7890</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-quetzalli-sand/20 text-center text-quetzalli-sand/60">
          <p>© {currentYear} Quetzalli Tequila. All rights reserved.</p>
          <p className="mt-2 text-sm">Please drink responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

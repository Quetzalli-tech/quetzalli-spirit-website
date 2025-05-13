
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Store", path: "/store" },
    { name: "How It's Made", path: "/how-its-made" },
    { name: "The Bottle", path: "/the-bottle" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const languages = [
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "fr", flag: "🇫🇷", name: "French" },
    { code: "es", flag: "🇪🇸", name: "Spanish" }
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    // In a real implementation, this would change the app's language
    console.log(`Language changed to ${langCode}`);
  };

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between mx-auto py-4">
        <Link 
          to="/" 
          className="text-2xl font-serif font-bold text-quetzalli-black hover:text-quetzalli-terracotta transition-colors"
        >
          Quetzalli
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-quetzalli-black hover:text-quetzalli-terracotta transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Language Selector */}
        <div className="hidden md:flex items-center ml-8">
          <div className="relative group">
            <button className="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none">
              {languages.find(lang => lang.code === currentLanguage)?.flag}
            </button>
            <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Mobile Language Selector */}
          <div className="mr-4">
            <button 
              className="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
              onClick={() => {
                const nextLangIndex = languages.findIndex(lang => lang.code === currentLanguage) + 1;
                const nextLang = languages[nextLangIndex % languages.length];
                handleLanguageChange(nextLang.code);
              }}
            >
              {languages.find(lang => lang.code === currentLanguage)?.flag}
            </button>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-quetzalli-black"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-quetzalli-black hover:text-quetzalli-terracotta transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

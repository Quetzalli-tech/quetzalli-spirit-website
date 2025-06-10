import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://github.com/Quetzalli-tech/quetzalli-spirit-website/releases/download/v2.0-alpha/Home.Page.mp4?raw=true" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 hero-gradient"></div>
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container relative z-10 text-center px-4 md:px-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-fade-in">
            Crafting Tequila with Ancestral Tradition
          </h1>
          
          <p className="text-lg md:text-xl text-quetzalli-sand mb-8 animate-fade-in [animation-delay:200ms]">
            Experience the authentic taste of Mexico through our premium artisanal tequila,
            meticulously crafted from 100% blue agave.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Link
              to="/store"
              className="bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Shop Our Collection
            </Link>
            
            <Link
              to="/our-story"
              className="bg-transparent border border-quetzalli-sand text-quetzalli-sand hover:bg-white/10 font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce">
        <span className="text-white/70 text-sm">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;

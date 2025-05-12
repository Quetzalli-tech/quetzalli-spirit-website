
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-20 bg-quetzalli-cream">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-quetzalli-dark">
            About Quetzalli
          </h1>
          <p className="text-xl text-quetzalli-dark/80 max-w-3xl mx-auto">
            Premium craft tequila rooted in tradition, crafted with passion, and celebrated worldwide.
          </p>
        </div>
      </header>
      
      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
                Our Mission & Values
              </h2>
              
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                At Quetzalli, we're dedicated to creating exceptional tequila that honors the rich traditions
                of Mexico while embracing sustainable practices that respect our environment and communities.
              </p>
              
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                Our mission is to share the authentic spirit of Mexico with the world, crafting tequila
                that celebrates our heritage and delivers an unparalleled sensory experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="border-l-4 border-quetzalli-terracotta pl-4">
                  <h3 className="font-serif text-xl mb-2 text-quetzalli-dark">Quality</h3>
                  <p className="text-quetzalli-dark/70">
                    Uncompromising commitment to excellence in every bottle.
                  </p>
                </div>
                
                <div className="border-l-4 border-quetzalli-terracotta pl-4">
                  <h3 className="font-serif text-xl mb-2 text-quetzalli-dark">Tradition</h3>
                  <p className="text-quetzalli-dark/70">
                    Honoring ancestral techniques passed down through generations.
                  </p>
                </div>
                
                <div className="border-l-4 border-quetzalli-terracotta pl-4">
                  <h3 className="font-serif text-xl mb-2 text-quetzalli-dark">Sustainability</h3>
                  <p className="text-quetzalli-dark/70">
                    Respecting the land and implementing eco-friendly practices.
                  </p>
                </div>
                
                <div className="border-l-4 border-quetzalli-terracotta pl-4">
                  <h3 className="font-serif text-xl mb-2 text-quetzalli-dark">Community</h3>
                  <p className="text-quetzalli-dark/70">
                    Supporting the people and places that make our tequila possible.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-5 -top-5 w-24 h-24 bg-quetzalli-gold/20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="Quetzalli tequila bottles"
                className="rounded-lg shadow-lg relative z-10 w-full h-[600px] object-cover"
              />
              <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-quetzalli-terracotta/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 bg-quetzalli-cream">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-quetzalli-dark">
              Meet Our Team
            </h2>
            <p className="text-quetzalli-dark/70 max-w-2xl mx-auto">
              The passionate people behind Quetzalli who bring expertise, dedication, and heart to our craft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 aspect-square overflow-hidden rounded-full max-w-[250px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=500&q=80"
                  alt="Miguel Rodriguez - Master Distiller" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1 text-quetzalli-dark">Miguel Rodriguez</h3>
              <p className="text-quetzalli-terracotta font-medium mb-2">Master Distiller</p>
              <p className="text-quetzalli-dark/70 px-4">
                With over 30 years of experience, Miguel oversees our distillation process, ensuring each batch meets our exacting standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 aspect-square overflow-hidden rounded-full max-w-[250px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=500&q=80"
                  alt="Sofia Martinez - Head of Agave Cultivation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1 text-quetzalli-dark">Sofia Martinez</h3>
              <p className="text-quetzalli-terracotta font-medium mb-2">Head of Agave Cultivation</p>
              <p className="text-quetzalli-dark/70 px-4">
                Sofia's agricultural expertise ensures our agave is grown sustainably and harvested at peak maturity for optimal flavor.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 aspect-square overflow-hidden rounded-full max-w-[250px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80"
                  alt="Carlos Fuentes - Brand Ambassador" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1 text-quetzalli-dark">Carlos Fuentes</h3>
              <p className="text-quetzalli-terracotta font-medium mb-2">Brand Ambassador</p>
              <p className="text-quetzalli-dark/70 px-4">
                Carlos brings Quetzalli's story to life, sharing our passion and heritage with tequila enthusiasts around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-quetzalli-dark">
              Quality & Certifications
            </h2>
            <p className="text-quetzalli-dark/70 max-w-2xl mx-auto">
              Quetzalli Tequila meets the highest industry standards while exceeding expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-quetzalli-sand/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-terracotta text-3xl font-serif">100%</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-quetzalli-dark">100% Blue Agave</h3>
              <p className="text-quetzalli-dark/70">
                We use only the finest blue agave plants, cultivated to perfection in the highlands of Jalisco.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-quetzalli-sand/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-terracotta text-3xl font-serif">CRT</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-quetzalli-dark">Consejo Regulador del Tequila</h3>
              <p className="text-quetzalli-dark/70">
                Officially certified by Mexico's Tequila Regulatory Council, ensuring authenticity and quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-quetzalli-sand/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-terracotta text-3xl font-serif">Eco</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-quetzalli-dark">Environmentally Certified</h3>
              <p className="text-quetzalli-dark/70">
                Our sustainable production processes meet international environmental standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-quetzalli-dark text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-gold">
            Experience Quetzalli
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Discover the rich heritage and exceptional quality of our premium tequilas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/our-story"
              className="bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Our Story
            </Link>
            <Link
              to="/store"
              className="bg-transparent border border-quetzalli-gold text-quetzalli-gold hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

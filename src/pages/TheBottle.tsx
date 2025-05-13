
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const TheBottle = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-quetzalli-sand/20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-quetzalli-dark mb-6">
              The Art of Our Ceramic Bottles
            </h1>
            <p className="text-lg text-quetzalli-dark/80">
              Each Quetzalli bottle is a piece of Mexican artistry, handcrafted by skilled artisans using techniques passed down through generations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1567857141239-e2c91fe707f9?auto=format&fit=crop&w=800&q=80"
                alt="Artisan crafting ceramic bottle"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
                Traditional Craftsmanship
              </h2>
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                Our distinctive ceramic bottles are made in small batches by artisans in Tonalá, Jalisco, a region renowned for its pottery traditions dating back centuries. Each bottle takes over a week to create from start to finish.
              </p>
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                The clay is sourced locally and prepared using ancient techniques, ensuring each vessel carries the authentic spirit of Mexico.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
                Artisanal Decoration
              </h2>
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                After the clay is shaped and fired, master painters apply intricate designs inspired by Aztec and Mayan symbolism, connecting our tequila to its pre-Hispanic roots. Each brushstroke is applied by hand, making every bottle unique.
              </p>
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                The colors are derived from natural pigments created from minerals, plants, and clay from different regions of Mexico, creating a vibrant palette that represents our heritage.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?auto=format&fit=crop&w=800&q=80"
                alt="Hand-painted ceramic pottery"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?auto=format&fit=crop&w=800&q=80"
                alt="Finished ceramic bottle"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
                Sustainability & Second Life
              </h2>
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                Our ceramic bottles are not only beautiful but also environmentally conscious. Unlike glass or plastic, ceramic is biodegradable and has a lower carbon footprint to produce.
              </p>
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                We encourage our customers to repurpose their empty bottles as water carafes, flower vases, or decorative pieces, giving each bottle a second life long after the tequila is enjoyed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-quetzalli-sand/30">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
            Experience Our Artisanal Bottles
          </h2>
          <p className="text-lg text-quetzalli-dark/80 max-w-2xl mx-auto mb-8">
            Each Quetzalli bottle is a unique piece of art housing our exceptional tequila. Explore our collection and own a piece of Mexican craftsmanship.
          </p>
          <a href="/store" className="inline-flex items-center gap-2 bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white font-medium py-3 px-8 rounded-md transition-colors">
            Shop Our Collection <ArrowRight size={16} />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TheBottle;

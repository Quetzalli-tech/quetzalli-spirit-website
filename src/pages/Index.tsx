import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProductHighlight from "@/components/ProductHighlight";
import BlogPreview from "@/components/BlogPreview";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  // Sample data for featured products - showing only 2 instead of 3
  const featuredProducts = [
    {
      id: "reposado",
      name: "Quetzalli Reposado",
      category: "Aged Tequila",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      description: "Aged in oak barrels for 8 months, delivering smooth vanilla and caramel notes."
    },
    {
      id: "anejo",
      name: "Quetzalli Añejo",
      category: "Premium Aged",
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
      description: "Our finest expression, aged for 18 months with rich, complex flavors."
    }
  ];
  
  // Sample data for blog posts
  const blogPosts = [
    {
      id: "cocktail-recipes",
      title: "Summer Cocktail Recipes",
      excerpt: "Refresh your summer with these delicious tequila cocktail recipes that are perfect for any occasion.",
      imageSrc: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      date: "June 15, 2025",
      category: "Recipes"
    },
    {
      id: "agave-farming",
      title: "The Art of Agave Farming",
      excerpt: "Explore how we sustainably grow and harvest the blue agave plants that are the heart of our tequila.",
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2025",
      category: "Production"
    },
    {
      id: "tequila-history",
      title: "The Rich History of Tequila",
      excerpt: "Discover the cultural significance and evolving traditions behind Mexico's most iconic spirit.",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      date: "April 10, 2025",
      category: "Heritage"
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // In a real application, this would send the email to a backend service
      console.log(`Subscribing email: ${email}`);
      setSubscribed(true);
      setEmail("");
      
      // Reset the subscribed state after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://raw.githubusercontent.com/Quetzalli-tech/my-imagesP/main/WhatsApp Image 2025-06-10 at 13.34.13_66e9b947.jpg"
                alt="Tequila agave fields"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-quetzalli-dark">
                Crafted with Ancestral Tradition
              </h2>
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                Quetzalli Tequila honors the ancient traditions of tequila making while embracing modern
                craftsmanship to create an exceptional spirit. Our dedication to quality begins in the
                mineral-rich soils of Jalisco, Mexico, where our blue agave is cultivated.
              </p>
              <p className="text-lg mb-8 text-quetzalli-dark/80">
                Every bottle of Quetzalli Tequila represents the legacy of artisanal tequila-making
                and our commitment to sustainable practices and uncompromising quality.
              </p>
              <Link
                to="/our-story"
                className="inline-flex items-center text-quetzalli-terracotta hover:text-quetzalli-terracotta/80 font-medium transition-colors gap-2"
              >
                Learn More About Our Process <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Highlight Section */}
      <ProductHighlight
        title="Our Collection"
        subtitle="Experience the essence of pure agave tequila through our carefully crafted expressions."
        products={featuredProducts}
        viewAllLink="/store"
      />
      
      {/* Process Preview Section */}
      <section className="py-20 bg-quetzalli-dark text-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-quetzalli-gold">
              From Agave to Bottle
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our meticulous process combines tradition with precision to create exceptional tequila.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-quetzalli-terracotta/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-gold text-2xl font-serif">1</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-quetzalli-gold">Harvesting</h3>
              <p className="text-white/70">
                Our mature blue agave plants are hand-selected and harvested by our expert jimadores.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-quetzalli-terracotta/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-gold text-2xl font-serif">2</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-quetzalli-gold">Cooking</h3>
              <p className="text-white/70">
                The agave hearts are slow-cooked in traditional stone ovens to develop complex flavors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-quetzalli-terracotta/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-gold text-2xl font-serif">3</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-quetzalli-gold">Distillation</h3>
              <p className="text-white/70">
                Our tequila is double-distilled in small batches to ensure purity and character.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-quetzalli-terracotta/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-gold text-2xl font-serif">4</span>
              </div>
              <h3 className="text-xl font-serif mb-3 text-quetzalli-gold">Aging</h3>
              <p className="text-white/70">
                Select expressions rest in premium oak barrels to develop their distinct character.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/how-its-made"
              className="inline-flex items-center text-quetzalli-gold hover:text-quetzalli-sand font-medium transition-colors gap-2"
            >
              Discover Our Full Process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Preview */}
      <BlogPreview posts={blogPosts} />
      
      {/* CTA Section with Email Subscription */}
      <section className="py-20 bg-quetzalli-sand/30">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-quetzalli-dark">
            Experience the Spirit of Mexico
          </h2>
          <p className="text-lg text-quetzalli-dark/80 max-w-2xl mx-auto mb-8">
            Join our community of tequila enthusiasts and be the first to learn about special releases,
            events, and exclusive offers.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            {subscribed ? (
              <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                Thank you for subscribing! We'll keep you updated.
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-quetzalli-dark/20 focus:outline-none focus:border-quetzalli-terracotta"
                  required
                />
                <button
                  type="submit"
                  className="bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
          
          <Link
            to="/store"
            className="bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Shop Our Collection
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

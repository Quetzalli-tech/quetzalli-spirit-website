
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-20 bg-quetzalli-dark text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-quetzalli-gold">
            Our Story
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A journey of passion, tradition, and the pursuit of perfection.
          </p>
        </div>
      </header>
      
      {/* Origin Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80"
                alt="Agave fields in Jalisco"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
                The Beginning
              </h2>
              
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                Quetzalli Tequila began in 1985 when the Rodriguez family decided to transform their 
                generations of agave farming expertise into crafting their own tequila. What started as 
                a small family operation in the highlands of Jalisco has grown into a celebrated brand 
                that maintains its commitment to tradition and quality.
              </p>
              
              <p className="text-lg text-quetzalli-dark/80">
                The name "Quetzalli" comes from the Nahuatl word meaning "precious" or "valuable feather," 
                symbolizing our commitment to creating a tequila that represents the highest quality and 
                the rich cultural heritage of Mexico.
              </p>
              
              <div className="mt-10 border-l-4 border-quetzalli-terracotta pl-6 py-2">
                <p className="italic text-quetzalli-dark/90">
                  "We don't just make tequila; we craft an experience that honors our ancestors and 
                  celebrates the land that makes it all possible."
                </p>
                <p className="mt-2 font-medium text-quetzalli-terracotta">
                  — Juan Rodriguez, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-quetzalli-cream">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-quetzalli-dark text-center">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-quetzalli-terracotta/30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24 relative">
              {/* 1985 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-quetzalli-dark">1985</h3>
                  <h4 className="text-xl mb-3 text-quetzalli-terracotta">Foundation</h4>
                  <p className="text-quetzalli-dark/80">
                    The Rodriguez family establishes Quetzalli with a small distillery in the highlands of Jalisco, 
                    using traditional methods to create their first batches of tequila.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-quetzalli-terracotta">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left invisible md:visible"></div>
              </div>
              
              {/* 1995 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 invisible md:visible md:text-right"></div>
                <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-quetzalli-terracotta">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-quetzalli-dark">1995</h3>
                  <h4 className="text-xl mb-3 text-quetzalli-terracotta">Expansion</h4>
                  <p className="text-quetzalli-dark/80">
                    After a decade of refining our craft, Quetzalli expands with a new distillery 
                    and begins exporting to select international markets, gaining recognition for its quality.
                  </p>
                </div>
              </div>
              
              {/* 2005 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-quetzalli-dark">2005</h3>
                  <h4 className="text-xl mb-3 text-quetzalli-terracotta">Innovation</h4>
                  <p className="text-quetzalli-dark/80">
                    Introduction of our premium Añejo and Reposado lines, which quickly earn international awards 
                    for their exceptional flavor profiles and craftsmanship.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-quetzalli-terracotta">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left invisible md:visible"></div>
              </div>
              
              {/* 2015 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 invisible md:visible md:text-right"></div>
                <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-quetzalli-terracotta">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-quetzalli-dark">2015</h3>
                  <h4 className="text-xl mb-3 text-quetzalli-terracotta">Sustainability</h4>
                  <p className="text-quetzalli-dark/80">
                    Quetzalli commits to sustainable practices, implementing eco-friendly production methods 
                    and launching initiatives to support the local community and environment.
                  </p>
                </div>
              </div>
              
              {/* Present */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-quetzalli-dark">Present</h3>
                  <h4 className="text-xl mb-3 text-quetzalli-terracotta">Global Recognition</h4>
                  <p className="text-quetzalli-dark/80">
                    Today, Quetzalli is enjoyed in over 30 countries, recognized as a premium tequila that 
                    balances tradition with innovation while remaining true to its roots and values.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-quetzalli-terracotta">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left invisible md:visible"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Family Heritage */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
                Family Heritage
              </h2>
              
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                For four generations, the Rodriguez family has worked the rich volcanic soils of Jalisco, 
                developing an intimate understanding of the blue agave plant and the art of tequila making.
              </p>
              
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                Each bottle of Quetzalli represents this legacy of knowledge, passion, and dedication. 
                Today, the tradition continues with the family's younger generation bringing fresh perspectives 
                while honoring the time-tested methods that have defined Quetzalli's distinctive character.
              </p>
              
              <p className="text-lg text-quetzalli-dark/80">
                Our family's commitment to quality has never wavered, ensuring that every sip of Quetzalli 
                delivers an authentic taste of Mexico's rich cultural heritage.
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
                alt="Rodriguez family in the distillery"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision for Future */}
      <section className="py-20 bg-quetzalli-dark text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-quetzalli-gold">
            Our Vision for the Future
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
            As we look to the future, Quetzalli remains committed to preserving the art of traditional 
            tequila production while embracing innovation and sustainability. We aim to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-xl font-serif mb-4 text-quetzalli-gold">Preserve Tradition</h3>
              <p className="text-white/80">
                Continue honoring traditional methods while sharing Mexico's rich tequila heritage with the world.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-xl font-serif mb-4 text-quetzalli-gold">Sustainable Growth</h3>
              <p className="text-white/80">
                Expand our reach while maintaining our commitment to environmental stewardship and ethical practices.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-xl font-serif mb-4 text-quetzalli-gold">Community Support</h3>
              <p className="text-white/80">
                Continue investing in the communities that make our tequila possible, supporting education and opportunity.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              to="/how-its-made"
              className="bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
            >
              Discover Our Process
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurStory;


import { Leaf, Recycle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TranslatedText from "@/components/TranslatedText";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-quetzalli-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-quetzalli-black mb-6">
            <TranslatedText text="Sustainability" />
          </h1>
          <p className="text-xl text-quetzalli-black/80 max-w-3xl mx-auto leading-relaxed">
            <TranslatedText text="Our commitment to the earth goes beyond creating exceptional spirits. Every aspect of our process is designed with sustainability in mind." />
          </p>
        </div>
      </section>

      {/* Plant Fiber Composting Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-quetzalli-forest mr-3" />
                <h2 className="text-3xl font-serif font-bold text-quetzalli-black">
                  <TranslatedText text="From Plant to Compost" />
                </h2>
              </div>
              <p className="text-lg text-quetzalli-black/80 mb-6 leading-relaxed">
                <TranslatedText text="After we extract the precious agave juice for our spirits, the remaining plant fibers don't go to waste. These nutrient-rich fibers are transformed into high-quality compost that enriches the soil." />
              </p>
              <p className="text-lg text-quetzalli-black/80 mb-6 leading-relaxed">
                <TranslatedText text="This compost is returned to our agave fields and shared with local farmers, creating a circular ecosystem that nourishes the land that sustains us." />
              </p>
              <div className="flex items-center text-quetzalli-terracotta font-medium">
                <span><TranslatedText text="Zero waste, maximum impact" /></span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
            <div className="bg-quetzalli-sage/20 p-8 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-quetzalli-black mb-4">
                <TranslatedText text="Composting Process" />
              </h3>
              <ul className="space-y-3 text-quetzalli-black/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-quetzalli-forest rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <TranslatedText text="Agave fibers are collected after juice extraction" />
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-quetzalli-forest rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <TranslatedText text="Natural decomposition process for 6-8 months" />
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-quetzalli-forest rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <TranslatedText text="Regular turning ensures proper aeration" />
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-quetzalli-forest rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <TranslatedText text="Nutrient-rich compost ready for soil enrichment" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottle Second Life Section */}
      <section className="py-16 px-4 bg-quetzalli-sage/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold text-quetzalli-black mb-6">
                <TranslatedText text="Creative Reuse Ideas" />
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-quetzalli-black/80">
                <div className="text-center p-4 bg-quetzalli-cream rounded">
                  <TranslatedText text="Decorative Vases" />
                </div>
                <div className="text-center p-4 bg-quetzalli-cream rounded">
                  <TranslatedText text="Candle Holders" />
                </div>
                <div className="text-center p-4 bg-quetzalli-cream rounded">
                  <TranslatedText text="Storage Containers" />
                </div>
                <div className="text-center p-4 bg-quetzalli-cream rounded">
                  <TranslatedText text="Art Projects" />
                </div>
              </div>
              <p className="text-xs text-quetzalli-black/60 mt-4 text-center">
                <TranslatedText text="Let your creativity flow and give our bottles a second life" />
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Recycle className="w-8 h-8 text-quetzalli-terracotta mr-3" />
                <h2 className="text-3xl font-serif font-bold text-quetzalli-black">
                  <TranslatedText text="The Bottle's Second Life" />
                </h2>
              </div>
              <p className="text-lg text-quetzalli-black/80 mb-6 leading-relaxed">
                <TranslatedText text="Our handcrafted bottles are designed to be cherished long after the last drop. Made from recycled glass and featuring our distinctive design, each bottle tells a story worth preserving." />
              </p>
              <p className="text-lg text-quetzalli-black/80 mb-6 leading-relaxed">
                <TranslatedText text="We encourage our customers to repurpose these beautiful vessels. Whether as decorative pieces, storage containers, or creative art projects, every bottle can begin a new chapter." />
              </p>
              <div className="flex items-center text-quetzalli-terracotta font-medium">
                <span><TranslatedText text="Beauty that transcends consumption" /></span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-quetzalli-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            <TranslatedText text="Join Our Sustainability Journey" />
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            <TranslatedText text="Together, we can create a more sustainable future, one bottle and one harvest at a time." />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-quetzalli-terracotta text-white font-medium rounded hover:bg-quetzalli-terracotta/90 transition-colors">
              <TranslatedText text="Share Your Bottle's Second Life" />
            </button>
            <button className="px-8 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-quetzalli-black transition-colors">
              <TranslatedText text="Learn More About Our Process" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;

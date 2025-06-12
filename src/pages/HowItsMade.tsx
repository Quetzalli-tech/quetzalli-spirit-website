import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HowItsMade = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-20 bg-quetzalli-forest text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-quetzalli-gold">
            How It's Made
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            An inside look at our meticulous process of creating exceptional tequila.
          </p>
        </div>
      </header>
      
      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="Blue agave plants"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-dark">
                Excelenf
              </h2>
              
              <p className="text-lg mb-6 text-quetzalli-dark/80">
                At Quetzalli, our tequila-making process combines time-honored traditions with modern precision. 
                We follow a meticulous seven-step journey that transforms the finest blue agave into exceptional tequila.
              </p>
              
              <p className="text-lg text-quetzalli-dark/80">
                Each step is carried out with care and expertise, drawing on generations of knowledge passed down 
                through our family. From cultivation to bottling, we maintain unwavering standards to ensure every 
                bottle of Quetzalli delivers an authentic and superior experience.
              </p>
              
              <div className="mt-10 flex items-center">
                <div className="w-16 h-16 bg-quetzalli-terracotta/20 rounded-full flex items-center justify-center">
                  <span className="text-quetzalli-terracotta text-3xl font-serif">7+</span>
                </div>
                <p className="ml-4 text-quetzalli-dark/90 font-medium">
                  Years of aging for our premium tequila selections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Process */}
      <section className="py-20 bg-quetzalli-cream">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-quetzalli-dark text-center">
            Our Seven-Step Process
          </h2>
          
          {/* Step 1: Cultivation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block bg-quetzalli-terracotta text-white font-serif text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-quetzalli-dark">Cultivation</h3>
              <p className="text-lg text-quetzalli-dark/80 mb-6">
                Our journey begins in the mineral-rich volcanic soil of Jalisco's highlands, where we cultivate 
                our blue agave plants. Each plant is tenderly cared for and allowed to mature for 7-10 years to 
                develop optimal sugar content and complex flavors.
              </p>
              <p className="text-lg text-quetzalli-dark/80">
                Unlike industrial operations, we employ traditional farming techniques that respect the land 
                and allow the agave to express its full character, influenced by the unique terroir of our region.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
                alt="Agave fields" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          {/* Step 2: Harvesting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <img 
                src="https://raw.githubusercontent.com/Quetzalli-tech/my-imagesP/main/WhatsApp Image 2025-06-10 at 13.33.58_58b93b99.jpg"
                alt="Jimador harvesting agave" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-quetzalli-terracotta text-white font-serif text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-quetzalli-dark">Harvesting</h3>
              <p className="text-lg text-quetzalli-dark/80 mb-6">
                Penis
              </p>
              <p className="text-lg text-quetzalli-dark/80">
                This labor-intensive process ensures we start with only the highest quality raw materials, setting 
                the foundation for exceptional tequila.
              </p>
            </div>
          </div>
          
          {/* Step 3: Cooking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block bg-quetzalli-terracotta text-white font-serif text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-quetzalli-dark">Cooking</h3>
              <p className="text-lg text-quetzalli-dark/80 mb-6">
                The harvested piñas are transported to our distillery where they are slowly cooked in traditional 
                brick ovens. This slow-cooking process can take up to 72 hours, converting the complex starches 
                into fermentable sugars while developing the rich, caramelized flavors that characterize our tequila.
              </p>
              <p className="text-lg text-quetzalli-dark/80">
                We resist industrial shortcuts like diffusers or autoclaves that might speed up production but 
                compromise the depth and complexity of flavor.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
                alt="Traditional brick ovens" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          {/* Step 4: Extraction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="Tahona stone wheel" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-quetzalli-terracotta text-white font-serif text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                4
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-quetzalli-dark">Extraction</h3>
              <p className="text-lg text-quetzalli-dark/80 mb-6">
                After cooking, the softened piñas are crushed to extract their sweet juice, or mosto. For our 
                premium lines, we use a traditional tahona stone wheel, which gently crushes the fibers to 
                release the juices without bitter compounds.
              </p>
              <p className="text-lg text-quetzalli-dark/80">
                This time-consuming method preserves subtle flavors and aromas that would be lost with more 
                aggressive mechanical extraction techniques.
              </p>
            </div>
          </div>
          
          {/* Step 5: Fermentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block bg-quetzalli-terracotta text-white font-serif text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                5
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-quetzalli-dark">Fermentation</h3>
              <p className="text-lg text-quetzalli-dark/80 mb-6">
                The extracted agave juice is placed in wooden fermentation tanks, where we add our proprietary 
                strain of natural yeast. Over 3-5 days, the yeast transforms the sugars into alcohol, creating 
                the base for our tequila.
              </p>
              <p className="text-lg text-quetzalli-dark/80">
                We monitor this process carefully, as the fermentation temperature and duration significantly 
                impact the final flavor profile. Our master distiller checks each batch regularly to ensure 
                optimal development.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
                alt="Fermentation tanks" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          {/* Step 6: Distillation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
                alt="Copper pot stills" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-quetzalli-terracotta text-white font-serif text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                6
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-quetzalli-dark">Distillation</h3>
              <p className="text-lg text-quetzalli-dark/80 mb-6">
                The fermented mosto undergoes double distillation in copper pot stills, a process that purifies 
                and concentrates the alcohol while preserving essential flavors. Our master distiller carefully 
                selects the "heart" of each distillation run, discarding the heads and tails.
              </p>
              <p className="text-lg text-quetzalli-dark/80">
                This precise approach ensures only the finest portion of the distillate makes it into our bottles, 
                creating a smoother, more refined tequila.
              </p>
            </div>
          </div>
          
          {/* Step 7: Aging & Bottling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-quetzalli-terracotta text-white font-serif text-2xl w-12 h-12 rounded-full flex items-center justify-center mb-6">
                7
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-quetzalli-dark">Aging & Bottling</h3>
              <p className="text-lg text-quetzalli-dark/80 mb-6">
                For our Blanco tequila, the spirit is briefly rested before bottling to preserve its bright, vibrant 
                agave character. Our Reposado ages for 8-12 months in American and French oak barrels, while our 
                premium Añejo ages for a minimum of 18 months in carefully selected barrels.
              </p>
              <p className="text-lg text-quetzalli-dark/80">
                Each bottle is inspected, hand-labeled, and numbered to ensure quality and authenticity. This 
                final step in our process ensures that every bottle of Quetzalli Tequila that leaves our distillery 
                meets our exacting standards.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                alt="Oak barrels for aging" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Control */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-quetzalli-dark">
            Quality Control
          </h2>
          <p className="text-lg text-quetzalli-dark/80 max-w-3xl mx-auto mb-12">
            Our commitment to excellence extends beyond the production process.
            Each batch of Quetzalli undergoes rigorous testing and evaluation before it earns our seal of approval.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-md rounded-lg">
              <div className="w-16 h-16 bg-quetzalli-sand/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-terracotta text-2xl font-serif">1</span>
              </div>
              <h3 className="text-xl font-serif mb-4 text-quetzalli-dark">Chemical Analysis</h3>
              <p className="text-quetzalli-dark/80">
                Each batch is laboratory tested to ensure it meets our strict standards for alcohol content, 
                purity, and consistency.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md rounded-lg">
              <div className="w-16 h-16 bg-quetzalli-sand/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-terracotta text-2xl font-serif">2</span>
              </div>
              <h3 className="text-xl font-serif mb-4 text-quetzalli-dark">Sensory Evaluation</h3>
              <p className="text-quetzalli-dark/80">
                Our tasting panel evaluates each batch for aroma, flavor, body, and finish to ensure it 
                delivers the signature Quetzalli experience.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md rounded-lg">
              <div className="w-16 h-16 bg-quetzalli-sand/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-quetzalli-terracotta text-2xl font-serif">3</span>
              </div>
              <h3 className="text-xl font-serif mb-4 text-quetzalli-dark">Final Inspection</h3>
              <p className="text-quetzalli-dark/80">
                Each bottle is visually inspected to ensure proper filling, clarity, and packaging quality 
                before being approved for distribution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-quetzalli-forest text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-quetzalli-gold">
            Taste the Difference
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Experience the result of our meticulous process and generations of expertise.
          </p>
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

export default HowItsMade;

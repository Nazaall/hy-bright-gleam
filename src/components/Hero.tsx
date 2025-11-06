import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bags.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium OZO Bags Collection"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Bag Manufacturing
            <span className="block text-accent mt-2">Crafted for Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Leading manufacturer of high-quality handbags, backpacks, and custom bag solutions for wholesale and B2B clients worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-primary font-semibold">
              View Our Catalog
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold">
              Get Quote
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">15+</div>
              <div className="text-sm md:text-base text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">500K+</div>
              <div className="text-sm md:text-base text-white/80">Bags Produced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">200+</div>
              <div className="text-sm md:text-base text-white/80">B2B Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">50+</div>
              <div className="text-sm md:text-base text-white/80">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

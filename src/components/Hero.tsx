import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-vegetables.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fresh organic vegetables" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">🌾 India's 1st Community-Based Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Farm-Fresh Veggies
            <span className="block text-primary">Directly to Your Door</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl">
            Connect with local farmers in Bangalore. Get the freshest, chemical-free vegetables at the lowest prices while helping farmers earn fair profits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Order Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">50%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Chemical-Free</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">₹0</div>
              <div className="text-sm text-muted-foreground">Delivery Fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

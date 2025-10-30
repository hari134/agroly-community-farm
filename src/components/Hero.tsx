import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-vegetables.jpg";
import agrolyLogo from "@/assets/agroly-logo.jpeg";

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
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={agrolyLogo} 
              alt="Agroly - Farm fresh vegetables" 
              className="w-48 h-48 object-contain"
            />
          </div>

          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">🌾 India's 1st Community-Based Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Farm-Fresh Veggies
            <span className="block text-primary mt-2">Directly to Your Door</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            We connect local farmers directly to residential societies in Bangalore. Ensuring you get the freshest, chemical-free vegetables at the lowest prices while helping farmers earn fair profits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 gap-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right-bottom transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105">
              Order Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:bg-primary/5 hover:border-primary transition-all duration-300">
              How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20">
              <div className="text-4xl font-bold text-primary">50%</div>
              <div className="text-sm font-medium text-muted-foreground">Cost Savings</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm font-medium text-muted-foreground">Chemical-Free</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20">
              <div className="text-4xl font-bold text-primary">₹0</div>
              <div className="text-sm font-medium text-muted-foreground">Delivery Fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

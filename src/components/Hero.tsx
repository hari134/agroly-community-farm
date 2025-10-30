import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-vegetables.jpg";
import agrolyLogo from "@/assets/agroly-logo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] z-0" style={{ background: 'var(--gradient-glow)' }} />

      {/* Image with Modern Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block">
        <div className="relative h-full">
          <img 
            src={heroImage} 
            alt="Fresh organic vegetables" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-3xl space-y-8">
          {/* Logo with Modern Styling */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl rounded-full" />
              <img 
                src={agrolyLogo} 
                alt="Agroly - Farm fresh vegetables" 
                className="relative w-24 h-24 object-contain drop-shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Agroly
              </h2>
              <p className="text-sm text-muted-foreground font-medium">Farm to Society</p>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-xl border border-primary/20 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              India's 1st Community-Based Platform
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight">
            <span className="block text-foreground">Farm-Fresh</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
              Veggies
            </span>
            <span className="block text-foreground/80 text-4xl md:text-5xl lg:text-6xl mt-2">
              Directly to Your Door
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            We connect local farmers directly to residential societies in Bangalore. 
            <span className="text-foreground font-semibold"> Ensuring you get the freshest, chemical-free vegetables</span> at the lowest prices while helping farmers earn fair profits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="group relative text-lg px-10 py-7 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right-bottom transition-all duration-700 shadow-[0_0_40px_-10px] shadow-primary/50 hover:shadow-[0_0_60px_-10px] hover:shadow-primary/70 hover:scale-105 border-0"
            >
              <span className="relative z-10 flex items-center gap-2 font-display font-bold">
                Order Now 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:scale-105 transition-all duration-300 font-display font-semibold"
            >
              How It Works
            </Button>
          </div>

          {/* Stats with Modern Cards */}
          <div className="flex flex-wrap gap-6 pt-12">
            {[
              { value: "50%", label: "Cost Savings" },
              { value: "100%", label: "Chemical-Free" },
              { value: "₹0", label: "Delivery Fee" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="group relative px-8 py-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  boxShadow: '0 8px 32px -8px hsl(var(--primary) / 0.2)',
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-5xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
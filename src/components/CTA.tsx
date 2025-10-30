import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-primary-foreground leading-tight">
            Ready to Start Saving on{" "}
            <span className="bg-white/20 px-4 py-2 rounded-2xl backdrop-blur-sm">
              Fresh Vegetables
            </span>
            ?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Join hundreds of families in Bangalore who trust Agroly for farm-fresh, chemical-free vegetables delivered every Saturday.
          </p>
          
          <Button 
            size="lg" 
            className="group bg-background text-foreground hover:bg-background/95 text-xl px-12 py-8 gap-3 shadow-2xl hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 font-display font-bold rounded-2xl"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Connect with Agroly Agent
          </Button>

          {/* Features */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-base text-primary-foreground/90 font-medium">
            {[
              "Zero Delivery Fee",
              "No Minimum Order", 
              "Pay on Delivery"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-2 h-2 bg-background rounded-full shadow-lg" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

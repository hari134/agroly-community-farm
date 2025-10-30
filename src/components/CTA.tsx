import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Saving on Fresh Vegetables?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join hundreds of families in Bangalore who trust Agroly for farm-fresh, chemical-free vegetables delivered every Saturday.
          </p>
          
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90 text-lg px-10 gap-2 shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Connect with AI Agent
          </Button>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-background rounded-full"></div>
              <span>Zero Delivery Fee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-background rounded-full"></div>
              <span>No Minimum Order</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-background rounded-full"></div>
              <span>Pay on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

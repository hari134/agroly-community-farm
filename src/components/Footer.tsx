import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">Agroly</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              India's 1st Community-Based Vegetable Ordering Platform. Connecting farmers with communities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">This Week's Picks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Service Area</h3>
            <p className="text-background/70 mb-2">Currently serving:</p>
            <p className="font-semibold">Bangalore, Karnataka</p>
            <p className="text-sm text-background/70 mt-4">Delivery: Every Saturday</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Agroly. Grown with care. Delivered with trust.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

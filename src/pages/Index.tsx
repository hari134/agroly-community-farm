import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Products />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

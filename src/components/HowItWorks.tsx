import { MessageSquare, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Chat with AI Agent",
    description: "Open the link and connect with our Agroly AI Agent to browse fresh produce"
  },
  {
    icon: CheckCircle2,
    title: "Confirm Your Order",
    description: "Chat with our AI Bot, select your vegetables, and confirm your order"
  },
  {
    icon: Truck,
    title: "Pay on Delivery",
    description: "Free delivery every Saturday - pay when you receive your fresh vegetables"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-primary">Agroly</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get farm-fresh vegetables delivered to your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                {index + 1}
              </div>
              
              <div className="mt-6 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

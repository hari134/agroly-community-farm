import { Users, Leaf, TrendingDown, Heart } from "lucide-react";
import farmerImage from "@/assets/farmer-community.jpg";

const benefits = [
  {
    icon: TrendingDown,
    title: "Save Up to 50%",
    description: "Lower prices than quick commerce or retail stores"
  },
  {
    icon: Leaf,
    title: "100% Chemical-Free",
    description: "Fresh vegetables straight from local farms"
  },
  {
    icon: Users,
    title: "Community-Based",
    description: "Group ordering ensures zero waste and shared savings"
  },
  {
    icon: Heart,
    title: "Support Farmers",
    description: "Fair profits for farmers by cutting out middlemen"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={farmerImage} 
                alt="Local farmer with fresh produce" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Agroly</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              We're revolutionizing how you buy vegetables - connecting communities with local farmers for a better, fresher future.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-background/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

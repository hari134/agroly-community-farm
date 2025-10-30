import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  { name: "Potatoes", price: "₹20/kg", emoji: "🥔", discount: "40% OFF" },
  { name: "Onions", price: "₹18/kg", emoji: "🧅", discount: "35% OFF" },
  { name: "Hybrid Tomatoes", price: "₹22/kg", emoji: "🍅", discount: "45% OFF" },
  { name: "Indian Cucumbers", price: "₹31/kg", emoji: "🥒", discount: "30% OFF" }
];

const Products = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">This Week's Special</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Picks of the Week
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked fresh vegetables directly from local farms
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {product.discount}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-primary">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            🚚 Free delivery every Saturday • No minimum order value
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;

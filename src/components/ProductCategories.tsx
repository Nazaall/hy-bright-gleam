import { Card } from "@/components/ui/card";
import handbagsImage from "@/assets/handbags-category.jpg";
import backpacksImage from "@/assets/backpacks-category.jpg";
import slingbagsImage from "@/assets/slingbags-category.jpg";
import walletsImage from "@/assets/wallets-category.jpg";

const categories = [
  {
    title: "Handbags",
    description: "Premium leather handbags in various styles",
    image: handbagsImage,
  },
  {
    title: "Backpacks",
    description: "Durable backpacks for professionals and students",
    image: backpacksImage,
  },
  {
    title: "Sling Bags",
    description: "Stylish crossbody and messenger bags",
    image: slingbagsImage,
  },
  {
    title: "Wallets & Clutches",
    description: "Elegant wallets and compact clutches",
    image: walletsImage,
  },
];

export const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive collection of bags designed for style, functionality, and durability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.title}
              className="group overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

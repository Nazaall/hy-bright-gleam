import { Card } from "@/components/ui/card";
import { Building2, ShoppingBag, Store, Globe } from "lucide-react";

const clientTypes = [
  {
    icon: Building2,
    title: "Retail Chains",
    description: "Leading department stores and retail chains across multiple countries",
    count: "50+",
  },
  {
    icon: ShoppingBag,
    title: "Fashion Brands",
    description: "Premium fashion brands and designer labels worldwide",
    count: "80+",
  },
  {
    icon: Store,
    title: "Boutique Stores",
    description: "Independent boutiques and specialty bag retailers",
    count: "120+",
  },
  {
    icon: Globe,
    title: "Online Retailers",
    description: "E-commerce platforms and online marketplaces",
    count: "60+",
  },
];

const testimonials = [
  {
    quote: "OZO Bags has been our trusted manufacturing partner for over 5 years. Their quality and reliability are unmatched.",
    author: "Fashion Retail Group",
    role: "Procurement Director",
  },
  {
    quote: "The customization capabilities and attention to detail make OZO our go-to manufacturer for premium bag collections.",
    author: "Luxury Brand International",
    role: "Product Manager",
  },
  {
    quote: "Consistent quality, timely delivery, and excellent service. OZO understands the needs of wholesale buyers.",
    author: "Global Distribution Co.",
    role: "Sourcing Manager",
  },
];

export const OurClients = () => {
  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Valued Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading retailers, brands, and distributors worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            return (
              <Card
                key={client.title}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-accent border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-display font-bold text-primary mb-2">
                  {client.count}
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {client.title}
                </h3>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="font-display text-3xl font-bold text-primary text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl text-accent mb-4">"</div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

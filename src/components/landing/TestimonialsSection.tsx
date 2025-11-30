import { Star } from "lucide-react";

const testimonials = [
  {
    content: "To narzędzie całkowicie zmieniło sposób, w jaki pracujemy. Nasza produktywność wzrosła o 40% w ciągu pierwszego miesiąca.",
    author: "Anna Kowalska",
    role: "CEO, TechStart",
    avatar: "AK",
  },
  {
    content: "Intuicyjny interfejs i potężne funkcje. Wreszcie znaleźliśmy narzędzie, które rozumie potrzeby nowoczesnego zespołu.",
    author: "Michał Nowak",
    role: "Product Manager, InnovateLab",
    avatar: "MN",
  },
  {
    content: "Wsparcie techniczne na najwyższym poziomie. Każdy problem rozwiązywany jest błyskawicznie i profesjonalnie.",
    author: "Katarzyna Wiśniewska",
    role: "CTO, DataFlow",
    avatar: "KW",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Zaufali nam <span className="gradient-text">liderzy branży</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zobacz, co mówią o nas nasi klienci i dlaczego wybrali właśnie nas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed flex-1 mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

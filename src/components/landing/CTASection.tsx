import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-accent/30 blur-[60px]" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Gotowy aby{" "}
                <span className="gradient-text">zacząć?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Dołącz do tysięcy zespołów, które już korzystają z naszego rozwiązania. 
                Rozpocznij za darmo, bez karty kredytowej.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="glow" size="xl" className="group">
                  Rozpocznij za darmo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  Umów demo
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                ✓ 14 dni za darmo &nbsp;&nbsp; ✓ Bez karty kredytowej &nbsp;&nbsp; ✓ Anuluj kiedy chcesz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

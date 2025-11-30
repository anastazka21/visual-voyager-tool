import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Nowa era produktywności</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up text-balance leading-[1.1]"
            style={{ animationDelay: '0.2s' }}
          >
            Twórz{" "}
            <span className="gradient-text">przyszłość</span>
            <br />
            razem z nami
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: '0.3s' }}
          >
            Potężne narzędzia do zarządzania projektami, które pomogą Twojemu zespołowi 
            osiągnąć więcej, szybciej i z większą precyzją.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="glow" size="xl" className="group">
              Rozpocznij za darmo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Zobacz demo
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Aktywnych użytkowników</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Dostępność</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">4.9★</div>
              <div className="text-sm text-muted-foreground mt-1">Ocena użytkowników</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

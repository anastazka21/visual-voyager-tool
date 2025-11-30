import { Zap, Shield, BarChart3, Users, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Błyskawiczna wydajność",
    description: "Zoptymalizowana architektura zapewnia natychmiastową odpowiedź systemu, nawet przy dużym obciążeniu.",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo na pierwszym miejscu",
    description: "Szyfrowanie end-to-end i zgodność z GDPR zapewniają pełną ochronę Twoich danych.",
  },
  {
    icon: BarChart3,
    title: "Zaawansowana analityka",
    description: "Szczegółowe raporty i wizualizacje pomagają podejmować lepsze decyzje biznesowe.",
  },
  {
    icon: Users,
    title: "Współpraca w czasie rzeczywistym",
    description: "Pracuj ze swoim zespołem jednocześnie, z natychmiastową synchronizacją zmian.",
  },
  {
    icon: Clock,
    title: "Automatyzacja procesów",
    description: "Zautomatyzuj powtarzalne zadania i skup się na tym, co naprawdę ważne.",
  },
  {
    icon: Globe,
    title: "Globalny zasięg",
    description: "Serwery na całym świecie zapewniają niskie opóźnienia dla Twoich użytkowników.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/10 blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wszystko czego <span className="gradient-text">potrzebujesz</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kompletny zestaw narzędzi do zarządzania projektami, stworzony z myślą o nowoczesnych zespołach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-6 glow-effect transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

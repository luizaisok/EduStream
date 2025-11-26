import { Button } from "@/components/ui/button";
import { Play, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">50.000 alunos simultâneos</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ensino a Distância{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                em Larga Escala
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Plataforma educacional que suporta até 50.000 alunos simultâneos com streaming estável, 
              recursos interativos em tempo real e análise de desempenho avançada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 shadow-medium hover:shadow-large transition-all">
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Users className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">70%</p>
                <p className="text-sm text-muted-foreground">Acesso Mobile</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">&lt;100ms</p>
                <p className="text-sm text-muted-foreground">Latência</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Estudantes usando a plataforma EduStream" 
              className="relative rounded-2xl shadow-large w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

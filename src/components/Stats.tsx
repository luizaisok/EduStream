import { Users, PlayCircle, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Alunos Simultâneos",
    description: "Capacidade máxima testada",
  },
  {
    icon: PlayCircle,
    value: "99.9%",
    label: "Uptime Garantido",
    description: "Streaming estável e confiável",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "Mais Engajamento",
    description: "Comparado a plataformas tradicionais",
  },
  {
    icon: Award,
    value: "100+",
    label: "Instituições",
    description: "Confiam na EduStream",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Números que Impressionam
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Resultados comprovados em escala global
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/20">
                <stat.icon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg font-semibold mb-1">{stat.label}</p>
                <p className="text-sm opacity-80">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

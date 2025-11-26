import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, MessageSquare, BarChart3, Globe, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Streaming em Larga Escala",
    description: "Suporte para até 50.000 alunos simultâneos com CDN global e baixa latência.",
  },
  {
    icon: MessageSquare,
    title: "Interatividade em Tempo Real",
    description: "Chat ao vivo, enquetes instantâneas e Q&A integrados para máximo engajamento.",
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Acompanhe o progresso e desempenho dos alunos com dashboards em tempo real.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Suporte multi-idioma e sincronização de fusos horários para audiência mundial.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Interface otimizada para 70% dos usuários que acessam via dispositivos móveis.",
  },
  {
    icon: Zap,
    title: "Gamificação Integrada",
    description: "Sistema de conquistas, badges e rankings para aumentar o engajamento.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Recursos que{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Transformam
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta para criar experiências educacionais memoráveis
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-medium animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

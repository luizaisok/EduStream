import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "Para Instituições de Ensino",
    items: [
      "Escalabilidade sem limites técnicos",
      "Redução de custos com infraestrutura",
      "Analytics detalhado de performance",
      "Suporte técnico 24/7",
    ],
  },
  {
    title: "Para Professores",
    items: [
      "Ferramentas de engajamento em tempo real",
      "Avaliações automatizadas",
      "Feedback instantâneo dos alunos",
      "Interface intuitiva e fácil de usar",
    ],
  },
  {
    title: "Para Alunos",
    items: [
      "Acesso de qualquer dispositivo",
      "Experiência fluida mesmo em redes lentas",
      "Gamificação e progresso visível",
      "Interação com colegas e professores",
    ],
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Benefícios para{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Todos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma solução completa que atende as necessidades de cada stakeholder
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 border-border/50 hover:border-primary/50 hover:shadow-medium transition-all animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {benefit.title}
              </h3>
              <ul className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

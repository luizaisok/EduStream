import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para Revolucionar seu{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Ensino Online?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Junte-se a mais de 100 instituições que já confiam na EduStream para 
            levar educação de qualidade a milhares de alunos simultaneamente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 shadow-medium hover:shadow-large transition-all">
              Agendar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Contato Comercial
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Sem compromisso • Setup em 24h • Suporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

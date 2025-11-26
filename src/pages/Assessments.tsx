import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ClipboardCheck, 
  Plus, 
  FileText, 
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Download
} from "lucide-react";
import Header from "@/components/Header";
import { toast } from "sonner";

const assessments = [
  {
    id: 1,
    title: "Prova Final - Python Básico",
    course: "Introdução à Programação Python",
    questions: 20,
    duration: 60,
    date: "2025-01-25",
    status: "active",
    submissions: 187,
    totalStudents: 245,
    avgScore: 8.3,
  },
  {
    id: 2,
    title: "Quiz - JavaScript Módulo 3",
    course: "JavaScript Avançado",
    questions: 10,
    duration: 30,
    date: "2025-01-22",
    status: "completed",
    submissions: 189,
    totalStudents: 189,
    avgScore: 9.1,
  },
  {
    id: 3,
    title: "Projeto Final - React",
    course: "React Fundamentals",
    questions: 5,
    duration: 120,
    date: "2025-01-28",
    status: "scheduled",
    submissions: 0,
    totalStudents: 312,
    avgScore: 0,
  },
];

const studentSubmissions = [
  {
    id: 1,
    student: "Maria Silva",
    assessment: "Prova Final - Python Básico",
    score: 9.5,
    status: "graded",
    submittedAt: "2025-01-20 14:30",
  },
  {
    id: 2,
    student: "João Pedro",
    assessment: "Prova Final - Python Básico",
    score: 7.8,
    status: "graded",
    submittedAt: "2025-01-20 15:15",
  },
  {
    id: 3,
    student: "Ana Costa",
    assessment: "Quiz - JavaScript Módulo 3",
    score: 0,
    status: "pending",
    submittedAt: "2025-01-22 10:45",
  },
];

const Assessments = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleCreateAssessment = () => {
    toast.success("Criando nova avaliação...");
  };

  const handleGrade = (studentName: string) => {
    toast.success(`Corrigindo avaliação de ${studentName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Sistema de Avaliações</h1>
              <p className="text-muted-foreground">Crie, gerencie e corrija avaliações automaticamente</p>
            </div>
            <Button size="lg" className="shadow-medium" onClick={handleCreateAssessment}>
              <Plus className="mr-2 h-5 w-5" />
              Nova Avaliação
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8 animate-slide-up">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4" />
                Total de Avaliações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{assessments.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Pendentes de Correção
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                {studentSubmissions.filter(s => s.status === "pending").length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Média Geral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8.5</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Taxa de Conclusão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">87%</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="active">Ativas</TabsTrigger>
            <TabsTrigger value="submissions">Submissões</TabsTrigger>
          </TabsList>

          {/* All Assessments */}
          <TabsContent value="all" className="space-y-4 animate-fade-in">
            {assessments.map((assessment, index) => (
              <Card 
                key={assessment.id} 
                className="hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{assessment.title}</CardTitle>
                        <Badge variant={
                          assessment.status === "active" ? "default" : 
                          assessment.status === "completed" ? "secondary" : 
                          "outline"
                        }>
                          {assessment.status === "active" ? "Ativa" : 
                           assessment.status === "completed" ? "Finalizada" : "Agendada"}
                        </Badge>
                      </div>
                      <CardDescription className="mb-3">{assessment.course}</CardDescription>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {assessment.questions} questões
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {assessment.duration} minutos
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(assessment.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Submissões</span>
                      <span className="font-semibold">
                        {assessment.submissions} / {assessment.totalStudents}
                      </span>
                    </div>
                    <Progress 
                      value={(assessment.submissions / assessment.totalStudents) * 100} 
                      className="h-2" 
                    />
                  </div>

                  {assessment.avgScore > 0 && (
                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-sm text-muted-foreground">Média da Turma</span>
                      <span className="text-2xl font-bold text-accent">{assessment.avgScore.toFixed(1)}</span>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" className="flex-1">
                      <FileText className="mr-2 h-4 w-4" />
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Exportar Notas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Active Assessments */}
          <TabsContent value="active" className="animate-fade-in">
            <div className="space-y-4">
              {assessments.filter(a => a.status === "active").map((assessment, index) => (
                <Card key={assessment.id} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardHeader>
                    <CardTitle>{assessment.title}</CardTitle>
                    <CardDescription>{assessment.course}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Submissões Ativas</p>
                        <p className="text-2xl font-bold">{assessment.submissions}</p>
                      </div>
                      <Button>Gerenciar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Submissions */}
          <TabsContent value="submissions" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Últimas Submissões</CardTitle>
                <CardDescription>Avaliações aguardando correção</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studentSubmissions.map((submission, index) => (
                    <div 
                      key={submission.id} 
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/50 transition-colors animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-semibold text-primary">
                          {submission.student.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{submission.student}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{submission.assessment}</p>
                          <p className="text-xs text-muted-foreground">{submission.submittedAt}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {submission.status === "graded" ? (
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground mb-1">Nota</p>
                            <p className="text-2xl font-bold text-accent">{submission.score.toFixed(1)}</p>
                          </div>
                        ) : (
                          <Badge variant="outline" className="gap-1">
                            <Clock className="h-3 w-3" />
                            Pendente
                          </Badge>
                        )}
                        
                        <Button 
                          variant={submission.status === "pending" ? "default" : "outline"}
                          onClick={() => handleGrade(submission.student)}
                        >
                          {submission.status === "pending" ? "Corrigir" : "Revisar"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Assessments;

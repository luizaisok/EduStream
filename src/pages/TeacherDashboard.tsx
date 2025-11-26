import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Video, 
  BarChart3, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  Clock,
  Play
} from "lucide-react";
import Header from "@/components/Header";

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Dashboard do Professor</h1>
          <p className="text-muted-foreground">Gerencie suas aulas e acompanhe o desempenho dos alunos</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8 animate-slide-up">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Total de Alunos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,284</div>
              <p className="text-xs text-accent flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +12% este mês
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Video className="h-4 w-4" />
                Aulas Ministradas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">47</div>
              <p className="text-xs text-muted-foreground mt-1">Últimos 30 dias</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Taxa de Aprovação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">92%</div>
              <p className="text-xs text-muted-foreground mt-1">Média geral: 8.5</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Mensagens Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">23</div>
              <Button variant="link" className="p-0 h-auto text-xs mt-1">
                Ver mensagens
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList>
            <TabsTrigger value="schedule">Agenda</TabsTrigger>
            <TabsTrigger value="live">Ao Vivo</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-4 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Próximas Aulas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Programação Python - Módulo 3", time: "Hoje, 14:00", students: 245, status: "confirmed" },
                    { title: "JavaScript Avançado", time: "Hoje, 16:00", students: 189, status: "confirmed" },
                    { title: "React Fundamentals", time: "Amanhã, 10:00", students: 312, status: "scheduled" },
                  ].map((aula, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/50 transition-colors">
                      <div>
                        <h4 className="font-semibold mb-1">{aula.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {aula.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {aula.students} alunos
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {aula.status === "confirmed" && (
                          <Badge className="bg-accent">Confirmado</Badge>
                        )}
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-1" />
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    Ver Calendário Completo
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { student: "Maria Santos", action: "entregou a tarefa", course: "Python Básico", time: "5 min atrás" },
                    { student: "João Silva", action: "fez uma pergunta", course: "JavaScript", time: "12 min atrás" },
                    { student: "Ana Costa", action: "completou o módulo", course: "React", time: "1 hora atrás" },
                    { student: "Pedro Lima", action: "enviou feedback", course: "Python Avançado", time: "2 horas atrás" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {activity.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-semibold">{activity.student}</span>{' '}
                          {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.course} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Live Tab */}
          <TabsContent value="live" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Controle de Transmissão ao Vivo</CardTitle>
                <CardDescription>Gerencie sua aula em tempo real</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Video className="h-16 w-16 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-semibold mb-2">Nenhuma transmissão ativa</p>
                      <Button size="lg">
                        <Play className="mr-2 h-5 w-5" />
                        Iniciar Transmissão
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Espectadores Online</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">0</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Mensagens no Chat</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">0</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Perguntas Ativas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">0</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Desempenho por Curso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Python Básico", students: 245, avg: 8.7, completion: 85 },
                    { name: "JavaScript Avançado", students: 189, avg: 9.1, completion: 78 },
                    { name: "React Fundamentals", students: 312, avg: 8.3, completion: 92 },
                  ].map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{course.name}</span>
                        <span className="text-sm text-muted-foreground">{course.students} alunos</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex-1">
                          <span className="text-muted-foreground">Média: </span>
                          <span className="font-semibold text-accent">{course.avg}</span>
                        </div>
                        <div className="flex-1">
                          <span className="text-muted-foreground">Conclusão: </span>
                          <span className="font-semibold">{course.completion}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engajamento Semanal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[65, 78, 82, 75, 88, 92, 85].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-primary rounded-t hover:bg-primary/80 transition-colors cursor-pointer"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TeacherDashboard;

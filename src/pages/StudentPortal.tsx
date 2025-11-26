import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, CheckCircle, Trophy, MessageSquare } from "lucide-react";
import Header from "@/components/Header";

const courses = [
  {
    id: 1,
    title: "Introdução à Programação",
    instructor: "Prof. Carlos Silva",
    progress: 75,
    nextClass: "Hoje, 14:00",
    status: "live",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
  },
  {
    id: 2,
    title: "Matemática Avançada",
    instructor: "Prof. Ana Santos",
    progress: 45,
    nextClass: "Amanhã, 10:00",
    status: "upcoming",
    thumbnail: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400",
  },
  {
    id: 3,
    title: "Física Quântica",
    instructor: "Prof. Roberto Lima",
    progress: 90,
    nextClass: "Quinta, 16:00",
    status: "completed",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
  },
];

const StudentPortal = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Portal do Aluno</h1>
          <p className="text-muted-foreground">Bem-vindo de volta! Continue seus estudos.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8 animate-slide-up">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cursos Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Horas Estudadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">127</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Média Geral</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">8.7</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Conquistas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-accent" />
                <div className="text-3xl font-bold">12</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Meus Cursos</h2>
            
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className={`cursor-pointer hover:border-primary/50 transition-all animate-slide-up ${
                  selectedCourse.id === course.id ? 'border-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCourse(course)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle>{course.title}</CardTitle>
                          {course.status === "live" && (
                            <Badge className="bg-destructive">AO VIVO</Badge>
                          )}
                        </div>
                        <CardDescription className="mb-2">
                          {course.instructor}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{course.nextClass}</span>
                        </div>
                      </div>
                    </div>
                    
                    {course.status === "live" ? (
                      <Button>
                        <Play className="mr-2 h-4 w-4" />
                        Entrar
                      </Button>
                    ) : course.status === "completed" ? (
                      <CheckCircle className="h-6 w-6 text-accent" />
                    ) : (
                      <Button variant="outline">Ver Detalhes</Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Live Class Preview */}
          <div className="space-y-4">
            <Card className="border-primary/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Aula ao Vivo</CardTitle>
                  <Badge className="bg-destructive animate-pulse">LIVE</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <Play className="h-12 w-12 text-muted-foreground" />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">{selectedCourse.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedCourse.instructor}</p>
                </div>
                
                <Button className="w-full" size="lg">
                  <Play className="mr-2 h-5 w-5" />
                  Entrar na Aula
                </Button>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Participantes online</span>
                  <span className="font-semibold">2,847</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentPortal;

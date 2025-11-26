import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Users, 
  Video,
  BookOpen,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Header from "@/components/Header";
import { toast } from "sonner";

const courses = [
  {
    id: 1,
    title: "Introdução à Programação Python",
    description: "Aprenda os fundamentos da programação com Python",
    instructor: "Prof. Carlos Silva",
    students: 245,
    lessons: 24,
    duration: "8 semanas",
    status: "active",
    category: "Programação",
  },
  {
    id: 2,
    title: "JavaScript Avançado",
    description: "Conceitos avançados de JavaScript moderno",
    instructor: "Prof. Ana Santos",
    students: 189,
    lessons: 18,
    duration: "6 semanas",
    status: "active",
    category: "Programação",
  },
  {
    id: 3,
    title: "React Fundamentals",
    description: "Construa aplicações web com React",
    instructor: "Prof. Roberto Lima",
    students: 312,
    lessons: 20,
    duration: "7 semanas",
    status: "draft",
    category: "Desenvolvimento Web",
  },
  {
    id: 4,
    title: "Data Science com Python",
    description: "Análise de dados e machine learning",
    instructor: "Prof. Maria Oliveira",
    students: 156,
    lessons: 30,
    duration: "10 semanas",
    status: "active",
    category: "Data Science",
  },
];

const CourseManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (courseId: number, courseName: string) => {
    toast.success(`Curso "${courseName}" removido com sucesso!`);
  };

  const handleEdit = (courseName: string) => {
    toast.info(`Editando curso "${courseName}"`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Gerenciamento de Cursos</h1>
              <p className="text-muted-foreground">Crie e gerencie todos os seus cursos</p>
            </div>
            <Button size="lg" className="shadow-medium">
              <Plus className="mr-2 h-5 w-5" />
              Novo Curso
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8 animate-slide-up">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{courses.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cursos Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                {courses.filter(c => c.status === "active").length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Alunos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {courses.reduce((sum, c) => sum + c.students, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Aulas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {courses.reduce((sum, c) => sum + c.lessons, 0)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar cursos..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">Filtros</Button>
            </div>
          </CardContent>
        </Card>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCourses.map((course, index) => (
            <Card 
              key={course.id} 
              className="hover:border-primary/50 transition-all hover:shadow-medium animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <Badge variant={course.status === "active" ? "default" : "secondary"}>
                        {course.status === "active" ? "Ativo" : "Rascunho"}
                      </Badge>
                    </div>
                    <CardDescription className="mb-3">{course.description}</CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.category}</span>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(course.title)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-destructive"
                        onClick={() => handleDelete(course.id, course.title)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students} alunos</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Video className="h-4 w-4" />
                    <span>{course.lessons} aulas</span>
                  </div>
                  <span className="text-muted-foreground">{course.duration}</span>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Instrutor</p>
                  <p className="font-medium">{course.instructor}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Nenhum curso encontrado</h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar sua busca ou crie um novo curso
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Criar Primeiro Curso
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default CourseManagement;

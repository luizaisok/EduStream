import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EduStream
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/portal-aluno" className="text-foreground hover:text-primary transition-colors">
              Portal do Aluno
            </Link>
            <Link to="/dashboard-professor" className="text-foreground hover:text-primary transition-colors">
              Professor
            </Link>
            <Link to="/gerenciar-cursos" className="text-foreground hover:text-primary transition-colors">
              Cursos
            </Link>
            <Link to="/avaliacoes" className="text-foreground hover:text-primary transition-colors">
              Avaliações
            </Link>
            <Link to="/chat" className="text-foreground hover:text-primary transition-colors">
              Chat
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/portal-aluno" className="w-full">Portal do Aluno</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard-professor" className="w-full">Professor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gerenciar-cursos" className="w-full">Cursos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/avaliacoes" className="w-full">Avaliações</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/chat" className="w-full">Chat</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" className="hidden md:inline-flex">
              Login
            </Button>
            <Button>Começar Agora</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

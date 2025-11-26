import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Send,
  Users,
  MessageSquare,
  ThumbsUp,
  Smile,
  Image as ImageIcon,
  Paperclip
} from "lucide-react";
import Header from "@/components/Header";
import { toast } from "sonner";

const messages = [
  {
    id: 1,
    user: "Maria Silva",
    message: "Boa tarde professor! Poderia explicar novamente o conceito de closures?",
    timestamp: "14:23",
    likes: 5,
    avatar: "MS",
  },
  {
    id: 2,
    user: "João Pedro",
    message: "Também tenho essa dúvida!",
    timestamp: "14:24",
    likes: 3,
    avatar: "JP",
  },
  {
    id: 3,
    user: "Prof. Carlos Silva",
    message: "Claro! Vou compartilhar um exemplo prático agora mesmo.",
    timestamp: "14:25",
    likes: 12,
    avatar: "CS",
    isInstructor: true,
  },
];

const activeUsers = [
  { name: "Maria Silva", avatar: "MS", status: "online" },
  { name: "João Pedro", avatar: "JP", status: "online" },
  { name: "Ana Costa", avatar: "AC", status: "online" },
  { name: "Pedro Lima", avatar: "PL", status: "online" },
  { name: "Lucas Santos", avatar: "LS", status: "online" },
  { name: "Carla Mendes", avatar: "CM", status: "away" },
];

const LiveChat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        user: "Você",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        likes: 0,
        avatar: "VC",
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage("");
      toast.success("Mensagem enviada!");
    }
  };

  const handleLike = (messageId: number) => {
    setChatMessages(
      chatMessages.map((msg) =>
        msg.id === messageId ? { ...msg, likes: msg.likes + 1 } : msg
      )
    );
    toast.success("👍 Curtido!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-12">

        {/* --- VÍDEO AO VIVO --- */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* TÍTULO */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Chat em Tempo Real</h1>
          <p className="text-muted-foreground">
            Interaja com professores e colegas durante as aulas ao vivo
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* ÁREA DO CHAT */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="h-[calc(100vh-300px)] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Chat da Aula - Python Básico
                  </CardTitle>
                  <Badge className="bg-destructive animate-pulse">AO VIVO</Badge>
                </div>
              </CardHeader>

              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={msg.id}
                      className="flex gap-3 animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Avatar>
                        <AvatarFallback
                          className={
                            msg.isInstructor
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }
                        >
                          {msg.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{msg.user}</span>
                          {msg.isInstructor && (
                            <Badge variant="secondary" className="text-xs">
                              Professor
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {msg.timestamp}
                          </span>
                        </div>

                        <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                          <p className="text-sm">{msg.message}</p>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-1 text-xs gap-1"
                          onClick={() => handleLike(msg.id)}
                        >
                          <ThumbsUp className="h-3 w-3" />
                          {msg.likes > 0 && <span>{msg.likes}</span>}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <CardContent className="border-t pt-4">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Smile className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>

                  <Input
                    placeholder="Digite sua mensagem..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />

                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* LATERAL */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Participantes ({activeUsers.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-400px)]">
                  <div className="space-y-3">
                    {activeUsers.map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarFallback>{user.avatar}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                              user.status === "online"
                                ? "bg-accent"
                                : "bg-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.status === "online" ? "Online" : "Ausente"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Regras do Chat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p>• Seja respeitoso com todos</p>
                <p>• Mantenha o foco na aula</p>
                <p>• Evite spam de mensagens</p>
                <p>• Use reações ao invés de múltiplas mensagens</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiveChat;

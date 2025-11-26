import { QueryClient } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudentPortal from "./pages/StudentPortal";
import TeacherDashboard from "./pages/TeacherDashboard";
import CourseManagement from "./pages/CourseManagement";
import Assessments from "./pages/Assessments";
import LiveChat from "./pages/LiveChat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/portal-aluno" element={<StudentPortal />} />
    <Route path="/dashboard-professor" element={<TeacherDashboard />} />
    <Route path="/gerenciar-cursos" element={<CourseManagement />} />
    <Route path="/avaliacoes" element={<Assessments />} />
    <Route path="/chat" element={<LiveChat />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;

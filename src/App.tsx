
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/app/core/auth/state/auth.state";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import InterviewPage from "@/pages/dashboard/InterviewPage";
import JobPostingsPage from "@/pages/dashboard/JobPostingsPage";
import UsersManagementPage from "@/pages/dashboard/UsersManagementPage";
import JobApplicationsPage from "@/pages/dashboard/JobApplicationsPage";
import CandidatesPage from "@/pages/dashboard/CandidatesPage";
import SettingsPage from "@/pages/dashboard/SettingsPage";
import StatisticsPage from "@/pages/dashboard/StatisticsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/interviews" element={<InterviewPage />} />
            <Route path="/dashboard/practice" element={<InterviewPage />} />
            
            {/* Admin Routes */}
            <Route path="/dashboard/users" element={<UsersManagementPage />} />
            <Route path="/dashboard/statistics" element={<StatisticsPage />} />
            
            {/* Recruiter Routes */}
            <Route path="/dashboard/candidates" element={<CandidatesPage />} />
            <Route path="/dashboard/jobs" element={<JobPostingsPage />} />
            
            {/* Candidate Routes */}
            <Route path="/dashboard/applications" element={<JobApplicationsPage />} />
            
            {/* Common Routes */}
            <Route path="/dashboard/settings" element={<SettingsPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

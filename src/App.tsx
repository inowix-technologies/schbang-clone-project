import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EngagementOrchestrator } from "@/components/planner/EngagementOrchestrator";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Marketing from "./pages/Marketing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Growth from "./pages/growth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <EngagementOrchestrator>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/*" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/build-with-inwoix" element={<Growth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter> 
      </EngagementOrchestrator>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

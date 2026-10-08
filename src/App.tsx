import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { EngagementOrchestrator } from "@/components/planner/EngagementOrchestrator";

import ScrollToTop from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Admin = lazy(() => import("./pages/Admin"));
const Auth = lazy(() => import("./pages/Auth"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Hackathon = lazy(() => import("./pages/Hackathon"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const Services = lazy(() => import("./pages/Services"));
const AiAutomation = lazy(() => import("./pages/ai-automation/AiAutomation"));
const AiAutomationThankYou = lazy(() => import("./pages/ai-automation/AiAutomationThankYou"));
const HealthcarePlatforms = lazy(() => import("./pages/healthcare-platforms/HealthcarePlatforms"));
const HealthcareThankYou = lazy(() => import("./pages/healthcare-platforms/HealthcareThankYou"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <EngagementOrchestrator>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/solutions" element={<Navigate to="/services" replace />} />
              <Route path="/solutions/*" element={<Navigate to="/services" replace />} />
              <Route path="/marketing" element={<Navigate to="/" replace />} />
              <Route path="/resources" element={<Navigate to="/blogs" replace />} />
              <Route path="/build-with-inwoix" element={<Navigate to="/contact-us" replace />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/services/:slug" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ai-automation" element={<AiAutomation />} />
              <Route path="/ai-automation/thank-you" element={<AiAutomationThankYou />} />
              <Route path="/healthcare-platforms" element={<HealthcarePlatforms />} />
              <Route path="/healthcare-platforms/thank-you" element={<HealthcareThankYou />} />
              <Route path="/CodetoCareer" element={<Hackathon />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </EngagementOrchestrator>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

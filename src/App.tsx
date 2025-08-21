import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import GenerativeAI from "./pages/GenerativeAI";
import DataEngineering from "./pages/DataEngineering";
import WebDevelopment from "./pages/WebDevelopment";
import DevOps from "./pages/DevOps";
import MobileDevelopment from "./pages/MobileDevelopment";
import CloudInfrastructure from "./pages/CloudInfrastructure";
import Skills from "./pages/Skills";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/generative-ai" element={<GenerativeAI />} />
          <Route path="/services/data-engineering" element={<DataEngineering />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

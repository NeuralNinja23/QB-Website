import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  Smartphone,
  Zap,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Code,
  Palette,
  Database,
  Search,
} from "lucide-react";

const WebDevelopment = () => {
  const technicalExpertise = [
    {
      icon: Code,
      title: "AI/ML Integration",
      description: "Revolutionary web applications with intelligent features including recommendation engines, real-time analytics and automation to create smart user experiences.",
    },
    {
      icon: Database,
      title: "Data-Driven Platforms", 
      description: "Scalable platforms for automated blog writing and big data management to seamlessly to capture and leverage business insights.",
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "WooCommerce-focused solutions that power online retail with security, scalability and a seamless checkout experience.",
    },
    {
      icon: Shield,
      title: "Responsive & Accessible",
      description: "Design for mobile-first, ensuring compliance and inclusivity with responsive design and seamless Web Access experience.",
    },
    {
      icon: Search,
      title: "Enterprise & Custom Solutions",
      description: "From simple business sites to complex web applications, our team adapts to your unique requirements.",
    },
    {
      icon: Zap,
      title: "Security & Performance",
      description: "Implement best practices for lightning-fast load times and optimize performance for lightning-fast user experience.",
    },
  ];

  const whyChoose = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Creative UI/UX designers, critical-thinking developers, and meticulous QA specialists dedicated to your success",
    },
    {
      icon: TrendingUp,
      title: "End-to-End Support",
      description: "From initial concept to post-launch optimization, we're with you at every step",
    },
    {
      icon: Zap,
      title: "Agile Approach",
      description: "Flexible, iterative development that keeps you in control and adapts to change",
    },
    {
      icon: Shield,
      title: "Trusted by Leaders",
      description: "Serving startups, SMBs, and enterprises across industries with a proven track record of excellence",
    },
  ];

  const customizationHighlights = [
    {
      title: "Python Development",
      description: "Custom web apps, APIs and AI/ML applications using Django, Flask and FastAPI",
      image: "🐍",
    },
    {
      title: "React JS",
      description: "Dynamic, high-performance user interfaces with seamless and instant frameworks",
      image: "⚛️", 
    },
    {
      title: "Node.js",
      description: "Backend services, real-time applications, and microservices architecture",
      image: "🟢",
    },
    {
      title: "UI/UX Design",
      description: "User-centric data-informed design that maximizes engagement and conversions",
      image: "🎨",
    },
    {
      title: "E-Commerce",
      description: "Secure, feature-rich online stores with AI-powered recommendations and customer platforms",
      image: "🛒",
    },
    {
      title: "Maintenance & Security",
      description: "Proactive monitoring, regular backups, and robust security for your digital assets",
      image: "🔒",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="bg-gradient-primary text-white">
              🌐 Intelligent, Scalable, Future-Ready
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Web Development</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Accelerate your digital journey with QuantumBot's award-winning web development services. We 
              combine cutting-edge engineering, data-driven design, and AI-powered features to deliver websites 
              and web applications that are fast, secure, and truly innovative—ensuring your business stands out in 
              the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose QuantumBot */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">QuantumBot</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border text-center hover:shadow-neural transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-neural rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customization & Technology Highlights */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Customization & <span className="gradient-text">Technology Highlights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customizationHighlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="text-4xl text-center">{highlight.image}</div>
                  <div className="space-y-3 text-center">
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Partner with QuantumBot and transform your digital presence—combining the power of web, data, and AI to unlock new 
              opportunities for your business.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery & Strategy", description: "We analyze your business goals and technical requirements" },
              { step: "2", title: "Design & Planning", description: "Creating user-focused designs and detailed development roadmaps" }, 
              { step: "3", title: "Development & Integration", description: "Building with modern technologies and seamless integrations" },
              { step: "4", title: "Launch & Optimization", description: "Deploying your solution with ongoing support and optimization" },
            ].map((process, index) => (
              <Card key={index} className="bg-card/50 cyber-border text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto text-xl font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our web development expertise can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
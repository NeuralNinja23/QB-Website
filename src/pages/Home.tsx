import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-brain.jpg";
import {
  Brain,
  Zap,
  Shield,
  Rocket,
  Users,
  TrendingUp,
  Clock,
  Award,
  ChevronRight,
  Star,
  Globe,
  Database,
  Code,
  Smartphone,
  Cloud,
  Cpu,
  BarChart3,
} from "lucide-react";

const Home = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Rocket },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "AI Models Deployed", icon: Brain },
    { number: "1M+", label: "Data Points Processed", icon: Database },
  ];

  const services = [
    {
      icon: Brain,
      title: "Generative AI",
      description: "Advanced AI models for content creation, design automation, and intelligent solutions",
      color: "primary",
      href: "/services/generative-ai",
    },
    {
      icon: Database,
      title: "Data Engineering", 
      description: "Scalable data pipelines, ETL processes, and real-time analytics infrastructure",
      color: "neural",
      href: "/services/data-engineering",
    },
    {
      icon: Zap,
      title: "DevOps & AI",
      description: "AI-powered DevOps automation, deployment optimization, and system monitoring",
      color: "secondary",
      href: "/services/devops",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications with AI integration and advanced features", 
      color: "accent",
      href: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with AI capabilities and seamless user experiences",
      color: "quantum",
      href: "/services/mobile-development",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, microservices architecture, and enterprise platforms",
      color: "neural",
      href: "/services/cloud-infrastructure",
    },
  ];

  const domains = [
    { title: "Healthcare AI", icon: "🏥", description: "AI-powered medical diagnosis and treatment optimization" },
    { title: "Fintech Solutions", icon: "💰", description: "Intelligent financial analytics and risk assessment" },
    { title: "E-commerce AI", icon: "🛒", description: "Personalized shopping experiences and inventory optimization" },
    { title: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control automation" },
    { title: "Education Tech", icon: "🎓", description: "Adaptive learning platforms and educational analytics" },
    { title: "Smart Cities", icon: "🏙️", description: "IoT integration and urban intelligence systems" },
    { title: "Cybersecurity", icon: "🔒", description: "AI-driven threat detection and security automation" },
    { title: "Media & Entertainment", icon: "🎬", description: "Content generation and audience analytics" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "👩‍💼",
      rating: 5,
      text: "QuantumBot's AI solutions have transformed our business operations. Their team delivered exceptional results that exceeded our expectations.",
    },
    {
      name: "Marcus Chen", 
      role: "CEO, InnovateLab",
      avatar: "👨‍💻",
      rating: 5,
      text: "The AI implementation was flawless. We've seen a 300% increase in efficiency and our customers love the new intelligent features.",
    },
    {
      name: "Elena Rodriguez",
      role: "Data Director, FinanceX",
      avatar: "👩‍🔬", 
      rating: 5,
      text: "Working with QuantumBot has given us a competitive edge in predictive analytics that our competitors simply can't match.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-gradient-primary text-white">
                🚀 Next-Generation AI Solutions
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  Think AI,{" "}
                  <span className="gradient-text">Think QB</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Unleash the power of artificial intelligence to transform your business. 
                  Our cutting-edge AI solutions drive innovation, efficiency, and growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow quantum-glow text-lg px-8"
                  asChild
                >
                  <Link to="/services">
                    Explore Services <ChevronRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="cyber-border text-lg px-8"
                  asChild
                >
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96 float-animation">
                <img 
                  src={heroImage} 
                  alt="AI Brain Network" 
                  className="w-full h-full object-cover rounded-2xl quantum-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border text-center">
                  <CardContent className="p-6 space-y-3">
                    <Icon className="w-8 h-8 text-primary mx-auto" />
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">AI Solutions</span> Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to help businesses leverage the power of artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.href}>
                  <Card className="group bg-card/50 cyber-border hover:shadow-glow transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8 space-y-6">
                      <div className={`w-16 h-16 bg-gradient-${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Innovation Domains */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              AI Innovation <span className="gradient-text">Domains</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the industries we're transforming with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-neural transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl mb-2">{domain.icon}</div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {domain.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 cyber-border">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
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
              Ready to Transform Your Business with <span className="gradient-text">AI</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our AI solutions can address your specific challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow quantum-glow text-lg px-8"
                asChild
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="cyber-border text-lg px-8"
                asChild
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
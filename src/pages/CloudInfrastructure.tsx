import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Server,
  Cloud,
  Database,
  Shield,
  Layers,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const CloudInfrastructure = () => {
  const services = [
    {
      icon: Server,
      title: "AWS Architecture",
      description: "Design and deploy scalable, secure cloud architecture on Amazon Web Services. We deliver AWS solutions for optimal performance, cost-efficiency, and compliance—giving you the flexibility to grow at your pace."
    },
    {
      icon: Cloud,
      title: "Cloud Migration", 
      description: "Simplify the journey to the cloud. Our experts deliver seamless and secure migration for your applications, workloads, and data—minimizing downtime, preserving data integrity, and ensuring business continuity every step of the way."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Optimize your data foundation. From high-availability SQL to flexible NoSQL solutions, we manage, monitor, and fine-tune your databases for maximum performance and reliability—whatever your scale."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Safeguard your technology environment. Our comprehensive cybersecurity services protect your systems, applications, and data with layered, industry-leading defense mechanisms—so you can operate with confidence."
    }
  ];

  const technologyExpertise = [
    "React.js, Node.js, Python",
    "AWS & DevOps best practices", 
    "UI/UX design",
    "React Native, MERN stack",
    ".NET MVC, .NET Core"
  ];

  const whyChooseUs = [
    {
      icon: Layers,
      title: "Integrated Solutions",
      description: "From infrastructure to application, all under one roof"
    },
    {
      icon: Zap,
      title: "Future-Proof Scalability", 
      description: "Architected for today and tomorrow"
    },
    {
      icon: Lock,
      title: "Ironclad Security",
      description: "Proactive, industry-standard protection excellence"
    },
    {
      icon: Globe,
      title: "Business Aligned",
      description: "We focus on real results—speed, resilience, cost control, and user experience"
    }
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
              ☁️ Future-Ready Infrastructure
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              Cloud & Infrastructure <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empower your business with future-ready, scalable infrastructure and robust cloud solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Technology <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team blends deep technical capability with real-world business acumen. 
                We bring together:
              </p>
              
              <div className="space-y-4">
                {technologyExpertise.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground mt-8">
                This unique combination enables us to architect, build, and secure integrated 
                solutions that solve your most complex challenges.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-hero rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6">
                  {[Server, Cloud, Database, Shield].map((Icon, index) => (
                    <div 
                      key={index} 
                      className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border text-center hover:shadow-neural transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border border-primary/20 rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-1/4 right-1/4">
            <Cloud className="w-8 h-8 text-primary/30 animate-pulse" />
          </div>
          <div className="absolute bottom-1/3 left-1/4">
            <Server className="w-6 h-6 text-secondary/30 animate-pulse" />
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to transform your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudInfrastructure;
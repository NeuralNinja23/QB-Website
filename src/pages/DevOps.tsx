import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Search,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Brain,
  Code,
  Database,
  Cloud,
} from "lucide-react";

const DevOps = () => {
  const services = [
    {
      icon: Brain,
      title: "AIOps", 
      description: "AI-powered operational intelligence for enhanced system monitoring and management"
    },
    {
      icon: Settings,
      title: "DevOps Consulting",
      description: "Expert guidance on implementing DevOps culture and practices"
    },
    {
      icon: Zap,
      title: "DevOps Automation",
      description: "Streamlined CI/CD pipelines using industry-leading tools and methodologies"
    },
    {
      icon: Shield,
      title: "Site Reliability Engineering", 
      description: "Ensuring application performance, scalability, and resilience"
    },
    {
      icon: BarChart3,
      title: "LLM Observability",
      description: "Specialized monitoring and analytics for language model deployments"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      icon: Search,
      title: "Assess & Plan",
      description: "We analyze your current infrastructure and develop a tailored strategy aligned with your business goals"
    },
    {
      step: "2", 
      icon: Settings,
      title: "Automate & Integrate",
      description: "We implement CI/CD pipelines and integrate AI-powered tools to streamline your development workflow"
    },
    {
      step: "3",
      icon: BarChart3,
      title: "Monitor & Optimize", 
      description: "We continuously monitor performance and implement AI-driven optimizations to enhance system reliability"
    }
  ];

  const successStories = [
    {
      company: "TechNova",
      challenge: "Reduced deployment time by 78% and improved system reliability with our AIOps solution",
      metrics: {
        deploymentTime: "-78%",
        systemUptime: "99.9%", 
        costSavings: "$1.2M"
      }
    },
    {
      company: "FinEdge", 
      challenge: "Implemented CI/CD pipeline that reduced time-to-market by 65% for this fintech leader",
      metrics: {
        timeToMarket: "-65%",
        bugReduction: "87%",
        roi: "340%"
      }
    },
    {
      company: "HealthMatrix",
      challenge: "Enhanced LLM observability for their AI-powered diagnostic platform improving accuracy by 42%",
      metrics: {
        accuracy: "+42%",
        responseTime: "-56%",
        patientOutcomes: "+28%"
      }
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
              🚀 Empowering DevOps with AI-Driven Intelligence
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              Empowering DevOps with <span className="gradient-text">AI-Driven Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Integrating automation, reliability, and AI insights for next-gen operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                View Case Studies
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive DevOps and AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our proven methodology delivers results through a streamlined process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border text-center hover:shadow-neural transition-all duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto text-xl font-bold text-white">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our clients have transformed their operations with our DevOps and AI solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold gradient-text mb-4">{story.company}</h3>
                    <p className="text-muted-foreground text-sm">{story.challenge}</p>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-border">
                    {Object.entries(story.metrics).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          {value}
                        </Badge>
                      </div>
                    ))}
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
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a free consultation with our experts to discuss how our AI-powered DevOps solutions 
              can help your organization achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevOps;
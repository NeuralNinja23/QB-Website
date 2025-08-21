import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/data-engineering-hero.jpg";
import {
  Database,
  Zap,
  BarChart3,
  Shield,
  Clock,
  Settings,
  CheckCircle,
  Star,
  TrendingUp,
  Activity,
  Layers,
  GitBranch,
} from "lucide-react";

const DataEngineering = () => {
  const keyBenefits = [
    {
      icon: Database,
      title: "Seamless Data Integration",
      description: "Connect and harmonize data from diverse sources with automated ETL pipelines and real-time data synchronization.",
    },
    {
      icon: Settings,
      title: "Scalable Pipelines",
      description: "Build for growth with automated scalable pipelines that can handle data volumes from gigabytes to petabytes.",
    },
    {
      icon: Shield,
      title: "Data Quality & Governance",
      description: "Ensure accuracy, consistency and compliance with automated data validation and governance frameworks.",
    },
    {
      icon: Clock,
      title: "Real-Time & Batch Processing",
      description: "Handle streaming and historical data analysis with low-latency processing for real-time insights.",
    },
  ];

  const technicalCapabilities = [
    {
      icon: "💾",
      title: "Data Lakes",
      color: "bg-gradient-primary",
    },
    {
      icon: "⚡",
      title: "ETL/ELT Processes",  
      color: "bg-gradient-neural",
    },
    {
      icon: "📊",
      title: "Pipeline Monitoring",
      color: "bg-gradient-secondary",
    },
    {
      icon: "🏗️",
      title: "Data Warehousing",
      color: "bg-gradient-quantum",
    },
  ];

  const useCaseShowcase = [
    {
      title: "Finance: Risk Analytics", 
      description: "Streamlined data pipelines for real-time risk assessment and regulatory compliance reporting",
      image: "🏦",
      results: ["Real-time processing", "99.9% data accuracy", "Automated reporting"],
    },
    {
      title: "Retail: Customer Insights",
      description: "Unified customer data platform enabling personalized experiences and targeted marketing campaigns", 
      image: "🛍️",
      results: ["360° customer view", "Personalized experiences", "Marketing ROI +40%"],
    },
    {
      title: "Healthcare: Patient Data Integration",
      description: "Secure patient data integration ensuring compliance with healthcare regulations and improving care quality",
      image: "🏥", 
      results: ["HIPAA compliant", "Patient care optimization", "Operational efficiency"],
    },
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Data Engineering Lead, Solutions",
      avatar: "👩‍💻",
      quote: "QuantumBot's AI diagnostic system has revolutionized our project data workflow. We've seen a 32% increase in early disease detection and reduced diagnostic time by over 60%. Their team's expertise in healthcare AI is unmatched.",
    },
    {
      name: "Marcus Johnson",
      role: "Operations Director, FinTech Inc",
      avatar: "👨‍💼",
      quote: "Implementing QuantumBot's demand forecasting AI has transformed our inventory management. We've reduced overhead by 20% while improving customer satisfaction. The ROI has been incredible.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="bg-gradient-neural text-white">
              📊 Data Engineering
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Data Engineering</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Effortlessly unlock the full potential of your data with QuantumBot's Data Engineering solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-neural hover:shadow-neural">
                Schedule Your Demo
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Request a Custom Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Key <span className="gradient-text">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-neural transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-neural rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Capabilities Diagram */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Capabilities</span>
            </h2>
          </div>

          {/* Central Diagram */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              {/* Central Hub */}
              <div className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-center quantum-glow">
                <div>
                  <div className="text-3xl font-bold text-white">Technical</div>
                  <div className="text-xl text-white">Capabilities</div>
                </div>
              </div>
            </div>
            
            {/* Surrounding Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {technicalCapabilities.map((capability, index) => (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className={`w-16 h-16 ${capability.color} rounded-xl flex items-center justify-center mx-auto text-2xl`}>
                      {capability.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{capability.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Showcase */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Use Case <span className="gradient-text">Showcase</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCaseShowcase.map((useCase, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="text-4xl text-center">{useCase.image}</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                  <div className="space-y-2">
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Client Success <span className="gradient-text">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-card/50 cyber-border">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{story.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{story.avatar}</div>
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.role}</div>
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
              Ready to Engineer Your Data Future?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a free consultation to see how our data engineering solutions can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-neural hover:shadow-neural">
                Request a Demo
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

export default DataEngineering;
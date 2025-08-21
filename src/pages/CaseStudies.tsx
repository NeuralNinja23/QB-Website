import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  Clock,
  Users,
  Shield,
  Car,
  FileText,
  UtensilsCrossed,
} from "lucide-react";

const CaseStudies = () => {
  const mainCaseStudies = [
    {
      title: "Rx Intel (Pharma ERP)",
      category: "Healthcare Technology",
      problem: "The client faced challenges with tracking Medical Representative (MR) activities, manual workflows for tour planning, and time-consuming report completion.",
      solution: "A comprehensive enterprise resource planning (ERP) system was created to automate and streamline the administrative and MR workflow, improving transparency, efficiency, and compliance.",
      keyFeatures: [
        "AI-powered route and tour planning for MR visits",
        "Automated expense verification for faster reimbursements", 
        "AI-driven sales models to predict demand and track competitor insights",
        "An NLP-driven chatbot for instant MR assistance"
      ],
      businessImpact: [
        "Sales forecasting accuracy improved by 30-40%",
        "Unnecessary travel costs were reduced by 25%",
        "Revenue increased planning",
        "The expense approval process was 40% faster",
        "An AI-powered chatbot led to an 85% reduction in support queries"
      ],
      color: "bg-gradient-primary"
    },
    {
      title: "AI-Powered CCTV Monitoring System", 
      category: "Security & Surveillance",
      problem: "Traditional traffic surveillance systems struggled with real-time violation detection and inefficient incident reporting due to manual monitoring limitations.",
      solution: "An AI-driven live monitoring system was developed to provide real-time violation tracking and gain actionable insights from surveillance data.",
      keyFeatures: [
        "AI-powered live monitoring with instant alerts for violations",
        "Automated reporting and dynamic dashboards with violation heatmaps",
        "Smart camera management with AI-based mapping"
      ],
      businessImpact: [
        "Traffic violations were reduced by 35%",
        "Manual monitoring efforts were cut by 50% due to automated reporting",
        "The solution delivered ROI within 12 months"
      ],
      color: "bg-gradient-neural"
    },
    {
      title: "AI-Based CRM Application",
      category: "Customer Relationship Management", 
      problem: "Businesses faced fragmented customer service, inefficient sales, and disconnected marketing due to legacy CRM systems.",
      solution: "A scalable, AI-driven SaaS CRM platform was developed to integrate customer service, sales, and marketing modules.",
      keyFeatures: [
        "AI-powered automation for chatbots and predictive analytics",
        "Unified case management with multi-channel ticketing",
        "A 360° customer view with centralized account and contact management"
      ],
      businessImpact: [
        "Case resolution was 40% faster",
        "Lead conversion increased by 30%", 
        "Marketing campaign ROI improved by 25%"
      ],
      color: "bg-gradient-secondary"
    }
  ];

  const additionalCaseStudies = [
    {
      title: "Rental Car Management System",
      description: "Optimizes fleet operations and improves customer experience",
      icon: Car,
      improvement: "Reduced operational costs by 35%"
    },
    {
      title: "Digital Document Management System", 
      description: "Reduces form handling time by 60%",
      icon: FileText,
      improvement: "60% faster processing"
    },
    {
      title: "Cloud Kitchen & Food Delivery System",
      description: "Cuts commission costs by 25%", 
      icon: UtensilsCrossed,
      improvement: "25% cost reduction"
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
            <Badge variant="secondary" className="bg-gradient-primary text-white mb-6">
              📊 Success Stories
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              Our <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how our AI-powered solutions have transformed businesses across industries, 
              delivering measurable results and driving innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Studies */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 space-y-20">
          {mainCaseStudies.map((study, index) => (
            <Card key={index} className="bg-card/50 cyber-border overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <Badge variant="outline" className="mb-4">{study.category}</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                      Case Study: <span className="gradient-text">{study.title}</span>
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      {/* Problem */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-red-400">Problem:</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">Solution:</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                        <ul className="space-y-3">
                          {study.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      {/* Business Impact */}
                      <div className={`${study.color} rounded-xl p-8 text-white`}>
                        <h3 className="text-xl font-semibold mb-6">Business Impact:</h3>
                        <div className="space-y-4">
                          {study.businessImpact.map((impact, idx) => (
                            <div key={idx} className="flex items-start">
                              <TrendingUp className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{impact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              More <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our portfolio includes a wide range of successful projects across diverse industries, from 
              fleet estate management to logistics and e-commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {additionalCaseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300 text-center">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="text-muted-foreground">{study.description}</p>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      {study.improvement}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to explore how our custom solutions have driven measurable growth and operational 
              efficiency for our clients, including:
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our proven methodologies and innovative solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
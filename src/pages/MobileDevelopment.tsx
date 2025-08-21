import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Smartphone,
  Code,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react";

const MobileDevelopment = () => {
  const serviceOverview = [
    {
      icon: Zap,
      title: "Cross-Platform Solutions",
      description: "React Native applications sharing code across iOS and Android platforms, including development time and costs while maintaining a consistent user experience."
    },
    {
      icon: Smartphone,
      title: "Native Applications", 
      description: "Platform-specific mobile apps built with Swift for iOS and Kotlin for Android, delivering optimal performance and seamless integration with device features."
    },
    {
      icon: Brain,
      title: "Mobile AI Integration",
      description: "On-device machine learning capabilities that enhance user experiences through personalization, image recognition, natural language processing, and predictive features."
    }
  ];

  const mobilePortfolio = [
    {
      title: "FitTrack Pro",
      description: "Fitness tracking app with AI-powered workout recommendations",
      category: "Health & Fitness",
      image: "💪",
      features: ["AI Workout Planning", "Progress Analytics", "Social Sharing"]
    },
    {
      title: "ShopEase", 
      description: "Cross-platform e-commerce solution with AI product visualization",
      category: "E-Commerce",
      image: "🛍️",
      features: ["AR Try-On", "Smart Search", "Personalized Recommendations"]
    },
    {
      title: "SecureBank",
      description: "Native banking application with biometric security features", 
      category: "FinTech",
      image: "🏦",
      features: ["Biometric Auth", "Real-time Alerts", "Budget Insights"]
    },
    {
      title: "SnapShare",
      description: "Photo sharing platform with ML-powered image enhancement",
      category: "Social Media", 
      image: "📸",
      features: ["AI Filters", "Smart Tagging", "Cloud Sync"]
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
              📱 Innovation at Your Fingertips
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Mobile Development</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Delivering innovative and high-performance mobile applications that transform 
              ideas into seamless digital experiences across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Service <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mobile development team specializes in creating cutting-edge applications that combine 
              beautiful design with powerful functionality. We leverage the latest technologies to ensure your app 
              stands out in today's competitive marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceOverview.map((service, index) => {
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

      {/* Our Mobile Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Mobile <span className="gradient-text">Portfolio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobilePortfolio.map((app, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-[9/16] bg-gradient-hero flex items-center justify-center text-6xl relative">
                    {app.image}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{app.title}</h3>
                      <Badge variant="outline" className="text-xs">{app.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                    <div className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's transform your idea into a powerful mobile experience that users will love.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileDevelopment;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Brain,
  Database,
  Zap,
  Globe,
  Smartphone,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Shield,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building scalable, secure, and high-performance websites with AI integration and traditional development tailored to your needs",
      features: ["AI Integration", "Responsive Design", "Performance Optimization", "SEO Ready"],
      color: "bg-gradient-neural",
      href: "/services/web-development",
    },
    {
      icon: Brain,
      title: "Generative AI",
      description: "Harness cutting-edge generative models to create content, images, and innovative solutions tailored to your business needs",
      features: ["Custom AI Models", "Content Generation", "Image Creation", "Text Processing"],
      color: "bg-gradient-primary",
      href: "/services/generative-ai",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing robust mobile applications with AI features and conventional performance for seamless digital experiences across all platforms",
      features: ["Cross-Platform", "Native Performance", "AI Features", "Real-time Updates"],
      color: "bg-gradient-quantum",
      href: "/services/mobile-development",
    },
    {
      icon: Database,
      title: "Enterprise AI Applications",
      description: "Delivering custom enterprise solutions designed to meet complex business challenges and accelerate innovation across your organization",
      features: ["Custom Solutions", "Enterprise Integration", "Scalable Architecture", "24/7 Support"],
      color: "bg-gradient-secondary",
      href: "/services/enterprise-ai",
    },
    {
      icon: Zap,
      title: "Product Lifecycle Management",
      description: "Optimizing product development and delivery with AI-driven insights and streamlined processes for maximum efficiency",
      features: ["AI-driven Insights", "Process Optimization", "Quality Assurance", "Automated Testing"],
      color: "bg-gradient-neural",
      href: "/services/product-lifecycle",
    },
    {
      icon: Cloud,
      title: "Other Services",
      description: "Offering specialized solutions beyond core AI services, tailored to unique business challenges and innovation needs",
      features: ["Custom Solutions", "Consulting", "Training", "Support"],
      color: "bg-gradient-cyber",
      href: "/services/other",
    },
  ];

  const whyChoose = [
    {
      icon: Users,
      title: "Expertise",
      description: "Our team combines decades of experience in AI specialties with deep knowledge in machine learning and data science",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We stay at the cutting edge of AI research to bring you the most advanced solutions and emerging technologies",
    },
    {
      icon: Users,
      title: "Customization", 
      description: "Every solution is tailored to your specific business needs and challenges for optimal performance and results",
    },
    {
      icon: Shield,
      title: "Security",
      description: "We prioritize data protection and compliance with industry standards and regulations for complete peace of mind",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "👩‍💼",
      text: "QuantumBot's AI solutions have transformed our data processing capabilities, reducing analysis time by 75% while increasing accuracy at the same timeframe. This has significantly improved our customer service operations.",
    },
    {
      name: "Marcus Chen",
      role: "E-Commerce Director, RetailCorpTech",
      avatar: "👨‍💻", 
      text: "We've reduced our product visualization costs by 72% while increasing our catalog size by 3x. The AI-generated product images are indistinguishable from professional photography and have significantly improved our online shopping experience.",
    },
    {
      name: "Elena Rodriguez",
      role: "Data Director, FinanceX",
      avatar: "👩‍🔬",
      text: "Working with QuantumBot has given us a competitive edge in predictive analytics that our competitors simply can't match. We've seen a 200% improvement in fraud detection accuracy.",
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
            <h1 className="text-5xl lg:text-6xl font-bold">
              Advanced <span className="gradient-text">AI Solutions</span> for Enterprise
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your business with cutting-edge artificial intelligence technologies tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Central Services Diagram */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">AI Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions designed to help businesses leverage the power of artificial intelligence
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 bg-gradient-primary rounded-2xl flex items-center justify-center quantum-glow">
                <span className="text-4xl font-bold text-white">QB</span>
              </div>
            </div>

            {/* Service Cards in Circular Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link key={index} to={service.href}>
                    <Card className="group bg-card/80 cyber-border hover:shadow-glow transition-all duration-300 cursor-pointer">
                      <CardContent className="p-8 space-y-6">
                        <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose QuantumBot for <span className="gradient-text">AI Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
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

      {/* Client Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 cyber-border">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
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
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
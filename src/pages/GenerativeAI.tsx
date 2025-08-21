import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/generative-ai-hero.jpg";
import {
  Brain,
  Zap,
  Image,
  FileText,
  Palette,
  Code,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Users,
  BarChart3,
  Settings,
  Star,
} from "lucide-react";

const GenerativeAI = () => {
  const keyBenefits = [
    {
      icon: Zap,
      title: "Efficient Content Creation",
      description: "Generate high-quality content, images, and designs in seconds, reducing production time by up to 90% while maintaining professional standards.",
    },
    {
      icon: Users,
      title: "Personalized Experiences", 
      description: "Create tailored content for different audiences, increasing engagement rates and customer satisfaction through AI-driven personalization.",
    },
    {
      icon: Lightbulb,
      title: "Accelerated Innovation",
      description: "Rapidly prototype new ideas and concepts, shortening development cycles and bringing innovative solutions to market faster.",
    },
    {
      icon: Settings,
      title: "Automated Creative Processes",
      description: "Free your creative teams from repetitive tasks, allowing them to focus on strategic and high-value creative work that drives business impact.",
    },
  ];

  const useCases = [
    {
      icon: "📢",
      title: "Marketing Automation",
      description: "Generate compelling ad copy, social media content, and email campaigns that boost customer engagement and conversion rates.",
      color: "bg-gradient-secondary",
    },
    {
      icon: "🎨",
      title: "Graphic Design", 
      description: "Create custom illustrations, banners, and marketing visuals with AI to reduce costs and shorten graphic design and production timelines.",
      color: "bg-gradient-neural",
    },
    {
      icon: "📰",
      title: "Media & Publishing",
      description: "Produce social drafts, summaries, and blogs for media content without increasing staff to scale communications without increasing headcount.",
      color: "bg-gradient-primary",
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      description: "Generate product descriptions, lifestyle images, and customer reviews to enhance online shopping experiences without increasing staff.",
      color: "bg-gradient-quantum",
    },
    {
      icon: "🔬",
      title: "R&D Prototyping",
      description: "Rapidly visualize concepts and create digital prototypes to reduce time-to-market and accelerate the 20% prototype cycle.",
      color: "bg-gradient-neural", 
    },
    {
      icon: "🎧",
      title: "Customer Support",
      description: "Create personalized responses to customer inquiries and generate intelligent responses at scale, reducing costs by 30%.",
      color: "bg-gradient-secondary",
    },
  ];

  const technicalCapabilities = [
    {
      category: "AI/ML Technology Stack",
      items: [
        "Neural Network Design",
        "Stable Diffusion Transformer models with billions of parameters for unparalleled content generation",
        "Custom LLMs for Enterprises",
        "Retrieval Augmented Generation (RAG)",
        "Fine-tuned language and vision generation for multiple integrated tasks",
      ],
    },
    {
      category: "Integration & Security",
      items: [
        "Enterprise-grade Security",
        "SOC 2 Type II compliant with end-to-end encryption and secure data handling",
        "API Integration",
        "RESTful APIs for seamless integration with your existing tech stack and business applications",
      ],
    },
  ];

  const successStories = [
    {
      client: "Sarah Johnson",
      role: "CMO, Securetech Solutions",
      avatar: "👩‍💼",
      quote: "QuantumBot's generative AI solution has revolutionized our marketing efforts. We've seen a 60% increase in content production speed, allowing our marketing team to focus on strategy rather than production routine content creation and analysis.",
    },
    {
      client: "David Chen",
      role: "E-Commerce Director, FashionForward",
      avatar: "👨‍💻",
      quote: "We've reduced our product visualization costs by 75% while increasing our catalog size by 3x. The AI-generated product images are indistinguishable from professional photography and have significantly improved our timeframe. This has enhanced product representation for our data architecture approach in warehouse.",
    },
    {
      client: "Amira Waller",
      role: "Innovation Lead Specialist, BrandCorp",
      avatar: "👩‍🎨",
      quote: "Our R&D team now produces 5x more concept visualizations at the same timeframe. This has accelerated our innovation pipeline and helped us bring products to market 40% faster with process improvement and assets improvements.",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-gradient-primary text-white">
                🤖 Generative AI
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="gradient-text">Generative AI</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Intelligent, Adaptive, and Innovative solutions through machine-driven creativity
                </p>
                <p className="text-lg text-muted-foreground">
                  Empower your business with advanced AI models that create original content, images, designs, and solutions. Our Generative AI services deliver unparalleled results and provide competitive advantage tailored to your business needs, giving you a competitive edge in today's digital marketplace.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                  Request a Demo
                </Button>
                <Button size="lg" variant="outline" className="cyber-border">
                  Contact Our Experts
                </Button>
              </div>
            </div>
            
            <div className="relative lg:block">
              <div className="relative w-full h-96 float-animation">
                <img 
                  src={heroImage} 
                  alt="Generative AI Visualization" 
                  className="w-full h-full object-cover rounded-2xl quantum-glow"
                />
              </div>
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
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Use <span className="gradient-text">Cases</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-16 h-16 ${useCase.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {useCase.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Capabilities</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {technicalCapabilities.map((category, index) => (
              <Card key={index} className="bg-card/50 cyber-border">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold gradient-text">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
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

          <div className="grid md:grid-cols-3 gap-8">
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
                      <div className="font-semibold">{story.client}</div>
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
              Ready to Transform Your Creative Process?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the power of QuantumBot's Generative AI solutions with a personalized demo tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
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

export default GenerativeAI;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Target,
  Users,
  Heart,
  Brain,
  Code,
  Database,
  Cloud,
  CheckCircle,
  TrendingUp,
  Award,
  Lightbulb,
  Globe,
} from "lucide-react";

const Career = () => {
  const missionValues = [
    {
      icon: Target,
      title: "Innovation with Purpose",
      description: "We focus on creating measurable, real-world value rather than just technical prototypes. Every solution we build is designed to solve specific business challenges."
    },
    {
      icon: Brain,
      title: "Tech Enthusiasts", 
      description: "We're passionate about teaching computers to think, see, and understand. Our team thrives on pushing the boundaries of what AI can accomplish."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "We believe in the power of diverse perspectives. Our collaborative environment encourages open communication and knowledge sharing."
    }
  ];

  const lookingFor = {
    technical: [
      "Artificial Intelligence & Machine Learning",
      "Experience with supervised and unsupervised learning, reinforcement learning, and neural networks",
      "Deep Learning & LLMs",
      "Working knowledge of models like Gemini, GPT and other large language models",
      "Computer Vision & NLP",
      "Expertise in image recognition, object detection, sentiment analysis and language understanding"
    ],
    development: [
      "Frontend Development",
      "Proficiency in modern frameworks like React, Angular, or Vue.js",
      "Backend Development", 
      "Experience with Python, Node.js, Java, or similar technologies",
      "Cloud & DevOps",
      "Knowledge of AWS, Azure, or GCP and experience with CI/CD pipelines"
    ]
  };

  const whyWorkWithUs = [
    {
      icon: Lightbulb,
      title: "Solve Complex Challenges",
      description: "Work on intellectually stimulating problems that require innovative thinking and cutting-edge technology. Every day brings new intellectual challenges and opportunities to grow."
    },
    {
      icon: Globe,
      title: "Operationalize AI",
      description: "Be part of a team that implements AI using best practices like MLOps, ensuring that solutions are not just innovative but also reliable, scalable, and maintainable."
    },
    {
      icon: TrendingUp,
      title: "Deliver Significant Impact", 
      description: "Your work will drive measurable business results, such as reducing operational costs by 30% or increasing efficiency by 25%. Your work will make a real difference."
    },
    {
      icon: Award,
      title: "Diverse Project Portfolio",
      description: "Work across multiple industries including healthcare, finance, and logistics, gaining exposure to a wide range of business domains and technical challenges."
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Continuous learning and development budget", 
    "Comprehensive health and wellness benefits"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-gradient-primary text-white">
                🚀 Join Our Mission
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold">
                Join Us in Redefining What's <span className="gradient-text">Possible</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                At QuantumBot, we're on a mission to bridge the gap between AI theory and practical business 
                solutions. We're not just building technology, we're creating the future.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-hero rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 p-8">
                  {[Brain, Code, Database, Cloud, Users, Target, Heart, Award].map((Icon, index) => (
                    <div 
                      key={index} 
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Philosophy */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Mission & <span className="gradient-text">Philosophy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300 text-center">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are Looking For */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              Who We Are <span className="gradient-text">Looking For</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At QuantumBot, we're seeking individuals who are not just experts in their field but are also problem-solvers, 
              innovators, and collaborative team members. We value curiosity, creativity, and a passion for making a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Expertise */}
            <Card className="bg-card/50 cyber-border">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Technical Expertise</h3>
                </div>
                
                <div className="space-y-4">
                  {lookingFor.technical.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {index % 2 === 0 ? (
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      ) : (
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      )}
                      <span className={`${index % 2 === 0 ? 'font-semibold' : 'text-muted-foreground text-sm'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Development Skills */}
            <Card className="bg-card/50 cyber-border">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Development Skills</h3>
                </div>
                
                <div className="space-y-4">
                  {lookingFor.development.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {index % 2 === 0 ? (
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      ) : (
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      )}
                      <span className={`${index % 2 === 0 ? 'font-semibold' : 'text-muted-foreground text-sm'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work at QuantumBot */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Work at <span className="gradient-text">QuantumBot?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyWorkWithUs.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
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

      {/* Employee Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              Employee <span className="gradient-text">Benefits</span>
            </h2>
          </div>

          <Card className="bg-card/50 cyber-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              We're always looking for talented individuals who share our passion for innovation and 
              excellence. Take the next step in your career journey with QuantumBot.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                Submit Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
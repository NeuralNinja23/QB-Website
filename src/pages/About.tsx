import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  Target,
  Award,
  Globe,
  Brain,
  Rocket,
  Heart,
  Star,
  CheckCircle,
  Shield,
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & AI Research Lead",
      avatar: "👩‍💼",
      bio: "Former Google AI researcher with 15+ years in machine learning and neural networks. Published 50+ papers in top-tier conferences.",
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO & Engineering Director",
      avatar: "👨‍💻",
      bio: "Ex-Tesla engineering lead specializing in scalable systems and cloud architecture. Built platforms serving millions of users.",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of Data Science",
      avatar: "👩‍🔬", 
      bio: "PhD in Statistics from MIT. Former data science lead at Amazon, expert in predictive analytics and business intelligence.",
    },
    {
      name: "James Wilson",
      role: "VP of Product Strategy",
      avatar: "👨‍💼",
      bio: "15 years in product management at Microsoft and startups. Passionate about user-centered design and business strategy.",
    },
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We stay at the forefront of AI research, constantly exploring new possibilities and pushing technological boundaries.",
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our mission. We work as an extension of your team to deliver solutions that drive real business impact.",
    },
    {
      icon: Shield,
      title: "Ethical AI",
      description: "We prioritize responsible AI development, ensuring our solutions are fair, transparent, and beneficial for society.",
    },
    {
      icon: Heart,
      title: "Continuous Learning",
      description: "We foster a culture of learning and growth, staying adaptable in the rapidly evolving landscape of artificial intelligence.",
    },
  ];

  const milestones = [
    { year: "2020", event: "QuantumBot founded with a vision to democratize AI", metric: "Founded" },
    { year: "2021", event: "First enterprise AI deployment serving Fortune 500", metric: "50+ Clients" },
    { year: "2022", event: "Expanded team to 30+ AI specialists and engineers", metric: "200+ Projects" },
    { year: "2023", event: "Launched breakthrough generative AI platform", metric: "500+ Deployments" },
    { year: "2024", event: "International expansion and industry recognition", metric: "Global Reach" },
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
              Where AI Meets <span className="gradient-text">Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              At QuantumBot, we're not just building AI solutions—we're crafting the future of intelligent business. 
              Our mission is to transform how organizations operate, innovate, and thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-card/50 cyber-border">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To democratize artificial intelligence by creating accessible, powerful, and ethical AI solutions 
                    that empower businesses of all sizes to harness the transformative potential of machine learning 
                    and automation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 cyber-border">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-neural rounded-xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To be the world's leading AI partner, recognized for delivering breakthrough solutions that 
                    drive innovation, create competitive advantages, and contribute to a smarter, more efficient 
                    global economy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by AI researchers and industry veterans, QuantumBot emerged from a shared belief that 
              artificial intelligence should be a force for positive transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-card/50 cyber-border">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-8">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                      <div className="text-primary font-semibold">{milestone.metric}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              World-class experts united by a passion for AI innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl">{member.avatar}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border text-center hover:shadow-neural transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto">
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

      {/* Recognition */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Industry <span className="gradient-text">Recognition</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                award: "AI Innovation Award 2024",
                organization: "Tech Excellence Forum",
                description: "Recognized for breakthrough generative AI solutions",
              },
              {
                award: "Best AI Startup 2023",
                organization: "Silicon Valley Awards",
                description: "Leading the next generation of AI companies",
              },
              {
                award: "Enterprise AI Leader",
                organization: "Industry Analytics",
                description: "Top-rated AI solutions provider for enterprises",
              },
            ].map((recognition, index) => (
              <Card key={index} className="bg-card/50 cyber-border">
                <CardContent className="p-8 space-y-4">
                  <Award className="w-12 h-12 text-yellow-400 mx-auto" />
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">{recognition.award}</h3>
                    <p className="text-primary font-medium">{recognition.organization}</p>
                    <p className="text-sm text-muted-foreground">{recognition.description}</p>
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
              Ready to Join Our AI Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're looking to transform your business or join our team, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Start Your AI Project
              </Button>
              <Button size="lg" variant="outline" className="cyber-border">
                View Career Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
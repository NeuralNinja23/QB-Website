import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Brain,
  Database,
  Eye,
  Code2,
  Server,
  Cloud,
  Shield,
  Palette,
  Smartphone,
  GitBranch,
  Cpu,
  Network,
} from "lucide-react";

const Skills = () => {
  const coreExpertise = [
    {
      category: "AI & ML",
      icon: Brain,
      color: "bg-gradient-primary",
      skills: [
        "Predictive Analytics",
        "Algorithmic Systems", 
        "Supervised & Unsupervised Learning",
        "Pattern Recognition",
        "Autonomous Decision-Making"
      ]
    },
    {
      category: "Deep Learning & NLP", 
      icon: Network,
      color: "bg-gradient-neural",
      skills: [
        "Neural Networks (CNNs, RNNs, LSTMs)",
        "Transformer Architectures",
        "Natural Language Processing",
        "Speech Recognition",
        "RAG & Custom LLMs"
      ]
    },
    {
      category: "Computer Vision",
      icon: Eye,
      color: "bg-gradient-secondary",
      skills: [
        "Image & Video Analysis",
        "Facial Recognition",
        "Object Detection", 
        "Automated Inspection",
        "Scene Understanding"
      ]
    }
  ];

  const developmentStacks = [
    {
      category: "Frontend",
      icon: Code2,
      technologies: [
        { name: "React.js", description: "Component-based UI library for building interactive user interfaces" },
        { name: "React Native", description: "Cross-platform mobile app development" },  
        { name: "UI/UX Design", description: "User-centric design with Figma and modern design systems" }
      ]
    },
    {
      category: "Backend", 
      icon: Server,
      technologies: [
        { name: "Node.js", description: "JavaScript runtime for scalable server applications" },
        { name: "Python", description: "Versatile language for AI, data science and web development" },
        { name: ".NET MVC/Core", description: "Enterprise-grade framework for web applications" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud, 
      technologies: [
        { name: "AWS", description: "Comprehensive cloud infrastructure and services" },
        { name: "AIOps & LLM Observability", description: "AI-powered operations and monitoring" },
        { name: "Cybersecurity", description: "Advanced threat protection and secure architectures" }
      ]
    }
  ];

  const aiFoundationModels = [
    { name: "OpenAI GPT", logo: "🧠" },
    { name: "Google Gemini", logo: "💎" },
    { name: "Meta Llama 3.2", logo: "🦙" },
    { name: "Anthropic Claude", logo: "🤖" }
  ];

  const vectorDatabases = [
    { name: "Pinecone", logo: "🌲" },
    { name: "Weaviate", logo: "🔗" },
    { name: "Zilliz", logo: "⚡" },
    { name: "Supabase", logo: "🗄️" }
  ];

  const aiTooling = [
    { name: "LlamaIndex", logo: "🦙" },
    { name: "LangChain", logo: "🔗" },
    { name: "Streamlined", logo: "🚀" },
    { name: "Arize", logo: "📊" }
  ];

  const dataManagement = [
    { name: "Snowflake", logo: "❄️" },
    { name: "Redshift", logo: "🔴" },
    { name: "DataBricks", logo: "🧱" },
    { name: "MongoDB Atlas", logo: "🍃" }
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
              🎯 Technical Excellence
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A showcase of core technical domains, platforms, and expertise that drive our innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Core <span className="gradient-text">Expertise</span>
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              <Badge variant="outline">AI & ML</Badge>
              <Badge variant="outline">Deep Learning</Badge>
              <Badge variant="outline">Computer Vision</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreExpertise.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className={`w-16 h-16 ${domain.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{domain.category}</h3>
                    <ul className="space-y-2">
                      {domain.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development & Cloud Stacks */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Development & Cloud <span className="gradient-text">Stacks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {developmentStacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <div key={index} className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{stack.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {stack.technologies.map((tech, idx) => (
                      <Card key={idx} className="bg-card/30 cyber-border hover:shadow-neural transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-lg mb-2">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Platforms & AI Infrastructure */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Data Platforms & <span className="gradient-text">AI Infrastructure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* AI Foundation Models */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">AI Foundation Models</h3>
              <div className="grid grid-cols-2 gap-4">
                {aiFoundationModels.map((model, index) => (
                  <Card key={index} className="bg-card/50 cyber-border text-center p-6 hover:shadow-glow transition-all duration-300">
                    <div className="text-3xl mb-3">{model.logo}</div>
                    <p className="font-medium">{model.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Vector Databases */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Vector Databases</h3>
              <div className="grid grid-cols-2 gap-4">
                {vectorDatabases.map((db, index) => (
                  <Card key={index} className="bg-card/50 cyber-border text-center p-6 hover:shadow-glow transition-all duration-300">
                    <div className="text-3xl mb-3">{db.logo}</div>
                    <p className="font-medium">{db.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* AI Tooling & Frameworks */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">AI Tooling & Frameworks</h3>
              <div className="grid grid-cols-2 gap-4">
                {aiTooling.map((tool, index) => (
                  <Card key={index} className="bg-card/50 cyber-border text-center p-6 hover:shadow-glow transition-all duration-300">
                    <div className="text-3xl mb-3">{tool.logo}</div>
                    <p className="font-medium">{tool.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Data Management */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Data Management</h3>
              <div className="grid grid-cols-2 gap-4">
                {dataManagement.map((platform, index) => (
                  <Card key={index} className="bg-card/50 cyber-border text-center p-6 hover:shadow-glow transition-all duration-300">
                    <div className="text-3xl mb-3">{platform.logo}</div>
                    <p className="font-medium">{platform.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to leverage our expertise?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our technical capabilities can drive your next innovative project.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
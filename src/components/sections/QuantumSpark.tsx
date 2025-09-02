import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Sparkles, 
  Zap, 
  Atom, 
  Brain, 
  Cpu, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

const QuantumSpark = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(true);

  const sparkFeatures = [
    {
      icon: Sparkles,
      title: "Quantum Computing",
      description: "Harness the power of quantum algorithms for unprecedented computational capabilities",
      color: "primary",
      delay: "stagger-1"
    },
    {
      icon: Atom,
      title: "Neural Fusion",
      description: "Advanced neural networks that adapt and evolve with your business needs",
      color: "neural",
      delay: "stagger-2"
    },
    {
      icon: Brain,
      title: "Cognitive AI",
      description: "AI systems that think, learn, and reason like human experts",
      color: "quantum",
      delay: "stagger-3"
    },
    {
      icon: Cpu,
      title: "Edge Processing",
      description: "Lightning-fast AI processing at the edge for real-time decision making",
      color: "secondary",
      delay: "stagger-4"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className={`absolute inset-0 morphing-background opacity-10 ${isPlaying ? '' : 'animation-paused'}`} />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-primary rounded-full opacity-30 float-animation`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center space-y-6 mb-20 ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-gradient-primary text-white px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Quantum Spark Initiative
            </Badge>
            <EnhancedButton
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-primary hover:text-primary-glow"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </EnhancedButton>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold">
            Ignite Your <span className="gradient-text">Quantum Future</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Step into the next dimension of AI with Quantum Spark - where quantum computing 
            meets artificial intelligence to create solutions that were once impossible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <EnhancedButton 
              variant="liquid" 
              size="lg"
              className="text-lg px-8"
            >
              Explore Quantum AI <ChevronRight className="ml-2" size={20} />
            </EnhancedButton>
            <EnhancedButton 
              variant="outline" 
              size="lg"
              className="text-lg px-8"
            >
              Schedule Demo
            </EnhancedButton>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {sparkFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${isVisible ? `fade-in-up visible ${feature.delay}` : 'fade-in-up'}`}
              >
                <Card className="group bg-card/30 cyber-border hover:shadow-glow transition-all duration-500 cursor-pointer h-full">
                  <CardContent className="p-8 space-y-6 text-center">
                    <div className={`w-20 h-20 bg-gradient-${feature.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 quantum-glow`}>
                      <Icon className="w-10 h-10 text-white morph-icon" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Interactive Quantum Visualization */}
        <div className={`${isVisible ? 'fade-in-up visible stagger-5' : 'fade-in-up'}`}>
          <Card className="bg-card/20 cyber-border overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold gradient-text">
                  Quantum Computing Meets AI
                </h3>
                
                <div className="relative w-full h-64 flex items-center justify-center">
                  {/* Central Quantum Core */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-ping absolute inset-0" />
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center relative z-10 quantum-glow">
                      <Zap className="w-12 h-12 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Orbiting Elements */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-gradient-neural rounded-full"
                      style={{
                        animation: `orbit-${i % 2 === 0 ? 'clockwise' : 'counter'} ${8 + i}s linear infinite`,
                        transformOrigin: `${80 + i * 10}px center`,
                      }}
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Experience the convergence of quantum mechanics and artificial intelligence, 
                  unlocking computational possibilities that redefine what's achievable.
                </p>
                
                <EnhancedButton 
                  variant="ripple" 
                  size="lg"
                  className="mt-6"
                >
                  Start Your Quantum Journey
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes orbit-clockwise {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        
        @keyframes orbit-counter {
          from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          to { transform: rotate(-360deg) translateX(90px) rotate(360deg); }
        }
        
        .animation-paused * {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default QuantumSpark;
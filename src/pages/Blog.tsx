import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  Eye,
  MessageCircle,
  TrendingUp,
  Code,
  Brain,
  BarChart3,
} from "lucide-react";

const Blog = () => {
  const featuredArticles = [
    {
      title: "Essential Python Frameworks for Modern AI Development",
      excerpt: "Discover how TensorFlow, PyTorch, and Keras are revolutionizing machine learning development and why Python remains the language of choice.",
      image: "🐍",
      category: "AI & Technology",
      date: "June 15, 2023",
      readTime: "8 min read",
      views: "1,243",
      comments: "23"
    },
    {
      title: "Deep Learning vs. Machine Learning: Understanding the Difference", 
      excerpt: "A comprehensive guide to the fundamental differences between deep learning and machine learning, and how to choose the right one for your business.",
      image: "🧠",
      category: "AI & Technology", 
      date: "May 28, 2023",
      readTime: "6 min read",
      views: "956",
      comments: "18"
    },
    {
      title: "How AI is Transforming Financial Services",
      excerpt: "Explore real-world applications of AI in banking, automated financial advice and process optimization.",
      image: "💰", 
      category: "Industry Applications",
      date: "April 12, 2023",
      readTime: "7 min read", 
      views: "1,089",
      comments: "31"
    }
  ];

  const categories = [
    {
      name: "AI & Technology Deep Dives",
      description: "Complex AI concepts explained in clear, accessible language for technical and non-technical audiences.",
      icon: Brain,
      articleCount: "15 Articles"
    },
    {
      name: "Industry-Specific Applications", 
      description: "Specialized AI solutions serving businesses across healthcare, finance, retail, and other sectors.",
      icon: BarChart3,
      articleCount: "12 Articles"
    },
    {
      name: "Business & Strategy",
      description: "Strategic insights for business leaders navigating digital transformation and AI integration.",
      icon: TrendingUp, 
      articleCount: "8 Articles"
    }
  ];

  const latestArticles = [
    {
      title: "The Strategic Application of AI in Healthcare",
      excerpt: "AI is revolutionizing healthcare through improved diagnostics, predictive analytics, and personalized treatment plans. This article explores how machine learning algorithms are being used to analyze medical data, predict patient outcomes, and optimize hospital operations.",
      category: "Industry Applications",
      date: "June 2, 2023",
      views: "1,234",
      comments: "23",
      image: "🏥"
    },
    {
      title: "The Benefits of Implementing AI-Powered Chatbots", 
      excerpt: "Discover how AI chatbots are transforming customer service operations by providing 24/7 support, reducing response times, and handling routine inquiries. Learn about implementation strategies and how to measure ROI from chatbot deployments.",
      category: "Business & Strategy",
      date: "May 18, 2023", 
      views: "892",
      comments: "17",
      image: "💬"
    },
    {
      title: "Computer Vision Applications in Retail and Transportation",
      excerpt: "Explore how computer vision technology is revolutionizing inventory management in retail and enhancing safety in transportation. This article covers real-time stock monitoring, theft prevention systems, and autonomous vehicle developments.",
      category: "Industry Applications", 
      date: "April 20, 2023",
      views: "675",
      comments: "12", 
      image: "👁️"
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
              📚 Knowledge Hub
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold">
              Insights & <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our latest thoughts on AI, machine learning, and digital transformation. Stay ahead 
              with QuantumBot's expert perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Articles</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                    {article.image}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Categories</span>
            </h2>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">View All Categories</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300 text-center">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                    <Badge variant="secondary">{category.articleCount}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <div className="flex space-x-2">
              <Badge variant="outline">All</Badge>
              <Badge variant="outline">AI & Technology</Badge>
              <Badge variant="outline">Industry Applications</Badge>
              <Badge variant="outline">Business & Strategy</Badge>
            </div>
          </div>

          <div className="space-y-8">
            {latestArticles.map((article, index) => (
              <Card key={index} className="bg-card/50 cyber-border hover:shadow-glow transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="lg:flex">
                    <div className="lg:w-1/4 aspect-video lg:aspect-square bg-gradient-neural flex items-center justify-center text-4xl">
                      {article.image}
                    </div>
                    <div className="lg:w-3/4 p-6 lg:p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="text-2xl font-semibold hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{article.comments}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Read Full Article
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest insights on AI, machine learning, and digital 
              transformation. We'll send you expert analysis straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-card/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary hover:shadow-glow">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
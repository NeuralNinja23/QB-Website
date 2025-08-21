import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { name: "Generative AI", href: "/services/generative-ai" },
    { name: "Machine Learning", href: "/services/machine-learning" },
    { name: "Large Language Models", href: "/services/llm" },
    { name: "Computer Vision", href: "/services/computer-vision" },
    { name: "NLP Solutions", href: "/services/nlp" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/career" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center quantum-glow">
                <span className="text-xl font-bold text-white">QB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">QuantumBot</span>
                <span className="text-xs text-muted-foreground">Think AI, Think QB</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Where AI Meets Reality. Transforming businesses with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest AI insights
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted/50 border-border"
              />
              <Button className="w-full bg-gradient-primary hover:shadow-glow">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} QB AI Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
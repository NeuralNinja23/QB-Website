import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      submenu: [
        { name: "Generative AI", href: "/services/generative-ai" },
        { name: "Data Engineering", href: "/services/data-engineering" },
        { name: "DevOps", href: "/services/devops" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
      ]
    },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center quantum-glow">
              <span className="text-xl font-bold text-white">QB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                QuantumBot
              </span>
              <span className="text-xs text-muted-foreground">Think AI, Think QB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Submenu for Services */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-xl rounded-lg border border-border shadow-card-quantum opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <EnhancedButton variant="liquid" className="hover:shadow-glow transition-all duration-300">
              Get Started
            </EnhancedButton>
          </div>

          {/* Mobile Menu Button */}
          <EnhancedButton
            variant="ghost"
            size="icon"
            className="lg:hidden magnetic"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-110' : ''}`}>
              {isMobileMenuOpen ? <X size={24} className="morph-icon" /> : <Menu size={24} className="morph-icon" />}
            </div>
          </EnhancedButton>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 mt-6 pb-6 border-t border-border pt-6' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className={`${isMobileMenuOpen ? `fade-in-left visible stagger-${index + 1}` : 'fade-in-left'}`}
              >
                <Link
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-primary magnetic ${
                    isActive(item.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                
                {/* Mobile Submenu */}
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block text-xs text-muted-foreground hover:text-primary transition-colors magnetic ${
                          isMobileMenuOpen ? `fade-in-left visible stagger-${index + subIndex + 2}` : 'fade-in-left'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className={`${isMobileMenuOpen ? 'fade-in-up visible stagger-6' : 'fade-in-up'}`}>
              <EnhancedButton 
                variant="liquid" 
                className="w-full hover:shadow-glow transition-all duration-300 mt-6"
              >
                Get Started
              </EnhancedButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
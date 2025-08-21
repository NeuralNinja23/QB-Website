import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Zap,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Let's Build the <span className="gradient-text">Future</span> Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business with AI? Get in touch with our experts to discuss your project and discover how QuantumBot can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-card/50 cyber-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Get Started Today</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select 
                        id="service" 
                        className="w-full p-3 bg-muted border border-border rounded-md text-foreground"
                      >
                        <option>Select a service...</option>
                        <option>Generative AI</option>
                        <option>Data Engineering</option>
                        <option>Web Development</option>
                        <option>Mobile Development</option>
                        <option>DevOps</option>
                        <option>Cloud Infrastructure</option>
                        <option>Custom AI Solutions</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project and how we can help..."
                        rows={5}
                      />
                    </div>

                    <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 cyber-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">hello@quantumbot.ai</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Office</p>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-quantum rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-muted-foreground">Mon - Fri: 9AM - 6PM PST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-gradient-neural hover:shadow-neural" variant="outline">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Free Consultation
                </Button>
                
                <Button size="lg" className="w-full bg-gradient-secondary hover:shadow-cyber" variant="outline">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </Button>
                
                <Button size="lg" className="w-full bg-gradient-quantum hover:shadow-glow" variant="outline">
                  <Zap className="w-5 h-5 mr-2" />
                  Request a Demo
                </Button>
              </div>

              {/* Why Choose Us */}
              <Card className="bg-card/50 cyber-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose QuantumBot?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Expert Team</p>
                        <p className="text-sm text-muted-foreground">AI specialists with 10+ years of experience</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neural rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Proven Results</p>
                        <p className="text-sm text-muted-foreground">500+ successful AI implementations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">24/7 Support</p>
                        <p className="text-sm text-muted-foreground">Dedicated support throughout your journey</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-quantum rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Custom Solutions</p>
                        <p className="text-sm text-muted-foreground">Tailored AI solutions for your business</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to implement an AI solution?",
                answer: "Project timelines vary based on complexity, typically ranging from 4-16 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support packages including monitoring, updates, optimization, and 24/7 technical assistance.",
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Absolutely! Our solutions are designed to seamlessly integrate with your current tech stack through APIs and custom integrations.",
              },
              {
                question: "What industries do you serve?",
                answer: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, education, and more. Our AI solutions are adaptable to various business needs.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-card/50 cyber-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
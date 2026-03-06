import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Briefcase, User, Rocket, RefreshCw, MessageSquare } from "lucide-react";

const services = [
  { icon: Globe, title: "High-Performance React Websites", description: "Custom web applications built with React for maximum performance and scalability.", features: ["Single Page Applications", "Progressive Web Apps", "Real-time Features"] },
  { icon: Briefcase, title: "Professional Business Websites", description: "Professional sites that establish credibility and drive sustainable growth.", features: ["SEO Optimized", "Lead Generation", "Analytics Integration"] },
  { icon: User, title: "Creative Portfolio Websites", description: "Stunning portfolios that showcase your work beautifully and professionally.", features: ["Gallery Systems", "Case Studies", "Contact Forms"] },
  { icon: Rocket, title: "Conversion-Focused Landing Pages", description: "High-converting pages designed to capture leads and boost conversions.", features: ["A/B Testing Ready", "Fast Loading", "Mobile First"] },
  { icon: RefreshCw, title: "Modern Website Redesign", description: "Modernize your existing site with fresh design and cutting-edge technology.", features: ["Performance Audit", "UX Improvements", "Modern Stack"] },
  { icon: MessageSquare, title: "Smart WhatsApp Business Integration", description: "Seamless chat integration for instant customer connection and support.", features: ["Auto Responses", "Lead Capture", "24/7 Availability"] },
];

export const ServicesPreview = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)] -translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">What We Do</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Our <span className="gradient-text">Services</span></h2>
          <p className="text-muted-foreground text-lg">Comprehensive digital solutions tailored to your business needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, rotateX: 2 }} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-7 rounded-2xl h-full flex flex-col border border-border group-hover:border-primary/30 shadow-sm group-hover:shadow-xl transition-all duration-300">
                {/* Gradient top border */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/25 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  {service.features.map((feature, i) => (
                    <span key={i} className="inline-block text-xs px-2.5 py-1 bg-primary/8 text-primary rounded-full mr-2 mb-2 font-medium">{feature}</span>
                  ))}
                </div>
                <Link to="/solutions" className="inline-flex items-center text-sm text-primary font-semibold group/link">
                  Learn more<ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className="group border-primary/30 hover:border-primary hover:bg-primary/5">
            <Link to="/solutions">View All Solutions<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, Search } from "lucide-react";

const features = [
  { 
    icon: Zap, 
    title: "Ultra-Fast Performance", 
    description: "Our React-based architecture delivers sub-second load times, keeping your visitors engaged and conversions high.",
    stat: "< 1s",
    statLabel: "Load Time"
  },
  { 
    icon: Shield, 
    title: "Enterprise-Grade Security", 
    description: "Production-grade security with SSL, data encryption, and industry-standard compliance built into every project.",
    stat: "99.9%",
    statLabel: "Uptime"
  },
  { 
    icon: Smartphone, 
    title: "Mobile-First Experience", 
    description: "Every pixel is crafted to look stunning across all devices — from smartphones to ultra-wide desktop monitors.",
    stat: "100%",
    statLabel: "Responsive"
  },
  { 
    icon: Search, 
    title: "Built-in SEO Optimization", 
    description: "Built-in technical SEO ensures your website ranks higher, drives organic traffic, and generates qualified leads.",
    stat: "Top 10",
    statLabel: "Rankings"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const WhyUsSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03),transparent_70%)] -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why <span className="gradient-text">Aradhya NextGen Technologies</span>?
          </h2>
          <p className="text-muted-foreground text-lg">We combine modern technology with creative design to deliver websites that perform and convert.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-primary/30 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors group-hover:scale-110 duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-heading text-primary">{feature.stat}</div>
                    <div className="text-xs text-muted-foreground">{feature.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

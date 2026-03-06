import { motion } from "framer-motion";
import { Lightbulb, Target, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, number: "01", title: "Discovery", description: "Deep dive into your vision, goals, and audience to define the perfect strategy." },
  { icon: Target, number: "02", title: "Strategy", description: "Creating detailed wireframes, UI/UX designs, and a comprehensive roadmap." },
  { icon: Code, number: "03", title: "Development", description: "Building with clean, efficient, and scalable React code — fast iteration." },
  { icon: Rocket, number: "04", title: "Launch", description: "Rigorous testing, seamless deployment, and ongoing support & optimization." },
];

export const ProcessSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">How We Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Our <span className="gradient-text">Process</span></h2>
          <p className="text-muted-foreground text-lg">A streamlined 4-step approach to bring your vision to life.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block relative">
            {/* Progress line */}
            <div className="absolute top-[52px] left-[12%] right-[12%] h-px bg-border" />
            <motion.div className="absolute top-[52px] left-[12%] h-px bg-gradient-to-r from-primary to-accent" initial={{ width: 0 }}
              whileInView={{ width: "76%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="text-center group">
                  <div className="relative z-10 mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-[104px] h-[104px] mx-auto rounded-2xl bg-white border-2 border-border group-hover:border-primary/50 flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300"
                    >
                      <step.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex gap-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-white border-2 border-border flex items-center justify-center shrink-0 shadow-sm">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />}
                </div>
                <div className="pt-1">
                  <h3 className="font-heading font-bold mb-1 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
